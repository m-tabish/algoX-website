import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import { hackathons } from "@/data/hackathons";

export function HackathonCarousel() {
	return (
		<div className="py-16">
			<h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
				Photos from the Community
			</h2>
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full max-w-5xl mx-auto">
				<CarouselContent>
					{hackathons.map((hackathon) => (
						<CarouselItem
							key={hackathon.title}
							className="md:basis-1/2 lg:basis-1/2">
							<div className="p-2">
								<Card className="overflow-hidden border-none bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover:from-primary/20 hover:via-primary/10 hover:to-transparent transition-all duration-300">
									<CardContent className="p-6">
										<div className="relative h-48 mb-4 overflow-hidden rounded-lg">
											<img
												src={hackathon.image}
												alt={hackathon.title}
												className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute top-2 right-2">
												<Badge className="bg-primary/80 hover:bg-primary transition-colors flex items-center gap-1">
													<Trophy className="w-3 h-3" />
													{hackathon.prize}
												</Badge>
											</div>
										</div>
										<h3 className="text-xl font-semibold mb-2 text-primary">
											{hackathon.title}
										</h3>
										<h4 className="text-lg font-medium mb-2 text-foreground">
											{hackathon.project}
										</h4>
										<p className="text-sm text-muted-foreground">
											{hackathon.description}
										</p>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex" />
				<CarouselNext className="hidden md:flex" />
			</Carousel>
		</div>
	);
}
