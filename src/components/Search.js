import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState();

  return (
    <div class="min-h-screen bg-gray-100 flex justify-center items-top px-20">
      <div class="space-y-10">
        <h1 class="text-center mt-10 text-4xl font-bold">Book Search</h1>
        <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              class="bg-gray-100 outline-none"
              type="text"
              placeholder="Search ISBN Number "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div class="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <a href={`/book/${search}`}>Search</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
