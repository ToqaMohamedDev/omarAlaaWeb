import BagAnimation from "@/components/bag/BagAnimation";
import Hero from "@/components/hero/Hero";
import Level from "@/components/level/Level";
import PlayerYoutube from "@/components/player/PlayerYoutube";
import ThemeSwitcher from "@/components/switch/ThemeSwitcher";


export default function Home() {
  return (
    <div className="">
    <Hero/>
    <Level/>
    <BagAnimation/>
    </div>
  );
}
/*
git init
git add .
git commit -m "first7"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/omarAlaaWeb.git
git push -u origin main
*/