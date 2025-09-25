"use client";

import { useEffect, useMemo, useState } from "react";
import { getListing } from "./request";
import Listing from "@/components/listing";

export default function Home() {
  const [search, setSearch] = useState("");
  const [listing, setListing] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getListing().then((out) => setListing(out));
  }, []);

  const pages = Array(Math.ceil(listing.filter(filterSearch).length / 6)).fill(
    0
  );

  function filterSearch(item) {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }

  return (
    <div>
      <div className="flex justify-center p-5">
        <input
          className="border-2 rounded-full p-2 w-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        ></input>
      </div>
      <div className="grid grid-cols-3 gap-2 items-center mx-auto">
        {listing
          .filter(filterSearch)
          .slice(currentPage * 6, currentPage * 6 + 6)
          .map((item) => (
            <Listing item={item} key={item.id} />
          ))}
      </div>
      <div className="flex justify-center gap-5 mt-5">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {pages.map((_, idx) => (
          <button
            className={` px-2 rounded-full ${
              currentPage === idx ? "bg-gray-800 text-white" : "text-black"
            }`}
            key={idx}
            value={idx}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {idx}
          </button>
        ))}
        <button
          disabled={currentPage === pages.length - 1}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
