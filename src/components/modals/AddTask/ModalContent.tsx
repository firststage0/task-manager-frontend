import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { domain } from "@/utils/domain";
import { useBoardsStore } from "@/store/boards";
export default function ModalContent({ onClose }: { onClose: () => void }) {
    const createColumn = useBoardsStore((state) => state.createColumn);
    const board = useBoardsStore((state) => state.activeBoard);
    const [columnName, setColumnName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const ref = useDetectClickOutside({
        onTriggered: () => closeModal(),
    });
    const closeModal = () => {
        setColumnName("");
        onClose();
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleButtonClick = async () => {
        const body = {
            name: columnName,
            boardId: board.id!,
        };
        createColumn(`${domain}/api/columns`, body);
        closeModal();
    };
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-dvh flex items-center justify-center">
                <div
                    ref={ref}
                    className=" w-[300px] border-2 border-gray-700 shadow-2xl bg-white rounded-2xl px-4 py-2 flex flex-col items-end gap-2"
                ></div>
            </div>
        </>
    );
}
