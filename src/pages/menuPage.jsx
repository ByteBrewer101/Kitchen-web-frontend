import { FoodCard } from "../components/FoodCard";
import { MenuHeader } from "../components/MenuHeader";
import { TopBar } from "../components/TopBar";
import paneer from "../assets/paneer.png";
import { ReviewSection } from "../components/ReviewSection";
import { ContactUsForm } from "../components/ContactusForm";
import { Footer } from "../components/Footer";
import { OptionChooser } from "../components/OptionChooser";

const cardData = [
  {
    image: paneer, // Replace with actual image path
    name: "Butter Paneer",
    price: "10",
    type: "veg",
  },
  {
    image: paneer, // Replace with actual image path
    name: "Paneer Tikka",
    price: "11",
    type: "veg",
  },
  {
    image: paneer, // Replace with actual image path
    name: "Chicken Curry",
    price: "14",
    type: "non-veg",
  },
  {
    image: paneer, // Replace with actual image path
    name: "Fish Fry",
    price: "15",
    type: "non-veg",
  },
  {
    image: paneer, // Replace with actual image path
    name: "Steamed Rice",
    price: "5",
    type: "side",
  },
  {
    image: paneer, // Replace with actual image path
    name: "Steamed Rice",
    price: "5",
    type: "side",
  },
];







export function MenuPage(){





    return (
      <div>
        <TopBar />
        <MenuHeader
          title1={"Our"}
          title2={"Menu"}
          subtitle={
            "We consider all the drivers of change gives you the components you need to change to create a truly happens."
          }
        />

        <div className="mx-0 lg:mx-40 flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col items-center justify-center mt-4 ">
            <OptionChooser items={cardData} />
          </div>

          <div className="grid grid-rows-2 overflow-hidden  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {cardData.map((item, index) => (
              <div key={index} className="flex ">
                <FoodCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  className="max-w-[200px] w-full" // Set a fixed width with a max-width
                />
              </div>
            ))}
          </div>
          <ReviewSection />
          <ContactUsForm />
        </div>
        <div className="mt-40">
          <Footer />
        </div>
      </div>
    );
}