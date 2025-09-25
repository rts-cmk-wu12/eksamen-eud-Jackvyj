"use client";

import { getListing, getListingDetails } from "@/app/request";
import Listing from "@/components/listing";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function details() {
  const [item, setItem] = useState();
  const [listing, setListing] = useState([]);
  const params = useParams();

  useEffect(() => {
    getListingDetails(params.id).then((out) => {
      setItem(out);
      const userid = out.user.id;
      getListing().then((out) => {
        const userItems = out.filter(
          (item) => item.user.id === userid && item.id != params.id
        );

        const threeitems = userItems.slice(0, 3);
        setListing(threeitems);
      });
    });
  }, [params.id]);

  return (
    <div>
      {item && (
        <div className="flex justify-items-center">
          <Image src={item.asset.url} alt="" width={150} height={150} />
          <div className="">
            <div className="mb-5">{item.title}</div>
            <div className="mt-5">{item.description}</div>
            <div className="mt-5">{item.createdAt}</div>
            <button className="mt-5 bg-gray-200 rounded-full p-1">
              Propose a swap
            </button>
          </div>
        </div>
      )}
      <div>
        Other items from this Swapper
        <div className="flex">
          {listing.map((item) => (
            <Listing item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
