import { FoodCard } from "../components/FoodCard";
import { MenuHeader } from "../components/MenuHeader";
import { TopBar } from "../components/TopBar";
import paneer from "../assets/paneer.png";
import { ReviewSection } from "../components/ReviewSection";
import { ContactUsForm } from "../components/ContactusForm";
import { Footer } from "../components/Footer";
import { OptionChooser } from "../components/OptionChooser";
import { useRecoilValue } from "recoil";
import { OptionChooserState } from "../store/states";

const cardData = [
  {
    image: paneer,
    name: "kabab",
    price: 375,
    type: "non-veg",
    number: 2,
  },
  {
    image: paneer,
    name: "pizza",
    price: 490,
    type: "veg",
    number: 3,
  },
  {
    image: paneer,
    name: "burger",
    price: 282,
    type: "non-veg",
    number: 4,
  },
  {
    image: paneer,
    name: "french fries",
    price: 150,
    type: "side",
    number: 5,
  },
  {
    image: paneer,
    name: "chicken wings",
    price: 395,
    type: "non-veg",
    number: 6,
  },
  {
    image: paneer,
    name: "ice cream cone",
    price: 282,
    type: "side",
    number: 7,
  },
  {
    image: paneer,
    name: "apple pie",
    price: 410,
    type: "side",
    number: 8,
  },
  {
    image: paneer,
    name: "chocolate cake",
    price: 490,
    type: "side",
    number: 9,
  },
  {
    image: paneer,
    name: "churros ",
    price: 215,
    type: "veg",
    number: 10,
  },
];

export function MenuPage() {
  const foodType = useRecoilValue(OptionChooserState);

  // Filter cardData based on the selected food type
  const filteredCardData =
    foodType === "all"
      ? cardData
      : cardData.filter((item) => item.type === foodType);

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
        <div className="flex flex-col items-center justify-center mt-4">
          <OptionChooser items={cardData} />
        </div>

        <div className="grid grid-rows-1 overflow-hidden grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCardData.map((item, index) => (
            <div key={index} className="flex">
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
