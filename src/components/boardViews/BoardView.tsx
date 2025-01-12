import { useBoardsStore } from "@/store/boards";
import React, { useEffect } from "react";
import { IColumn } from "@/types/boards";
export default function BoardView() {
    const board = useBoardsStore((state) => state.activeBoard);
    useEffect(() => {}, []);
    return (
        <>
            <main>
                <ul>
                    {board.columns &&
                        board.columns.map((column: IColumn) => (
                            <li key={column.id}>
                                <p>
                                    {column.name}
                                    {column.tasks.length
                                        ? column.tasks.length
                                        : null}
                                </p>
                            </li>
                        ))}
                </ul>
                <button>Add new column</button>
            </main>
        </>
    );
}
