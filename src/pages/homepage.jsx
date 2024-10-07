import { ContactUsForm } from "../components/ContactusForm";
import { Footer } from "../components/Footer";
import { Herosection } from "../components/HeroSection";
import { MenuSection } from "../components/MenuSection";
import { ReviewSection } from "../components/ReviewSection";
import { ServiceSection } from "../components/ServiceSection";
import { TopBar } from "../components/TopBar";

export function Homepage(){
    return (
      <div className="min-h-screen">
        <TopBar />
        <div className="lg:mx-40 flex flex-col space-y-20 mb-20">
          <Herosection />
          <ServiceSection/>
          <MenuSection/>
          <ReviewSection/>
          <ContactUsForm/>
        </div>
        <Footer/>
      </div>
    );
}