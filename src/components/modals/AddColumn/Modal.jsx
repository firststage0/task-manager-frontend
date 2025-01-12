"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function AddColumn() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add new column</button>
            {showModal &&
                createPortal(
                    <ModalContent onClose={() => setShowModal(false)} />,
                    document.body
                )}
        </div>
    );
}
