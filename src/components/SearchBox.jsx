import React from "react";
import { useState } from "react";

function SearchBox() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="flex w-full relative">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          className="block border border-gray-400 bg-slate-100 hover:bg-slate-200 w-full h-10 rounded-lg rounded-e-lg m-4 outline-none p-2.5"
          required
        />
        <button
          type="submit"
          className="absolute end-2.5 p-2.5 h-fit text-sm font-medium text-white bg-orange-400 rounded-e-lg hover:bg-orange-800 self-center overflow-hidden"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </>
  );
}

export default SearchBox;
