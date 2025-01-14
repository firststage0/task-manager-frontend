"use client";
import { useBoardsStore } from "@/store/boards";
import { usePathname } from "next/navigation";
import React, { lazy, useEffect, useState } from "react";
import Image from "next/image";

const BoardView = lazy(() => import("@/components/boardViews/BoardView"));
const ListView = lazy(() => import("@/components/boardViews/ListView"));

export default function Page() {
    const pageName = usePathname().split("/").pop();
    const [isBoardView, setIsBoardView] = useState(true);
    const board = useBoardsStore((state) => state.activeBoard);
    const getBoard = useBoardsStore((state) => state.getBoard);

    useEffect(() => {
        if (pageName === undefined) return;
        getBoard(pageName);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <header className="flex items-center justify-between w-full px-6 py-4 border-b-2">
                <div className="flex items-center justify-between gap-24 ">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/app-icon.svg"
                            alt="board"
                            width={36}
                            height={36}
                        />
                        <h1 className="text-2xl font-semibold">
                            {board?.name}
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => setIsBoardView(true)}>
                            Board View
                        </button>
                        <button onClick={() => setIsBoardView(false)}>
                            List View
                        </button>
                    </div>
                </div>

                <div>Filter</div>
            </header>
            <main>
                <div>{isBoardView ? <BoardView /> : <ListView />}</div>
            </main>
        </>
    );
}
