import { create } from "zustand";
import { IBoard, ITask, TaskUpdateBody } from "@/types/boards";
import { domain } from "@/utils/domain";

interface IBoardsStore {
    boards: IBoard[];
    activeBoard: IBoard;
    getBoards: (url: string) => Promise<void>;
    getBoard: (boardName: string) => Promise<void>;
    setActiveBoard: (board: IBoard) => void;
    createColumn: (url: string, body: IColumnCreateBody) => Promise<void>;
    createTask: (body: ITask) => Promise<void>;
    updateTask: (body: TaskUpdateBody) => Promise<void>;
}

interface IColumnCreateBody {
    name: string;
    boardId: number;
}

export const useBoardsStore = create<IBoardsStore>((set, get) => ({
    boards: [] as IBoard[],
    activeBoard: {} as IBoard,
    getBoards: async (url: string) => {
        console.log("Get boards");
        const boardReq = await fetch(url);
        if (boardReq.ok) {
            set({ boards: await boardReq.json() });
        }
    },
    getBoard: async (boardName) => {
        const boardId =
            get().boards.find((board: IBoard) => board.urlName === boardName)
                ?.id || null;

        const boardReq = await fetch(`${domain}/api/boards/${boardId}`);
        if (boardReq.ok) {
            const boardRes = await boardReq.json();
            get().setActiveBoard(boardRes);
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
    createTask: async (body) => {
        const task = await fetch(`${domain}/api/tasks`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(await task.json());
    },
    updateTask: async (body) => {
        const task = await fetch(`${domain}/api/tasks/update-task`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(await task.json());
    },
}));
