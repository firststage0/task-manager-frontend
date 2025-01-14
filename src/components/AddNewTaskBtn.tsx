import { useBoardsStore } from "@/store/boards";
import { usePathname } from "next/navigation";
import React from "react";

export default function AddNewTaskBtn({
    columnId,
    boardId,
}: {
    columnId: number;
    boardId: number;
}) {
    const { createTask, getBoard } = useBoardsStore((state) => state);

    const boardName = usePathname().split("/").pop();
    const handleButtonClick = () => {
        const taskBody = {
            title: "",
            description: "",
            columnId: columnId,
            authorId: "cm5od3rvl0000vegoo1pjczt1",
            boardId: boardId,
        };
        createTask(taskBody);
        if (boardName) {
            getBoard(boardName);
        }
    };
    return (
        <button
            onClick={handleButtonClick}
            className="bg-[#dfdcd8] px-4 py-2 rounded-xl hover:bg-[#cfcaca] duration-200"
        >
            Add new task
        </button>
    );
}
