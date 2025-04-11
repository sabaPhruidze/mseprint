"use client";
import React, { useState } from "react";

export default function RQSecondStepRight() {
  const [files, setFiles] = useState<File[]>([]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  }

  return (
    <div className="flex flex-col items-start">
      <h3 className="text-xl font-semibold">
        File Upload (Do not use special characters in file names)
      </h3>

      <div className="border-2 border-dashed border-gray-400 rounded p-4 mt-2 w-full min-h-[200px] flex flex-col items-center justify-center">
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

      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-bold mb-1">Selected Files:</h4>
          <ul className="list-disc list-inside">
            {files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
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
