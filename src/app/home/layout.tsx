"use client";
import Navbar from "@/components/navbar/component";
import { useBoardsStore } from "@/store/boards";
import { domain } from "@/utils/domain";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const getBoards = useBoardsStore((state) => state.getBoards);

    const getBoardsData = async () => {
        await getBoards(
            `${domain}/api/boards?userId=cm5od3rvl0000vegoo1pjczt1`
        );
        setIsLoading(false);
    };

    useEffect(() => {
        getBoardsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="w-full h-full flex">
            <Navbar />
            <main className="w-full overflow-x-auto">{children}</main>
        </div>
    );
}
