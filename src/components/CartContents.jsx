/* eslint-disable react/prop-types */

import { useState } from "react";
import sabzi from "../assets/sabzi.png";
const cardlabels = [
  {
    name: "kabab",
    price: 375,
    type: "non-veg",
    number: 2,
  },
  {
    name: "pizza",
    price: 490,
    type: "veg",
    number: 3,
  },
  {
    name: "burger",
    price: 282,
    type: "non-veg",
    number: 4,
  },
  {
    name: "french fries",
    price: 150,
    type: "side",
    number: 5,
  },
  {
    name: "chicken wings",
    price: 395,
    type: "non-veg",
    number: 6,
  },
  {
    name: "ice cream cone",
    price: 282,
    type: "side",
    number: 7,
  },
  {
    name: "apple pie",
    price: 410,
    type: "side",
    number: 8,
  },
  {
    name: "chocolate cake",
    price: 490,
    type: "side",
    number: 9,
  },
  {
    name: "churros ",
    price: 215,
    type: "veg",
    number: 10,
  },
];

export function CartContents() {
  return (
    <div className="flex flex-col space-y-4 h-[500px] overflow-y-scroll hide-scrollbar  overflow-hidden">
      <div className="flex justify-around  text-gray-800 font-semibold text-lg">
        <h1>Product</h1>
        <h1>Quantity</h1>
        <h1>Price</h1>
      </div>
      {cardlabels.map((i, k) => {
        return (
          <CartCards
            key={k}
            name={i.name}
            price={i.price}
            type={i.type}
            number={i.number}
          />
        );
      })}
    </div>
  );
}

export function CartCards({ name, price, type }) {


  //states
  const [count,setCount]=useState(0)

  function plusHandler (){
    setCount(count+1)
  }

  function minusHandler(){
    if(count>0)
    {
  setCount(count - 1);
    }


  
  }



  return (
    <div className="flex justify-around flex-col space-y-4 md:space-y-0  md:flex-row items-center">
      <div className="flex w-full justify-around md:w-1/3">
        <img src={sabzi} alt="" />
        <div className="p-4">
          <h1 className="text-lg font-bold">{name}</h1>
          <h1>$ {price}</h1>
          <h1>Type : {type}</h1>
        </div>
      </div>

      <div className="flex justify-center w-1/3 space-x-4 items-center">
        <button onClick={minusHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <rect
              x="1.15953"
              y="0.829084"
              width="34.8691"
              height="34.8412"
              rx="12.8699"
              stroke="#B3B3B3"
              strokeWidth="0.779995"
            />
            <path
              d="M25.2386 18.1384C25.2386 18.4217 25.1261 18.6956 24.9158 18.8939C24.7103 19.0969 24.4267 19.2102 24.1332 19.2102H19.7115H17.4958H13.0742C12.7807 19.2102 12.497 19.0969 12.2916 18.8939C12.0861 18.6956 11.9688 18.4217 11.9688 18.1384C11.9688 17.8552 12.0861 17.586 12.2916 17.383C12.497 17.1847 12.7807 17.0714 13.0742 17.0714H17.4958H19.7115H24.1332C24.4267 17.0714 24.7103 17.1847 24.9158 17.383C25.1261 17.586 25.2386 17.8552 25.2386 18.1384Z"
              fill="#B3B3B3"
            />
          </svg>
        </button>
        <h1>{count}</h1>
        <button onClick={plusHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            className="stroke-orange"
          >
            <rect
              x="0.511091"
              y="0.829084"
              width="34.8691"
              height="34.8412"
              rx="12.8699"
              stroke="#B3B3B3"
              strokeWidth="0.779995"
            />
            <path
              d="M24.5804 18.3597C24.5804 18.643 24.4679 18.9168 24.2576 19.1151C24.0521 19.3181 23.7685 19.4314 23.475 19.4314H19.0533V23.6996C19.0533 23.9829 18.9359 24.2567 18.7256 24.455C18.5202 24.6533 18.2414 24.7666 17.9479 24.7666C17.6544 24.7666 17.3708 24.6533 17.1653 24.455C16.955 24.2567 16.8376 23.9829 16.8376 23.6996V19.4314H12.416C12.1225 19.4314 11.8388 19.3181 11.6334 19.1151C11.4279 18.9168 11.3105 18.643 11.3105 18.3597C11.3105 18.0764 11.4279 17.8073 11.6334 17.6043C11.8388 17.406 12.1225 17.2927 12.416 17.2927H16.8376V13.0245C16.8376 12.7412 16.955 12.4674 17.1653 12.2691C17.3708 12.0661 17.6544 11.9528 17.9479 11.9528C18.2414 11.9528 18.5202 12.0661 18.7256 12.2691C18.9359 12.4674 19.0533 12.7412 19.0533 13.0245V17.2927H23.475C23.7685 17.2927 24.0521 17.406 24.2576 17.6043C24.4679 17.8073 24.5804 18.0764 24.5804 18.3597Z"
              fill="#F68220"
            />
          </svg>
        </button>
        <button className="bg-orange-500 p-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className="stroke-white"
          >
            <path
              d="M13.8599 3.3667H10.4126C10.3783 2.784 10.1747 2.22399 9.82666 1.75537C9.40674 1.23779 8.78174 0.925293 8.00049 0.925293C7.21924 0.925293 6.59424 1.23779 6.17432 1.75537C5.8258 2.22372 5.6221 2.78389 5.58838 3.3667H2.14111C2.01161 3.3667 1.88742 3.41814 1.79585 3.50971C1.70428 3.60128 1.65283 3.72548 1.65283 3.85498C1.65283 3.98448 1.70428 4.10868 1.79585 4.20025C1.88742 4.29182 2.01161 4.34326 2.14111 4.34326H3.36182V14.1089C3.36182 14.3823 3.57666 14.5972 3.8501 14.5972H12.1509C12.2804 14.5972 12.4046 14.5457 12.4961 14.4542C12.5877 14.3626 12.6392 14.2384 12.6392 14.1089V4.34326H13.8599C13.9894 4.34326 14.1136 4.29182 14.2051 4.20025C14.2967 4.10868 14.3481 3.98448 14.3481 3.85498C14.3481 3.72548 14.2967 3.60128 14.2051 3.50971C14.1136 3.41814 13.9894 3.3667 13.8599 3.3667ZM6.93604 2.37061C7.16064 2.0874 7.50244 1.90186 8.00049 1.90186C8.49854 1.90186 8.83057 2.0874 9.06494 2.37061C9.26025 2.60498 9.35791 2.95654 9.4165 3.3667H6.58447C6.6333 2.95654 6.75049 2.60498 6.93604 2.37061ZM11.6626 13.6206H4.33838V4.34326H11.6626V13.6206Z"
              fill="white"
            />
            <path
              d="M6.58447 5.56396C6.45497 5.56396 6.33078 5.61541 6.23921 5.70698C6.14763 5.79855 6.09619 5.92275 6.09619 6.05225V11.9116C6.09619 12.0411 6.14763 12.1653 6.23921 12.2569C6.33078 12.3485 6.45497 12.3999 6.58447 12.3999C6.71397 12.3999 6.83817 12.3485 6.92974 12.2569C7.02131 12.1653 7.07275 12.0411 7.07275 11.9116V6.05225C7.07275 5.92275 7.02131 5.79855 6.92974 5.70698C6.83817 5.61541 6.71397 5.56396 6.58447 5.56396ZM9.4165 5.56396C9.287 5.56396 9.16281 5.61541 9.07124 5.70698C8.97967 5.79855 8.92822 5.92275 8.92822 6.05225V11.9116C8.92822 12.0411 8.97967 12.1653 9.07124 12.2569C9.16281 12.3485 9.287 12.3999 9.4165 12.3999C9.546 12.3999 9.6702 12.3485 9.76177 12.2569C9.85334 12.1653 9.90478 12.0411 9.90478 11.9116V6.05225C9.90478 5.92275 9.85334 5.79855 9.76177 5.70698C9.6702 5.61541 9.546 5.56396 9.4165 5.56396Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <h1 className="text-lg font-semibold text-gray-800">$ {price}</h1>
      </div>
    </div>
  );
}
