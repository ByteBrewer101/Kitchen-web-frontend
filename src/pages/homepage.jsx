import { Herosection } from "../components/HeroSection";
import { ServiceSection } from "../components/ServiceSection";
import { TopBar } from "../components/TopBar";

export function Homepage(){
    return (
      <div className="min-h-screen">
        <TopBar />
        <div className="lg:mx-40 mb-96">
          <Herosection />
          <ServiceSection/>
        </div>
      </div>
    );
}