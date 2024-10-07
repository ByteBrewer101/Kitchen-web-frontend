import { Herosection } from "../components/HeroSection";
import { MenuSection } from "../components/MenuSection";
import { ServiceSection } from "../components/ServiceSection";
import { TopBar } from "../components/TopBar";

export function Homepage(){
    return (
      <div className="min-h-screen">
        <TopBar />
        <div className="lg:mx-40 flex flex-col space-y-20 mb-40">
          <Herosection />
          <ServiceSection/>
          <MenuSection/>
        </div>
      </div>
    );
}