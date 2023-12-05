import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="w-48 shadow-lg p-5">
      <ul>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg bg-gray-200 rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Shorts</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Subscription</li>
      </ul>
      <hr className="mt-4" />
      <h1 className="mt-4 text-lg font-medium">Subscription</h1>
      <ul>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Aaj Tak</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Songs </li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">New Songs</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Old Songs</li>
      </ul>
      <hr className="mt-4" />
      <h1 className="mt-4 text-lg font-medium">Explore</h1>
      <ul>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Trending</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Shopping</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">New</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Latest</li>
      </ul>
      <hr className="mt-4" />
      <h1 className="mt-4 text-lg font-medium">More</h1>
      <ul>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Your Subscription</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Studio</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Music</li>
        <li className="hover:bg-gray-200 p-2 hover:rounded-lg">Youtube Kids</li>
      </ul>
    </div>
  );
};

export default SideBar;
