import { create } from "zustand";

interface Board {
    id: number;
    name: string;
    authorId: string;
}

export const useBoardsStore = create((set) => ({
    boards: [] as Board[],
    getBoards: async (url: string) => {
        console.log("Get boards");
        const boardReq = await fetch(url);
        if (boardReq.ok) {
            set({ boards: await boardReq.json() });
        }
    },
}));
