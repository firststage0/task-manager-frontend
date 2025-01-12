import { create } from "zustand";
import { IBoard } from "@/types/boards";

interface IBoardsStore {
    boards: IBoard[];
    activeBoard: IBoard;
    getBoards: (url: string) => Promise<void>;
    setActiveBoard: (board: IBoard) => void;
    createColumn: (url: string, body: IColumnCreateBody) => Promise<void>;
}

interface IColumnCreateBody {
    name: string;
    boardId: number;
}

export const useBoardsStore = create<IBoardsStore>((set) => ({
    boards: [] as IBoard[],
    activeBoard: {} as IBoard,
    getBoards: async (url: string) => {
        console.log("Get boards");
        const boardReq = await fetch(url);
        if (boardReq.ok) {
            set({ boards: await boardReq.json() });
        }
    },
    setActiveBoard: (board: IBoard) => {
        set({ activeBoard: board });
    },
    createColumn: async (url: string, body: IColumnCreateBody) => {
        const columnReq = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(await columnReq.json());
    },
}));
