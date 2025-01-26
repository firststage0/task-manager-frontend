"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePalette } from "./theme-provider";
import { colorPalettes } from "@/constants/colorPalettes";
export default function App() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const { palette, setPalette } = usePalette();
    const toogleColorPalete = (paleteName: string) => {
        const palete = colorPalettes.find((p) => p.paletteName === paleteName);
        if (palete) {
            setPalette(palete);
            localStorage.setItem("color-palette", JSON.stringify(palete));
        } else {
            console.log("no color found");
        }
    };

    const renderHomePage = () => {
        switch (true) {
            case !mounted:
                return null;
            default:
                return (
                    <div className="grid grid-cols-5 w-full h-dvh row-auto">
                        <div className="w-full h-full col-span-3 py-16 px-36 flex flex-col gap-6 bg-secondaryBackground">
                            <p className="text-3xl font-bold">
                                Task
                                <span style={{ color: palette.color }}>
                                    Flow
                                </span>
                            </p>
                            <p className="text-2xl font-medium">
                                Welcome to my task manager, where you can manage
                                your tasks and workspaces.
                            </p>
                            <div className="flex gap-12">
                                <div className="flex flex-col gap-2 flex-grow">
                                    <p className="font-bold text-[18px]">
                                        Your name
                                    </p>
                                    <input
                                        type="text"
                                        className="p-2 w-full border-solid border-2 outline-none rounded-lg font-medium bg-background"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 flex-grow">
                                    <p className="font-bold text-[18px] text-nowrap">
                                        Name your workspace
                                    </p>

                                    <input
                                        type="text"
                                        className="p-2 w-full border-solid border-2 outline-none rounded-lg font-medium bg-background"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-[20px]">
                                        Customize your workspace
                                    </p>
                                    <p className="font-medium text-[16px] text-secondaryText">
                                        Choose a color palette what you like
                                    </p>
                                </div>
                                <div className="flex gap-8 overflow-auto w-full px-20 py-6 bg-background rounded-xl border border-solid border-slate-300 justify-between">
                                    {colorPalettes.map((palette, key) => (
                                        <button
                                            style={{
                                                backgroundColor: palette.color,
                                            }}
                                            className="min-w-8 min-h-8 max-w-8 rounded-full"
                                            key={key}
                                            onClick={() =>
                                                toogleColorPalete(
                                                    palette.paletteName
                                                )
                                            }
                                        >
                                            {" "}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <button
                                    onClick={() => setTheme("light")}
                                    className="rounded-xl"
                                >
                                    <Image
                                        className="rounded-t-xl border-2"
                                        style={{
                                            borderColor:
                                                theme === "light"
                                                    ? palette.color
                                                    : "lightgrey",
                                        }}
                                        src="/light-mode-home.svg"
                                        alt="sun"
                                        width={400}
                                        height={300}
                                    />
                                    <div
                                        className="flex justify-between gap-2 bg-background px-6 py-4 rounded-b-xl border-2 mt-[-2px]"
                                        style={{
                                            borderColor:
                                                theme === "light"
                                                    ? palette.color
                                                    : "lightgrey",
                                        }}
                                    >
                                        <p className="font-medium text-nowrap text-xl">
                                            Light mode
                                        </p>
                                    </div>
                                </button>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="rounded-xl"
                                >
                                    <Image
                                        className="rounded-t-xl border-2"
                                        style={{
                                            borderColor:
                                                theme === "dark"
                                                    ? palette.color
                                                    : "lightgrey",
                                        }}
                                        src="/dark-mode-home.svg"
                                        alt="sun"
                                        width={400}
                                        height={300}
                                    />
                                    <div
                                        className="flex justify-between gap-2 bg-background px-6 py-4 rounded-b-xl border-2 mt-[-2px]"
                                        style={{
                                            borderColor:
                                                theme === "dark"
                                                    ? palette.color
                                                    : "lightgrey",
                                        }}
                                    >
                                        <p className="font-medium text-nowrap text-xl">
                                            Dark mode
                                        </p>
                                    </div>
                                </button>
                            </div>
                            <Link
                                href={"/home"}
                                className="bg-blue-500 py-2 px-3 gap-2 rounded-xl flex items-center w-max "
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
    };

    useEffect(() => {
        const colorPalette = localStorage.getItem("color-palette");
        if (colorPalette) {
            setPalette(JSON.parse(colorPalette));
        } else {
            setPalette(colorPalettes[0]);
        }
        setMounted(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return renderHomePage();
}
