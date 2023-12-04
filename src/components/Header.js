import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { addSearchdata } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addVideos } from "../utils/videosSlice";
import { YOUTUBE_QUERY_SEARCH_API } from "../utils/constants";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [segessions, setSugessions] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.search);

  useEffect(() => {
    //debouncing concept
    const timer = setTimeout(() => {
      if (searchData[searchQuery]) {
        setSugessions(searchData[searchQuery]);
      } else {
        getSearchQuery();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSugessions(json[1]);
    dispatch(addSearchdata({ [searchQuery]: json[1] }));
  };

  const getSearchVideos = async () => {
    const data = await fetch(YOUTUBE_QUERY_SEARCH_API + searchQuery);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg sticky">
      <div className="col-span-2 flex sm:grid-cols-2 lg:grid-cols-2">
        <img
          onClick={() => dispatch(toggleMenu())}
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="logo"
        />
        <img
          className="h-9 w-28 cursor-pointer"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="logo"
        />
      </div>
      <div className="col-span-9 sm:grid-cols-9 lg:grid-cols-9 flex">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
            className="border border-gray-800 w-full sm:w-1/2 lg:w-1/8 rounded-l-full p-1 px-2"
          />
          <button
            className="border border-gray-800 px-2 bg-gray-100 rounded-r-full p-1"
            onClick={getSearchVideos}
          >
            Search
          </button>
          {showSugg && (
            <div className="absolute bg-gray-50 p-2 mx-2 rounded-lg shadow-lg w-[41rem]">
              <ul>
                {segessions.map((sugg) => (
                  <li
                    className="my-1 hover:bg-gray-100"
                    onClick={getSearchVideos}
                  >
                    {sugg}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 sm:grid-cols-1 lg:grid-cols-1 ml-2">
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
