"use client";
import { useBoardsStore } from "@/store/boards";
import { usePathname } from "next/navigation";
import { IBoard } from "@/types/boards";
import React, { useEffect, useState } from "react";
import { domain } from "@/utils/domain";

export default function Page() {
    const pageName = usePathname().split("/").pop();
    const [board, setBoard] = useState<IBoard | null>();
    const boards = useBoardsStore((state) => state.boards);
    const getBoard = async () => {
        const boardId = boards.find(
            (board: IBoard) => board.urlName === pageName
        ).id;
        console.log(boardId);

        const boardReq = await fetch(`${domain}/api/boards/${boardId}`);
        if (boardReq.ok) {
            setBoard(await boardReq.json());
        }
    };

    useEffect(() => {
        getBoard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div>{JSON.stringify(board)}</div>
        </>
    );
}
