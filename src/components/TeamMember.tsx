import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
	name: string;
	role: string;
	bio: string;
	image: string;
	expertise: string[];
	social: {
		website?: string;
		github?: string;
		linkedin?: string;
		twitter?: string;
	};
	variant?: "default" | "featured";
}

export function TeamMember({
	name,
	role,
	bio,
	image,
	expertise,
	social,
	variant = "default",
}: TeamMemberProps) {
	const backgroundClasses = {
		default: `
            bg-gradient-to-br 
            from-black/60 
            via-black/40 
            to-transparent 
            hover:from-primary/20 
            hover:via-primary/10 
            hover:to-transparent
        `,
		featured: `
            bg-gradient-to-br 
            from-indigo-900/30 
            via-purple-900/20 
            to-black/10 
            dark:from-indigo-950/50 
            dark:via-purple-950/30 
            dark:to-black/20
            hover:from-indigo-900/50 
            hover:via-purple-900/40 
            hover:to-black/20
            dark:hover:from-indigo-900/70 
            dark:hover:via-purple-900/60 
            dark:hover:to-black/30
        `,
	};

	return (
		<Card
			className={`
        overflow-hidden 
        border-none 
        transition-all 
        duration-300 
        group
        ${backgroundClasses[variant]}
      `}>
			<CardContent className="p-6">
				<div className="flex flex-col items-center">
					<div className="relative mb-4">
						<div
							className="
                absolute 
                inset-0 
                bg-gradient-to-br 
                from-primary/20 
                to-primary/10 
                rounded-full 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                duration-300
              "
						/>
						<img
							src={image}
							alt={name}
							className="
                  w-32 
                  h-32 
                  rounded-full 
                  object-cover 
                  border-2 
                  border-primary/20 
                  group-hover:border-primary/40 
                  transition-all 
                  duration-300 
                  transform 
                  group-hover:scale-105
                "
						/>
					</div>
					<h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors">
						{name}
					</h3>
					<p className="text-muted-foreground mb-2">{role}</p>
					<div className="flex flex-wrap justify-center gap-2 mb-4">
						{expertise.map((skill) => (
							<Badge
								key={skill}
								variant="secondary"
								className="bg-primary/10 hover:bg-primary/20 transition-colors">
								{skill}
							</Badge>
						))}
					</div>
					<p className="text-sm text-muted-foreground text-center mb-4 group-hover:text-muted-foreground/80 transition-colors">
						{bio}
					</p>
					<div className="flex gap-2">
						{social.website && (
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-primary/20 transition-colors"
								asChild>
								<a
									href={social.website}
									target="_blank"
									rel="noopener noreferrer">
									<Globe className="w-4 h-4" />
								</a>
							</Button>
						)}
						{social.github && (
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-primary/20 transition-colors"
								asChild>
								<a
									href={social.github}
									target="_blank"
									rel="noopener noreferrer">
									<Github className="w-4 h-4" />
								</a>
							</Button>
						)}
						{social.linkedin && (
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-primary/20 transition-colors"
								asChild>
								<a
									href={social.linkedin}
									target="_blank"
									rel="noopener noreferrer">
									<Linkedin className="w-4 h-4" />
								</a>
							</Button>
						)}
						{social.twitter && (
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-primary/20 transition-colors"
								asChild>
								<a
									href={social.twitter}
									target="_blank"
									rel="noopener noreferrer">
									<Twitter className="w-4 h-4" />
								</a>
							</Button>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
