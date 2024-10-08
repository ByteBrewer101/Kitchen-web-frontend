export function InitialTopBar(){
    return (
      <div className="flex justify-between items-center p-4 px-10 shadow shadow-xl">
        <h1 className="text-orange-500 font-extrabold text-2xl">
          Mausis Delicacies
        </h1>
        
          <button className="border border-2 border-black text-xl rounded-xl px-6 p-2">
            Login
          </button>
        
      </div>
    );
}