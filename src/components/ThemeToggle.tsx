import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [theme, setTheme] = useState(() => 
    localStorage.getItem("theme") || "light"
);

useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
}, [theme]);

return (
    <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-4 right-4 p-2 rounded-xl transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
    {theme === "dark" ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-800" />}
    </button>
    );
}

export default ThemeToggle;