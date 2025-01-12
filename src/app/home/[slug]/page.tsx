"use client";
import { useBoardsStore } from "@/store/boards";
import { usePathname } from "next/navigation";
import { IBoard } from "@/types/boards";
import React, { lazy, useEffect, useState } from "react";
import { domain } from "@/utils/domain";
import Image from "next/image";

const BoardView = lazy(() => import("@/components/boardViews/BoardView"));
const ListView = lazy(() => import("@/components/boardViews/ListView"));

export default function Page() {
    const pageName = usePathname().split("/").pop();
    const [isBoardView, setIsBoardView] = useState(true);
    const boards = useBoardsStore((state) => state.boards);
    const board = useBoardsStore((state) => state.activeBoard);
    const setActiveBoard = useBoardsStore((state) => state.setActiveBoard);
    const getBoard = async () => {
        const boardId =
            boards.find((board: IBoard) => board.urlName === pageName)?.id ||
            null;

        const boardReq = await fetch(`${domain}/api/boards/${boardId}`);
        if (boardReq.ok) {
            const boardRes = await boardReq.json();
            setActiveBoard(boardRes);
        }
    };

    useEffect(() => {
        getBoard();
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
