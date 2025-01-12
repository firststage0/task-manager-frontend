"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import ModalContent from "./ModalContent";

export default function AddBoard() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>
                <Image src="/add.png" alt="add" width={28} height={28} />
            </button>
            {showModal &&
                createPortal(
                    <ModalContent onClose={() => setShowModal(false)} />,
                    document.body
                )}
        </div>
    );
}
