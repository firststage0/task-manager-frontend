"use client";
import React, { useState, useEffect } from "react";
import { ITask } from "@/types/boards";
import ContextMenuBtn from "./ContextMenuBtn";
import { TextareaAutosize } from "@mui/base";
export default function TaskCard({ task }: { task: ITask }) {
    const [taskTitle, setTaskTitle] = useState(task.title);

    return (
        <div className="flex flex-col gap-[2px]">
            <div className="w-full flex gap-4 items-center justify-between p-5 bg-white rounded-t-lg">
                <TextareaAutosize
                    defaultValue={task.title}
                    placeholder="Task title"
                    className="w-full resize-none outline-none"
                    onBlur={(e) => console.log(e.target.value)}
                />
                <ContextMenuBtn onClick={() => {}} />
            </div>
            <div className="w-full flex gap-4 items-center justify-between px-4 py-2 bg-white rounded-b-lg">
                <div>
                    <button>Due date:</button>
                </div>
            </div>
        </div>
    );
}
