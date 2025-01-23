"use client";
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { colorPalettes } from "@/constants/colorPalettes";
import { IPalette } from "@/types/types";

const PaletteContext = createContext({
    palette: colorPalettes[0],
    setPalette: (palette: IPalette) => {},
});

export const usePalette = () => useContext(PaletteContext);

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [palette, setPalette] = useState<IPalette>(
        colorPalettes.find((p) => p.paletteName === "blue") || colorPalettes[0]
    );
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
