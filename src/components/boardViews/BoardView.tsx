import { useBoardsStore } from "@/store/boards";
import React, { useEffect } from "react";
import { IColumn } from "@/types/boards";
import AddColumn from "../modals/AddColumn/Modal";
import Column from "@/components/Column";
import AddNewTaskBtn from "@/components/AddNewTaskBtn";

export default function BoardView() {
    const board = useBoardsStore((state) => state.activeBoard);
    useEffect(() => {}, []);
    return (
        <>
            <main className="flex w-full h-[calc(100vh-70px)] bg-[#F3F3F0] gap-4 pl-8 pt-8">
                <ul className="flex gap-4">
                    {board.columns &&
                        board.columns.map((column: IColumn) => (
                            <li className="flex flex-col gap-4" key={column.id}>
                                <Column
                                    name={column.name}
                                    tasksCount={column.tasks.length}
                                />
                                {column.tasks &&
                                    column.tasks.map((task) => (
                                        <div key={task.id}></div>
                                    ))}
                                <AddNewTaskBtn
                                    boardId={board.id!}
                                    columnId={column.id!}
                                />
                            </li>
                        ))}
                </ul>

                <AddColumn />
            </main>
        </>
    );
}
