import Navbar from "@/components/navbar/component";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
