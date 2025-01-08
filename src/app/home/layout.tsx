"use client";
import Navbar from "@/components/navbar/component";
import { useBoardsStore } from "@/store/boards";
import { domain } from "@/utils/domain";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const getBoards = useBoardsStore((state) => state.getBoards);

    const getData = async () => {
        await getBoards(
            `${domain}/api/boards?userId=cm5od3rvl0000vegoo1pjczt1`
        );
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderData = () => {
        switch (isLoading) {
            case true:
                return <div>Loading...</div>;

            case false:
                return (
                    <div className="w-full h-full flex">
                        <Navbar />
                        <main className="w-full ">{children}</main>
                    </div>
                );
            default:
                return <div>Error</div>;
        }
    };

    return <>{renderData()}</>;
}
