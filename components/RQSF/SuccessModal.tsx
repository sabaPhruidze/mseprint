"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  message: string;
  onClose: () => void;
}

export default function SuccessModal({ message, onClose }: Props) {
  const router = useRouter();

  const handleOk = () => {
    onClose();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h3 className="text-2xl font-inter-extrabold mb-4">Congratulations!</h3>
        <p className="text-lg mb-6">{message}</p>
        <button
          onClick={handleOk}
          className="px-6 py-2 bg-red text-white rounded-lg hover:bg-red-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}
