import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="w-[350px] flex flex-col h-dvh bg-gray-800 p-6 justify-between">
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold text-white">
                    Task<span className="text-blue-600">Flow</span>
                </p>
                <nav>
                    <ul className="text-white">
                        <li>
                            <Link
                                href="/home/"
                                className="flex items-center gap-2 rounded-xl transition-all duration-250 text-medium p-3 hover:text-blue-800 hover:bg-gray-500 "
                            >
                                <Image
                                    src="/app-icon.svg"
                                    width={20}
                                    height={20}
                                    alt="apps-icon"
                                />
                                My Space
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/home/page1"
                                className="flex items-center gap-2 rounded-xl transition-all duration-250 text-medium p-3 hover:text-blue-800 hover:bg-gray-500 "
                            >
                                <Image
                                    src="/triangle.svg"
                                    width={18}
                                    height={18}
                                    alt="triangle"
                                    className="rotate-90"
                                />
                                Page 1
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/home/page2"
                                className="flex items-center gap-2 rounded-xl transition-all duration-250 text-medium p-3 hover:text-blue-800 hover:bg-gray-500 "
                            >
                                <Image
                                    src="/triangle.svg"
                                    width={18}
                                    height={18}
                                    alt="triangle"
                                    className="rotate-90"
                                />
                                Page 2
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/home/page3"
                                className="flex items-center gap-2 rounded-xl transition-all duration-250 text-medium p-3 hover:text-blue-800 hover:bg-gray-500 "
                            >
                                <Image
                                    src="/triangle.svg"
                                    width={18}
                                    height={18}
                                    alt="triangle"
                                    className="rotate-90 object-contain"
                                />
                                Page 3
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col gap-6">
                <Link
                    href="/about"
                    className="flex gap-8 text-white font-medium text-lg items-center"
                >
                    <Image
                        src="/octagon.svg"
                        width={22}
                        height={22}
                        alt="triangle"
                        className="rotate-90 object-contain"
                    />
                    About project
                </Link>

                <div className="flex gap-4 text-white font-medium text-lg items-center justify-center cursor-pointer">
                    Light
                    <div className="flex gap-4 p-4 rounded-full bg-gray-700">
                        <Image
                            src="/sun.svg"
                            alt="sun"
                            width={32}
                            height={32}
                        />
                        <Image
                            src="/moon-2.svg"
                            alt="sun"
                            width={32}
                            height={32}
                        />
                    </div>
                    Dark
                </div>
            </div>
        </div>
    );
}
