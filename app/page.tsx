import BagAnimation from "@/components/bag/BagAnimation";
import Cta from "@/components/Cta";
import Hero from "@/components/hero/Hero";
import Level from "@/components/level/Level";
import PlayerYoutube from "@/components/player/PlayerYoutube";
import ThemeSwitcher from "@/components/switch/ThemeSwitcher";
import Youtube from "@/components/youtube/Youtube";


export default function Home() {
  return (
    <div className="">
    <Hero/>
    <Level/>
    <Youtube/>
    <BagAnimation/>
    <Cta/>
    </div>
  );
}
/*
git init
git add .
git commit -m "first9"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/omarAlaaWeb.git
git push -u origin main
*/