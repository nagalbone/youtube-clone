import React from "react";

const SideBar = () => {
  return (
    <div className="w-48 shadow-lg p-5">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <hr className="mt-4" />
      <h1 className="font-bold mt-4">Subscription</h1>
      <ul>
        <li>Aaj Tak</li>
        <li>Songs </li>
        <li>New Songs</li>
        <li>Old Songs</li>
      </ul>
      <hr className="mt-4" />
      <h1 className="font-bold mt-4">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>New</li>
        <li>Latest</li>
      </ul>
      <hr className="mt-4" />
      <h1 className="font-bold mt-4">More</h1>
      <ul>
        <li>Your Subscription</li>
        <li>Studio</li>
        <li>Music</li>
        <li>Youtube Kids</li>
      </ul>
    </div>
  );
};

export default SideBar;
