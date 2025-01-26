"use client";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { colorPalettes } from "@/constants/colorPalettes";
import { IPalette } from "@/types/types";

interface IPaletteContextType {
    palette: IPalette;
    setPalette: Dispatch<SetStateAction<IPalette>>;
}

const PaletteContext = createContext<IPaletteContextType | null>(null);

export const usePalette = () => {
    const paletteContext = useContext(PaletteContext);
    if (!paletteContext) {
        throw new Error(
            "usePalette has to be used within <PaletteContext.Provider>"
        );
    }
    return paletteContext;
};

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [palette, setPalette] = useState<IPalette>(
        colorPalettes.find((p) => p.paletteName === "blue") || colorPalettes[0]
    );
    return (
        <NextThemeProvider attribute="class" defaultTheme="system">
            <PaletteContext.Provider value={{ palette, setPalette }}>
                {children}
            </PaletteContext.Provider>
        </NextThemeProvider>
    );
}
