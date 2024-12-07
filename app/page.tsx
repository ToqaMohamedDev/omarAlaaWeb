import BagAnimation from "@/components/bag/BagAnimation";
import Hero from "@/components/hero/Hero";
import PlayerYoutube from "@/components/player/PlayerYoutube";
import ThemeSwitcher from "@/components/switch/ThemeSwitcher";


export default function Home() {
  return (
    <div className="">
    <Hero/>
    <PlayerYoutube/>
    <BagAnimation/>
    </div>
  );
}
/*
git init
git add .
git commit -m "first5"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/omarAlaaWeb.git
git push -u origin main
*/