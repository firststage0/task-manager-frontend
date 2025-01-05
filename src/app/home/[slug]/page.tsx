"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Page() {
    const pageName = usePathname().split("/").pop();

    return (
        <>
            <div>{pageName}</div>
        </>
    );
}
