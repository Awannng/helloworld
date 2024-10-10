import React from "react";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import SearchBox from "../components/SearchBox";
import PostBox from "../components/PostBox";
import Posts from "../components/Posts";

function HomePage() {
  return (
    <>
      {/* Posts component might need props later. */}
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <NavBar />
        </div>
        <div className="col-start-2 col-end-6 mr-auto ml-auto w-5/6">
          <TopBar />
          <div className="flex flex-col w-full">
            <SearchBox />
            <PostBox />
          </div>
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </>
  );
}

export default HomePage;
