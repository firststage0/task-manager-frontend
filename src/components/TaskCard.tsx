"use client";
import React, { useState } from "react";
import { ITask } from "@/types/boards";
import ContextMenuBtn from "./ContextMenuBtn";
import { TextareaAutosize } from "@mui/base";
import { useBoardsStore } from "@/store/boards";
export default function TaskCard({ task }: { task: ITask }) {
    const [taskTitle, setTaskTitle] = useState(task.title);
    const updateTask = useBoardsStore((state) => state.updateTask);
    const handleTaskUpdate = () => {
        updateTask({ title: taskTitle, id: task.id! });
    };
    return (
        <div className="flex flex-col gap-[2px]">
            <div className="w-full flex gap-4 items-center justify-between p-5 bg-white rounded-t-lg">
                <TextareaAutosize
                    defaultValue={task.title}
                    placeholder="Task title"
                    className="w-full resize-none outline-none"
                    onChange={(e) => setTaskTitle(e.target.value)}
                    onBlur={handleTaskUpdate}
                />
                <ContextMenuBtn onClick={() => {}} />
            </div>
            <div className="w-full flex gap-4 items-center justify-between px-4 py-2 bg-white rounded-b-lg">
                <div>
                    <label htmlFor="date-input">Due date:</label>
                    <input type="date" id="date-input" className="" />
                </div>
            </div>
        </div>
    );
}
