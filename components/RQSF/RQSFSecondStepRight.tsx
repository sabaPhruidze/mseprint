"use client";

import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";

const MAX_FILE_SIZE = 1 * 1024 * 1024 * 1024; // 1 GB

interface Props {
  setDownloadUrl: (url: string) => void;
}

interface PresignResponse {
  presignedUrl: string;
  downloadUrl: string;
}

export default function RQSFSecondStepRight({ setDownloadUrl }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [preparing, setPreparing] = useState(false);
  const [zipProgress, setZipProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadFinished, setUploadFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const valid = acceptedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} exceeds the 1 GB limit and was skipped.`);
        return false;
      }
      return true;
    });
    setFiles((prev) => [...prev, ...valid]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: MAX_FILE_SIZE,
  });

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const chosen = Array.from(e.target.files);
    const valid = chosen.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} exceeds the 1 GB limit and was skipped.`);
        return false;
      }
      return true;
    });
    setFiles((prev) => [...prev, ...valid]);
  }

  function handleRemoveFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleUpload() {
    if (files.length === 0) return;

    // reset UI
    setPreparing(true);
    setZipProgress(0);
    setUploading(false);
    setUploadFinished(false);
    setProgress(0);
    setError(null);

    try {
      /* ---------- 1. Build ZIP with progress ---------- */
      const zip = new JSZip();
      files.forEach((file) => zip.file(file.name, file));
      const zipBlob = await zip.generateAsync({ type: "blob" }, ({ percent }) =>
        setZipProgress(Math.round(percent))
      );
      setPreparing(false);

      /* ---------- 2. Presign ---------- */
      const uniqueName = `RequestQuoteFiles-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 7)}.zip`;

      const presignRes = await fetch("/api/upload-s3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: uniqueName,
          fileType: "application/zip",
        }),
      });

      if (!presignRes.ok) {
        throw new Error("Failed to get presigned URL from server.");
      }

      const { presignedUrl, downloadUrl } =
        (await presignRes.json()) as PresignResponse;

      /* ---------- 3. Upload with Axios + progress ---------- */
      setUploading(true);
      await axios.put(presignedUrl, zipBlob, {
        headers: { "Content-Type": "application/zip" },
        onUploadProgress: (e) => {
          const pct = Math.round((e.loaded / (e.total ?? zipBlob.size)) * 100);
          setProgress(pct);
        },
      });

      /* ---------- 4. Finish ---------- */
      setProgress(100);
      setUploading(false);
      setUploadFinished(true);
      setDownloadUrl(downloadUrl);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(message);
      setError(message || "Upload failed.");
      setPreparing(false);
      setUploading(false);
    }
  }

  const showFileControls = !preparing && !uploading && !uploadFinished;

  return (
    <div className="screen-size-12:w-full screen-size-5:w-[460px] w-[300px] mx-auto text-center screen-size-12:text-left">
      <h3 className="text-xl font-semibold mb-4">
        File Upload (Do not use special characters in file names)
      </h3>

      <div
        {...getRootProps()}
        className="
          border-2 border-dashed border-gray-400 rounded
          w-full min-h-[400px]
          p-4 flex flex-col
          items-center justify-center
          cursor-pointer
        "
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center">
          <p className="mb-2 text-base text-center">Drag files to upload, or</p>
          {showFileControls && (
            <label
              className="bg-gray-700 p-2 rounded cursor-pointer w-[180px] h-[50px]
              flex items-center justify-center hover:bg-black
              transition-colors duration-700  border-1 dark:border-white border border-white"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white font-inter-extrabold text-[20px]">
                Add Files
              </span>
              <input
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
            </label>
          )}
          <p className="mt-2 text-sm text-gray-500 text-center">
            File size limit: 1 GB per file
          </p>
        </div>

        {files.length > 0 && (
          <div className="mt-6 text-center">
            <h4 className="text-md font-bold mb-1">Selected Files:</h4>
            <ul className="list-disc list-inside space-y-1 inline-block text-left">
              {files.map((file, index) => (
                <li key={file.name} className="flex items-center gap-2">
                  <span>{file.name}</span>
                  {showFileControls && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile(index);
                      }}
                      className="text-red"
                    >
                      Remove
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showFileControls && files.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleUpload();
            }}
            className="bg-gray-700 p-2 rounded cursor-pointer w-[180px] h-[50px]
            flex items-center justify-center hover:bg-black border border-white
            transition-colors duration-700 text-white font-inter-extrabold
            text-[20px] mt-4 dark:border-white"
          >
            Upload
          </button>
        )}

        {/* Preparing progress bar */}
        {preparing && (
          <div className="mt-4 w-full">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-amber-500 h-2 rounded"
                style={{ width: `${zipProgress}%` }}
              />
            </div>
            <p className="mt-1 text-sm text-center">
              {zipProgress}% Preparing files…
            </p>
          </div>
        )}

        {/* Uploading progress bar */}
        {uploading && (
          <div className="mt-4 w-full">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-blue-600 h-2 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1 text-sm text-center">
              {progress}% Uploading… Please wait.
            </p>
          </div>
        )}

        {uploadFinished && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            Upload Complete! File is attached to your form.
          </p>
        )}

        {error && (
          <p className="mt-4 text-red text-center">
            <strong>Error:</strong> {error}
          </p>
        )}
      </div>

      <p className="text-gray-400 text-xs mt-4 text-center screen-size-12:text-left">
        Choose all files first using the &quot;Add Files&quot; button. Only when
        you are ready, click &quot;Upload&quot; to start uploading all files as
        a single ZIP. After uploading, you cannot add more files until you
        submit and come back to this page. It may take a few minutes depending
        on file size and internet speed. Do not refresh or close the page during
        the upload.
      </p>
    </div>
  );
}
