"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePalette } from "./theme-provider";
export default function App() {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();
    const { palette, setPalette } = usePalette();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="grid grid-cols-5 w-full h-dvh row-auto">
            <div className="w-full h-full col-span-3 py-16 px-36 flex flex-col gap-6">
                <p className="text-3xl font-bold">
                    Task<span className={`text-[${palette.color}]`}>Flow</span>
                </p>
                <p className="text-2xl font-medium">
                    Welcome to my task manager, where you can manage your tasks
                    and workspaces.
                </p>
                <div className="flex gap-12">
                    <div className="flex flex-col gap-2 flex-grow">
                        <p className="font-bold text-[18px] ">Your name</p>
                        <div className="">
                            <input
                                type="text"
                                className="p-2 w-full border-solid border-2 outline-none rounded-lg font-medium"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-grow">
                        <p className="font-bold text-[18px] text-nowrap">
                            Name your workspace
                        </p>
                        <div>
                            <input
                                type="text"
                                className="p-2 w-full border-solid border-2 outline-none rounded-lg font-medium"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => setTheme("light")}>
                        Light mode
                    </button>
                    <button onClick={() => setTheme("dark")}>Dark mode</button>
                </div>
                <Link
                    href={"/home"}
                    className="bg-blue-500 py-2 px-3 gap-2 rounded-xl flex items-center w-max absolute bottom-14"
                >
                    <p className="font-medium text-white text-nowrap">
                        Let`s start
                    </p>
                    <Image
                        src="/arrow.png"
                        width={20}
                        height={20}
                        alt="arrow"
                    />
                </Link>
            </div>
            <div className="relative w-full col-span-2 h-full">
                <Image
                    src="/abstract.jpg"
                    alt="Logo"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
