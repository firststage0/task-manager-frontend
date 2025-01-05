"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function AddBoard() {
    const [showModal, setShowModal] = useState(false);
    const modalContent = (
        <div className="fixed top-0 left-0 w-full h-dvh flex items-center justify-center">
            <div className=" w-[300px] border-2 border-gray-700 shadow-2xl bg-white rounded-2xl px-4 py-2 flex flex-col items-end gap-2">
                <div className="flex items-center justify-between w-full">
                    <p className="text-1xl font-bold">Create new board</p>
                    <button onClick={() => setShowModal(false)}>
                        <Image
                            src="/close.png"
                            alt="close"
                            width={28}
                            height={28}
                        />
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Board name"
                    className="outline-none px-4 py-2 w-full font-medium rounded-xl border-2 border-gray-400"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full">
                    Create
                </button>
            </div>
        </div>
    );
    return (
        <div>
            <button onClick={() => setShowModal(true)}>
                <Image src="/add.png" alt="add" width={28} height={28} />
            </button>
            {showModal && createPortal(modalContent, document.body)}
        </div>
    );
}
