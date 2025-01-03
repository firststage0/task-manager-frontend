import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="w-[300px] flex flex-col h-dvh bg-gray-800 p-4">
            <p className="text-3xl font-bold text-white">
                Task<span className="text-blue-600">Flow</span>
            </p>
            <nav>
                <ul>
                    <li>
                        <Link href="/home/page1">Page 1</Link>
                    </li>
                    <li>
                        <Link href="/home/page2">Page 2</Link>
                    </li>
                    <li>
                        <Link href="/home/page3">Page 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
