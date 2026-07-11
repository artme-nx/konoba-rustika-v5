import { LevelNav } from "@/components/ui/level-nav";
import { RoofHero } from "@/components/ui/roof-hero";
import { DiningRoom } from "@/components/ui/dining-room";
import { Hearth } from "@/components/ui/hearth";
import { Cellar } from "@/components/ui/cellar";
import { Courtyard } from "@/components/ui/courtyard";
import { Foundation } from "@/components/ui/foundation";

export default function Home() {
  return (
    <>
      <LevelNav />
      <main className="w-full">
        <RoofHero />
        <DiningRoom />
        <Hearth />
        <Cellar />
        <Courtyard />
        <Foundation />
      </main>
    </>
  );
}
