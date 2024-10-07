import headerImage from "../assets/MenuHeader.png";

export function MenuHeader() {
  return (
    <div
      className="bg-cover bg-center h-64 w-full"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      
      <h1 className="text-white text-2xl font-bold">Menu Header</h1>
    </div>
  );
}
