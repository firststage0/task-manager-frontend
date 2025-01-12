import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { domain } from "@/utils/domain";
export default function ModalContent({ onClose }) {
    const [boardName, setBoardName] = useState("");
    const inputRef = useRef(null);
    const ref = useDetectClickOutside({
        onTriggered: () => closeModal(),
    });

    let boardRes;
    const closeModal = () => {
        setBoardName("");
        onClose();
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const createBoard = async () => {
        const boardReq = await fetch(`${domain}/api/boards`, {
            method: "POST",
            body: JSON.stringify({
                name: boardName,
                authorId: "cm5od3rvl0000vegoo1pjczt1",
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
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-dvh flex items-center justify-center">
                <div
                    ref={ref}
                    className=" w-[300px] border-2 border-gray-700 shadow-2xl bg-white rounded-2xl px-4 py-2 flex flex-col items-end gap-2"
                >
                    <div className="flex items-center justify-between w-full">
                        <p className="text-1xl font-bold">Create new board</p>
                        <button onClick={() => onClose()}>
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
                        ref={inputRef}
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
        </>
    );
}
