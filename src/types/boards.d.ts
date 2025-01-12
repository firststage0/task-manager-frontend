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
    urlName: string;
    description: string;
    priority: string;
    tag: string;
    isComleted: boolean;
    isPinned: boolean;
    authorId: string;
    boardId: number;
    createdAt: Date;
    columnId: number;
}

export interface IColumn {
    id?: number;
    name: string;
    tasks: ITask[];
    boardId: number;
}