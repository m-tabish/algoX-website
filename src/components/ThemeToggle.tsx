import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from './ThemeContext';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <Button
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        className="hover:bg-primary/10 transition-colors"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
        {theme === 'light' ? (
            <Moon className="h-5 w-5" />
            ) : (
            <Sun className="h-5 w-5" />
            )}
    </Button>
    );
}