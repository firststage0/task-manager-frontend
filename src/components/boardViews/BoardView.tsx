import { useBoardsStore } from "@/store/boards";
import React, { useEffect } from "react";
import { IColumn } from "@/types/boards";
import AddColumn from "../modals/AddColumn/Modal";
export default function BoardView() {
    const board = useBoardsStore((state) => state.activeBoard);
    useEffect(() => {}, []);
    return (
        <>
            <main className="flex w-full h-[calc(100vh-80px)] bg-[#F3F3F0] gap-4 pl-8 pt-8">
                <ul className="flex gap-4">
                    {board.columns &&
                        board.columns.map((column: IColumn) => (
                            <li
                                className="flex gap-2 rounded-xl bg-white h-min px-4 py-2 min-w-72 items-center justify-between shadow-blue-500/90 shadow-columnShadow"
                                key={column.id}
                            >
                                <div className="flex gap-4">
                                    <p>{column.name}</p>
                                    <p>
                                        {column.tasks.length
                                            ? column.tasks.length
                                            : null}
                                    </p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <button className="text-black font-semibold text-2xl outline-none hover:text-blue-500 transition-colors">
                                        <svg
                                            width="18px"
                                            height="18px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 12H18M12 6V18"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button className="hover:text-blue-500 transition-colors outline-none">
                                        <svg
                                            width="18px"
                                            height="18px"
                                            viewBox="0 0 16 16"
                                            fill="blue"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                </ul>

                <AddColumn />
            </main>
        </>
    );
}
