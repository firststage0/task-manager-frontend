"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddBoard from "@/components/modals/AddBoard/Modal";
import { domain } from "@/utils/domain";
import { useBoardsStore } from "@/store/boards";

export default function Page() {
    const boards = useBoardsStore((state) => state.boards);
    const [time, setTime] = useState<string>();
    const date = new Date().toLocaleDateString();
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    const deleteBoard = async (id: number) => {
        const boardReq = await fetch(`${domain}/api/boards/delete`, {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const boardRes = await boardReq.json();
        console.log(boardRes);
    };

    return (
        <div className="w-full h-full flex flex-col">
            <header className="flex items-center justify-between w-full px-6 py-4 border-b-2">
                <div className="flex flex-col gap-2">
                    <p className="text-4xl font-semibold">My space</p>
                    <p className="text-gray-500 text-lg">
                        Your main workspace to manage all boards
                    </p>
                </div>
                <button className="flex items-center text-white bg-blue-400 rounded-3xl gap-2 px-3 py-2">
                    <Image src="/edit.png" alt="" width={20} height={20} />
                    Customize
                </button>
            </header>
            <main className="bg-blue-50 w-full max-h-[calc(100vh-110px)] h-[calc(100vh-110px)] overflow-y-auto px-6 py-8 grid relative ">
                <section
                    style={{ backgroundImage: "url('/home-page.jpg" }}
                    className="w-full max-h-[250px] h-[350px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center 
                    rounded-2xl flex-col gap-4"
                >
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/time.png"
                                alt=""
                                width={26}
                                height={26}
                            />
                            <p className="text-xl font-bold text-white">
                                {time}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/calendar.png"
                                alt=""
                                width={26}
                                height={26}
                            />
                            <p className="text-xl font-bold text-white">
                                {date}
                            </p>
                        </div>
                    </div>
                    <p className="text-white text-6xl font-bold">
                        Welcome, Firststage
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 ">
                        <p className="text-3xl font-bold ">My boards</p>
                        <AddBoard />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {boards &&
                            boards.map((board, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-2xl border-2 border-gray-700 overflow-hidden"
                                >
                                    <Image
                                        src="/home-page.jpg"
                                        alt=""
                                        width={400}
                                        height={400}
                                        objectFit="contain"
                                    />
                                    <div className="flex justify-between p-4 rounded-es-2xl rounded-ee-2xl ">
                                        <p className="text-2xl font-semibold ">
                                            {board.name}
                                        </p>
                                        <button
                                            onClick={() =>
                                                deleteBoard(board.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
