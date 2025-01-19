"use client";
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { colorPalettes } from "@/constants/colorPalettes";

const PaletteContext = createContext({});

export const usePalette = () => useContext(PaletteContext);

interface Palette {
    color: string;
    paletteName: string;
    shadow: string;
}

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [palette, setPalette] = useState<Palette>(colorPalettes["blue"]);
    return (
        <div>
            <NextThemeProvider attribute="class" defaultTheme="system">
                <PaletteContext.Provider value={{ palette, setPalette }}>
                    {children}
                </PaletteContext.Provider>
            </NextThemeProvider>
        </div>
    );
}
