import { Brain, Code } from "lucide-react";

export function Hero() {
	return (
		<div className="relative text-center mb-16 ">
			<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl opacity-30" />
			<div className="relative">
				<div className="flex justify-center gap-4 mb-6">
					<Brain className="w-12 h-12 text-primary animate-pulse hover:text-primary/80 transition-colors" />
					<Code className="w-12 h-12 text-primary animate-pulse hover:text-primary/80 transition-colors" />
				</div>
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-3 animate-gradient  h-20 ">
					AlgoX
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto ">
					A community passionate about web technologies, machine learning, and
					open-source, building impactful solutions and driving innovation
					together.
				</p>
			</div>
		</div>
	);
}
