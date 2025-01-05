"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useDetectClickOutside } from "react-detect-click-outside";
import { domain } from "@/utils/domain";

export default function AddBoard() {
    const [showModal, setShowModal] = useState(false);
    const [boardName, setBoardName] = useState("");
    const ref = useDetectClickOutside({
        onTriggered: () => closeModal(),
    });
    let boardRes;
    const closeModal = () => {
        setBoardName("");
        setShowModal(false);
    };
    const createBoard = async () => {
        const boardReq = await fetch(`${domain}/api/boards`, {
            method: "POST",
            body: JSON.stringify({
                name: boardName,
                authorId: "cm5jw5xo80000vevkdppbehr7",
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (boardReq.ok) {
            boardRes = await boardReq.json();
        }

        console.log(boardRes);
        closeModal();
    };

    const modalContent = (
        <div className="fixed top-0 left-0 w-full h-dvh flex items-center justify-center">
            <div
                ref={ref}
                className=" w-[300px] border-2 border-gray-700 shadow-2xl bg-white rounded-2xl px-4 py-2 flex flex-col items-end gap-2"
            >
                <div className="flex items-center justify-between w-full">
                    <p className="text-1xl font-bold">Create new board</p>
                    <button onClick={() => closeModal()}>
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
                    onChange={(e) => setBoardName(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full"
                    onClick={createBoard}
                >
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
