"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone"; // optional library
import JSZip from "jszip"; // optional if you want to zip locally

export default function RQSecondStepRight() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [uploadFinished, setUploadFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1GB = 1 * 1024 * 1024 * 1024
  const MAX_FILE_SIZE = 1 * 1024 * 1024 * 1024;

  // React Dropzone callback (for drag-and-drop)
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Filter out any that exceed 1GB
    const validFiles = acceptedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} exceeds 1GB limit and was skipped.`);
        return false;
      }
      return true;
    });
    setFiles((prev) => [...prev, ...validFiles]);
  }, []);

  // Initialize useDropzone (optional)
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: MAX_FILE_SIZE,
  });

  // Also handle "Add Files" button (hidden file input)
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

  // Remove file from list
  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Actual upload logic
  async function handleUpload() {
    if (files.length === 0) return;
    setUploading(true);
    setUploadFinished(false);
    setProgress(0);
    setError(null);

    try {
      // OPTIONAL: Zip the files before uploading
      const zip = new JSZip();
      for (let file of files) {
        zip.file(file.name, file);
      }
      const zipBlob = await zip.generateAsync({ type: "blob" });

      // (A) If you want to upload via a Next.js API route:
      // Make a FormData with the zip
      // Example:
      const formData = new FormData();
      formData.append("file", zipBlob, "RequestQuoteFiles.zip");

      const response = await fetch("/api/upload-files", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading file(s).");
      }

      // Simulate progress or parse response if your API returns progress
      // For now, let's do a quick artificial progress demonstration:
      let fakeProgress = 0;
      const progressInterval = setInterval(() => {
        fakeProgress += 10;
        setProgress(fakeProgress);
        if (fakeProgress >= 100) {
          clearInterval(progressInterval);
          setUploading(false);
          setUploadFinished(true);
        }
      }, 200);

      // If your actual server route returns progress, you'd update `progress` based on the streaming data.
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col items-start w-full">
      <h3 className="text-xl font-semibold mb-2">
        File Upload (Do not use special characters in file names)
      </h3>

      {/* Drag & Drop Area */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-400 rounded w-full min-h-[400px] flex flex-col items-center justify-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="mb-2 text-base">Drag files to upload, or</p>
        <label className="bg-gray-200 p-2 rounded cursor-pointer">
          <span>Add Files</span>
          <input
            type="file"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
        </label>
        <p className="mt-2 text-sm text-gray-500">
          File size limit: 1GB per file
        </p>
      </div>

      {/* Selected Files */}
      {files.length > 0 && (
        <div className="mt-4 w-full">
          <h4 className="text-md font-bold mb-1">Selected Files:</h4>
          <ul className="list-disc list-inside">
            {files.map((file, index) => (
              <li key={file.name} className="flex items-center gap-2">
                {file.name}
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500 ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Upload Button + Progress */}
      {files.length > 0 && !uploading && !uploadFinished && (
        <button
          onClick={handleUpload}
          className="mt-3 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload
        </button>
      )}

      {uploading && (
        <div className="mt-3 w-full flex flex-col items-start">
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-blue-600 h-2 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1 text-sm">{progress}% Uploading...</p>
        </div>
      )}

      {uploadFinished && (
        <p className="mt-3 text-green-600">
          <strong>Upload Complete!</strong> Your files have been uploaded.
        </p>
      )}

      {error && (
        <p className="mt-3 text-red-500">
          <strong>Error:</strong> {error}
        </p>
      )}

      <p className="text-gray-400 text-xs mt-4">
        Choose all files first. Click "Upload" to start uploading all files as a
        single ZIP. After uploading, you cannot add more files until you submit.
        It may take a few minutes depending on size. Do not refresh or close the
        page during the upload.
      </p>
    </div>
  );
}
