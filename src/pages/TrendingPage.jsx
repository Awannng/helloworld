import React from "react";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import SearchBox from "../components/SearchBox";

import Posts from "../components/Posts";

function TrendingPage() {
  return (
    <>
      {/* The height of the nav does not show full screen unless there are more contents in the page that makes the page longer. Test it out to render a bunch pf Posts compnents(Like what I did in the HomePage section). */}
      <div className="grid grid-cols-5">
        <div className="col-span-1 h-full">
          <NavBar />
        </div>
        <div className="col-start-2 col-end-6 mr-auto ml-auto w-5/6">
          <TopBar />
          <SearchBox />
        </div>
      </div>
    </>
  );
}

export default TrendingPage;
