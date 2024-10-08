import headerImage from "../assets/MenuHeader.png";

export function MenuHeader({title1,title2,subtitle}) {
  return (
    <div
      className="bg-cover bg-center h-96 w-full flex flex-col justify-center items-center space-y-4"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <h1 className="text-white text-7xl  font-bold">
        {title1} <span className="text-orange-500">{title2}</span>
      </h1>
      <h1 className="text-center font-semibold text-xl text-white w-1/3">
      {subtitle}
      </h1>
    </div>
  );
}
