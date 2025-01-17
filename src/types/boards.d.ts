export interface IBoard {
    id?: number;
    name: string;
    urlName: string;
    authorId: string;
    columns: IColumn[];
}

export interface ITask {
    id?: number;
    title: string;
    urlName?: string;
    description: string;
    priority?: string;
    tag?: string;
    isComleted?: boolean;
    isPinned?: boolean;
    authorId: string;
    boardId: number;
    createdAt?: Date;
    columnId: number;
}

export type TaskUpdateBody = Partial<ITask>;

export interface IColumn {
    id?: number;
    name: string;
    tasks: ITask[];
    boardId: number;
}

export interface ICheckListItem {
    id?: number;
    name: string;
    taskId: number;
    isCompleted: boolean;
}
