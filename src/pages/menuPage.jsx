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
    image: paneer,
    name: "Butter Paneer",
    price: "10",
  },
  {
    image: paneer,
    name: "Paneer Tikka",
    price: "11",
  },
  {
    image: paneer,
    name: "Shahi Paneer",
    price: "14",
  },
  {
    image: paneer,
    name: "Palak Paneer",
    price: "13",
  },
  {
    image: paneer,
    name: "Paneer Bhurji",
    price: "9",
  },
  {
    image: paneer,
    name: "Butter Paneer",
    price: "10",
  },
  {
    image: paneer,
    name: "Paneer Tikka",
    price: "11",
  },
  {
    image: paneer,
    name: "Shahi Paneer",
    price: "14",
  },
  {
    image: paneer,
    name: "Palak Paneer",
    price: "13",
  },
  {
    image: paneer,
    name: "Paneer Bhurji",
    price: "9",
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

        <div className="mx-40 flex flex-col space-y-4">
          <div className="flex items-center justify-center mt-20">
            <OptionChooser />
          </div>

          <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-10">
            {cardData.map((item, index) => (
              <FoodCard
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
          <ReviewSection />
          <ContactUsForm />
        </div>
        <Footer />
      </div>
    );
}