"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";

export default function RQSecondStepRight() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [uploadFinished, setUploadFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1GB limit per file
  const MAX_FILE_SIZE = 1 * 1024 * 1024 * 1024;

  // Drag-and-drop logic
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} exceeds 1GB limit and was skipped.`);
        return false;
      }
      return true;
    });
    setFiles((prev) => [...prev, ...validFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: MAX_FILE_SIZE,
  });

  // Manual “Add Files” button
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const chosenFiles = Array.from(e.target.files);
    const validFiles = chosenFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} exceeds 1GB limit and was skipped.`);
        return false;
      }
      return true;
    });
    setFiles((prev) => [...prev, ...validFiles]);
  }

  // Remove a file from the list
  function handleRemoveFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  // Main upload logic
  async function handleUpload() {
    if (files.length === 0) return;

    setUploading(true);
    setUploadFinished(false);
    setProgress(0);
    setError(null);

    try {
      // 1) ZIP all selected files
      const zip = new JSZip();
      for (const file of files) {
        zip.file(file.name, file);
      }
      const zipBlob = await zip.generateAsync({ type: "blob" });

      // Generate a unique file name for each upload
      const uniqueFileName = `RequestQuoteFiles-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 7)}.zip`;

      // 2) Ask our Next.js API for a presigned URL using the unique file name
      const presignRes = await fetch("/api/upload-s3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: uniqueFileName, // Now using the unique name
          fileType: "application/zip",
        }),
      });
      if (!presignRes.ok) {
        throw new Error("Failed to get presigned URL from server.");
      }

      // 3) Extract the presigned URL & public download link from server’s response
      const { presignedUrl, downloadUrl } = await presignRes.json();

      // 4) PUT the ZIP to the presigned URL
      await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/zip",
        },
        body: zipBlob,
      });

      // 5) Show "fake" progress from 0 to 100
      let fakeProgress = 0;
      const progressInterval = setInterval(() => {
        fakeProgress += 10;
        setProgress(fakeProgress);
        if (fakeProgress >= 100) {
          clearInterval(progressInterval);
          setUploading(false);
          setUploadFinished(true);

          // Log the final S3 link for debugging
          console.log("File uploaded to:", downloadUrl);
        }
      }, 200);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      setUploading(false);
    }
  }

  const showFileControls = !uploading && !uploadFinished;

  return (
    <div className="screen-size-12:w-full w-[460px]">
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

        {/* Title + Add Files Button */}
        <div className="flex flex-col items-center">
          <p className="mb-2 text-base text-center">Drag files to upload, or</p>
          {showFileControls && (
            <label
              className="
                bg-gray-700 p-2 rounded cursor-pointer w-[180px] h-[50px]
                flex items-center justify-center
                hover:bg-black
                transition-colors duration-700
              "
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
            File size limit: 1GB per file
          </p>
        </div>

        {/* Display Selected Files */}
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
                      className="text-red-600"
                    >
                      Remove
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Upload Button */}
        {showFileControls && files.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleUpload();
            }}
            className="
              bg-gray-700 p-2 rounded cursor-pointer w-[180px] h-[50px]
              flex items-center justify-center
              hover:bg-black
              transition-colors duration-700 text-white font-inter-extrabold
              text-[20px] mt-4
            "
          >
            Upload
          </button>
        )}

        {/* Progress Bar */}
        {uploading && (
          <div className="mt-4 w-full">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-blue-600 h-2 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1 text-sm text-center">
              {progress}% Uploading... Please wait.
            </p>
          </div>
        )}

        {/* Success Message */}
        {uploadFinished && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            Upload Complete! Check console for the S3 link.
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-red-500 text-center">
            <strong>Error:</strong> {error}
          </p>
        )}
      </div>

      <p className="text-gray-400 text-xs mt-4">
        Choose all files first using the "Add Files" button. Only when you are
        ready, click "Upload" to start uploading all files as a single ZIP.
        After uploading, you cannot add more files until you submit and come
        back to this page. It may take a few minutes depending on file size and
        internet speed. Do not refresh or close the page during the upload.
      </p>
    </div>
  );
}
