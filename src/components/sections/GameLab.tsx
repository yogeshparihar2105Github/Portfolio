import React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react"

const games = [
  { name: "Open_The_Lock", type: "Puzzle Game", image: "/games-image/lock.png" },
  { name: "Road_Racer", type: "Racing Game", image: "/games-image/road_racer.png" },
  { name: "HackMan", type: "Arcade Game", image: "/games-image/hackman.png" },
  { name: "Kill_The_Drago", type: "Action Game", image: "/games-image/kill_the_drago.png" },
  { name: "Block_Breaker_2d", type: "Classic Arcade", image: "/games-image/block_breaker.png" },
  { name: "Space_Hunters", type: "Space Shooter", image: "/games-image/space_hunter.png" },
  { name: "Spiral_Girl", type: "Platformer", image: "/games-image/spiral_girl.png" },
  { name: "Glitch_Garden", type: "Adventure", image: "/games-image/glitch_garden.png" },
]

export function GameLab() {
  return (
    <Section
      id="gamelab"
      title="Game Lab"
      subtitle="A collection of my Unity3D games and AR experiences published on itch.io."
      className="bg-card/30"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm group overflow-hidden">
              <div className="h-32 bg-secondary/30 relative flex items-center justify-center border-b border-border overflow-hidden group/gameimage">
                {game.image ? (
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/gameimage:scale-110"
                  />
                ) : (
                  <Gamepad2 className="w-10 h-10 text-muted-foreground/50 group-hover:scale-110 group-hover:text-primary/50 transition-all duration-300" />
                )}
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 pointer-events-none" />
              </div>
              <CardHeader className="pb-2 flex-grow pt-4">
                <CardTitle className="text-base truncate" title={game.name}>
                  {game.name.replace(/_/g, " ")}
                </CardTitle>
                <p className="text-xs text-muted-foreground">{game.type}</p>
              </CardHeader>
              <CardFooter className="pt-0 pb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(`https://yogesh00parihar.itch.io/${game.name.toLowerCase().replace(/_/g, "-")}`, "_blank")}
                >
                  View on itch.io
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="outline"
          onClick={() => window.open("https://yogesh00parihar.itch.io/", "_blank")}
        >
          <Gamepad2 className="w-4 h-4 mr-2" />
          Visit Full Game Portfolio
        </Button>
      </div>
    </Section>
  )
}
