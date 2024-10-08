import { useNavigate } from "react-router-dom";









export function TopBar() {

  const navigate = useNavigate()

    const handleHomeClick = () => {
      navigate("/");
    };

   

    const handleMenuClick = () => {
      navigate("/menu");
    };

    const handleContactClick = () => {
      navigate("/contactus");
    };

    const handleCartClick = ()=>{
      navigate("/cart")
    }



  return (
    <div className="flex justify-between px-[142px] py-[30px]">
      <div>
        <h1 className="text-[24px] font-[700] font-poppins text-orange-500 ">
          Mausis Delicacies
        </h1>
      </div>
      <div className="flex justify-between w-1/3 text-[16px] font-[500] text-gray-500 ">
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleContactClick} > About Us</button>
        <button onClick={handleMenuClick} >Menu</button>
        <button onClick={handleContactClick} >Contact</button>
      </div>
      <div className="flex justify-between space-x-10">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button onClick={handleCartClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M2.64528 8.56115C2.68215 8.10512 2.89072 7.67961 3.22945 7.36935C3.56818 7.0591 4.01221 6.88687 4.47311 6.88696H15.5263C15.9872 6.88687 16.4312 7.0591 16.7699 7.36935C17.1087 7.67961 17.3172 8.10512 17.3541 8.56115L18.0902 17.66C18.1104 17.9104 18.0782 18.1622 17.9956 18.3997C17.913 18.6371 17.7818 18.855 17.6101 19.0396C17.4385 19.2242 17.2303 19.3716 16.9985 19.4724C16.7667 19.5732 16.5164 19.6253 16.2633 19.6254H3.73611C3.48304 19.6253 3.23273 19.5732 3.00093 19.4724C2.76913 19.3716 2.56087 19.2242 2.38925 19.0396C2.21764 18.855 2.08639 18.6371 2.00377 18.3997C1.92115 18.1622 1.88895 17.9104 1.9092 17.66L2.64528 8.56115V8.56115Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6663 9.6167V5.06728C13.6663 4.10201 13.28 3.17628 12.5924 2.49373C11.9048 1.81119 10.9721 1.42773 9.99967 1.42773C9.02721 1.42773 8.09458 1.81119 7.40695 2.49373C6.71932 3.17628 6.33301 4.10201 6.33301 5.06728V9.6167"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="bg-orange-500 rounded-full text-sm text-white px-[20px] py-[11px] flex space-x-2 items-center">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="carbon:login">
              <path
                id="Vector"
                d="M13.5 15.5H7.5C7.23478 15.5 6.98043 15.3946 6.79289 15.2071C6.60536 15.0196 6.5 14.7652 6.5 14.5V13H7.5V14.5H13.5V2.5H7.5V4H6.5V2.5C6.5 2.23478 6.60536 1.98043 6.79289 1.79289C6.98043 1.60536 7.23478 1.5 7.5 1.5H13.5C13.7652 1.5 14.0196 1.60536 14.2071 1.79289C14.3946 1.98043 14.5 2.23478 14.5 2.5V14.5C14.5 14.7652 14.3946 15.0196 14.2071 15.2071C14.0196 15.3946 13.7652 15.5 13.5 15.5Z"
                fill="#F2F2F2"
                stroke="#F2F2F2"
                strokeWidth="0.5"
              />
              <path
                id="Vector_2"
                d="M7.795 10.795L9.585 9H2.5V8H9.585L7.795 6.205L8.5 5.5L11.5 8.5L8.5 11.5L7.795 10.795Z"
                fill="#F2F2F2"
                stroke="#F2F2F2"
                strokeWidth="0.5"
              />
            </g>
          </svg>

          <span > Login</span>
        </button>
      </div>
    </div>
  );
}
