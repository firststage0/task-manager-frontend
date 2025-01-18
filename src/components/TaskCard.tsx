"use client";
import React, { useState } from "react";
import { ITask } from "@/types/boards";
import ContextMenuBtn from "./ContextMenuBtn";
import { TextareaAutosize } from "@mui/base";
import { useBoardsStore } from "@/store/boards";
import DueDateLabel from "@/ui/DueDateLabel";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TaskCard({ task }: { task: ITask }) {
    const [taskBody, setTaskBody] = useState(task);

    const { updateTask, deleteTask } = useBoardsStore((state) => state);
    const handleTaskUpdate = (body: ITask) => {
        setTaskBody(body);
        updateTask(taskBody);
    };
    return (
        <div className="flex flex-col gap-[2px]">
            <div className="w-full flex gap-4 items-start justify-between p-5 bg-white rounded-t-lg">
                <TextareaAutosize
                    defaultValue={task.title}
                    placeholder="Task title"
                    className="w-full resize-none outline-none"
                    onBlur={(e) =>
                        handleTaskUpdate({ ...task, title: e.target.value })
                    }
                />

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <ContextMenuBtn />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem onClick={() => deleteTask(task.id!)}>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="w-full flex gap-4 items-center justify-between px-4 py-2 bg-white rounded-b-lg">
                <div>
                    {/* <label htmlFor="date-input">Due date:</label> */}
                    <input
                        type="date"
                        id="date-input"
                        className=""
                        onChange={(e) =>
                            handleTaskUpdate({
                                ...task,
                                dueDate: e.target.value,
                            })
                        }
                    />
                    {task.dueDate && <DueDateLabel dueDate={task.dueDate} />}
                </div>
            </div>
        </div>
    );
}
