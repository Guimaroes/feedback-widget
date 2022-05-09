import { List, Sun, Moon } from "phosphor-react";

interface FakeHeaderProps {
    theme: string;
    onChangeTheme: () => void;
}

export function FakeHeader({ theme, onChangeTheme }: FakeHeaderProps) {
    return (
        <div className="bg-zinc-800 h-[76px] w-full flex items-center">
            <List weight="bold" className="h-10 w-10 text-zinc-700 ml-4"/>
            <div className="ml-auto flex items-center">
                <button
                    onClick={onChangeTheme}
                    className="h-8 w-8 flex items-center justify-center rounded-lg mr-4 bg-brand-500 dark:bg-red-500 text-white"
                >
                    { 
                        theme ?
                        <Moon className="h-6 w-6"/>
                        :
                        <Sun className="h-6 w-6"/>
                    }
                </button>
                <div className="bg-zinc-700 h-8 w-8 rounded-lg mr-4"/>
                <div className="bg-zinc-700 h-12 w-12 rounded-full mr-4"/>
            </div>
        </div>
    );
}