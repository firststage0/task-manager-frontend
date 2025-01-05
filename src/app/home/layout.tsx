import Navbar from "@/components/navbar/component";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex">
            <Navbar />
            <main className="w-full ">{children}</main>
        </div>
    );
}
