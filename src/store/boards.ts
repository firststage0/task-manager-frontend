import { create } from "zustand";
import { IBoard } from "@/types/boards";

interface IBoardsStore {
    boards: IBoard[];
    activeBoard: IBoard;
    getBoards: (url: string) => Promise<void>;
    setActiveBoard: (board: IBoard) => void;
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
    // createColumn: async (url: string, body: IColumn) => {},
}));
