import ExclusiveBonus from "./components/ExclusiveBonus";
import FiveLostPrinciples from "./components/FiveLostPrinciples";
import HeroComponent from "./components/HeroComponent";
import MyObjective from "./components/MyObjective";
import Navbar from "./components/Navbar";
import ThreeBestPath from "./components/ThreeBestPath";
import WhatsInside from "./components/WhatsInside";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroComponent/>    
    <FiveLostPrinciples/>
    <MyObjective/>
    <ThreeBestPath/>
    <ExclusiveBonus/>
    <WhatsInside/>
    </>
  );
}
