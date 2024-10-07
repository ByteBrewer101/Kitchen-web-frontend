import { Herosection } from "../components/HeroSection";
import { TopBar } from "../components/TopBar";

export function Homepage(){
    return (
      <div className="min-h-screen">
        <TopBar />
        <div className="lg:mx-40">
          <Herosection />
        </div>
      </div>
    );
}