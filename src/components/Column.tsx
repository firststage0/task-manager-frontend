import React from "react";
import ContextMenuBtn from "@/components/ContextMenuBtn";

interface ColumnProps {
    name: string;
    tasksCount?: number;
}

export default function Column({ name, tasksCount }: ColumnProps) {
    return (
        <div>
            <div className="flex gap-2 rounded-xl bg-white h-min px-4 py-2 min-w-72 items-center justify-between shadow-blue-500/90 shadow-columnShadow">
                <div className="flex gap-4">
                    <p>{name}</p>

                    {tasksCount !== undefined && tasksCount > 0 && (
                        <p>{tasksCount}</p>
                    )}
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
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <ContextMenuBtn onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}
