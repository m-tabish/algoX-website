import { Hero } from "./components/Hero";
import { TeamMember } from "./components/TeamMember";
import { Background } from "./components/Background";
import { MouseTrail } from "./components/MouseTrail";
import { teamMembers } from "./data/team";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./components/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
    return (
    <ThemeProvider>
        <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Background />
        <MouseTrail />
        <div className="container mx-auto px-4 py-16 relative z-10 pointer-events-auto">
          {/* Theme Toggle in header */}
            <div className="absolute top-4 right-4">
            <ThemeToggle />
        </div>
        <Hero />
        <Analytics />
        <p className="text-4xl md:text-4xl text-center font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-3 animate-gradient h-20">
            Members of the Community
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
            <TeamMember
                key={member.name}
                {...member}
            />
            ))}
        </div>
    </div>
    </div>
    </ThemeProvider>
);
}
export default App;