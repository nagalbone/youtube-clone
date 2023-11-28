import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const toggleHandler = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="col-span-2 flex">
        <img
        onClick={toggleHandler}
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="logo"
        />
        <img
          className="h-10 w-28 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sEZ_vUnzLmENRnq-uGDFJ2BrqFLkGOkn2Q&usqp=CAU"
          alt="logo"
        />        
      </div>
      <div className="col-span-9">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-800 w-96 rounded-l-full p-1 px-2"
        />
        <button className="border border-gray-800 px-2 bg-gray-100 rounded-r-full p-1">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="w-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
