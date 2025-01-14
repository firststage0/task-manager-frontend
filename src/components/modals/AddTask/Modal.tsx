"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function AddTask() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowModal(true)}
                className="bg-[#d8d8d8] hover:bg-[#bdbdbb] duration-200 min-w-60 whitespace-nowrap p-2 text-sm font-semibold rounded-xl text-gray-900"
            >
                Add new task
            </button>
            {showModal &&
                createPortal(
                    <ModalContent onClose={() => setShowModal(false)} />,
                    document.body
                )}
        </div>
    );
}
