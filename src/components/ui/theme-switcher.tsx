'use client';

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }
    return <div className="sm:rotate-90 sm:pt-5 sm:pb-5 sm:w-25 w-full flex sm:justify-end justify-end items-center space-x-2">
        <Moon className="sm:-rotate-90 h-4 w-4 text-gray-900 dark:text-gray-300" />
        <Switch checked={theme === "light"}
            onCheckedChange={toggleTheme}
        />
        <Sun className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
    </div>
}