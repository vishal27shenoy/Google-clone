import ImageSearchResult from "@/app/component/ImageSearchResult";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCLcIfHOegnuUmWiNLDgqsRS5V4spRRVcA&cx=9498551f94f8e461f&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`;
  const response = await fetch(url);
  const data = await response.json();
  const result = data.items;
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  if (!result) {
    return (
      <div className="flex flex-col justify-center items-center pt-10 ">
        <h1 className="text-3xl mb-4">No result found</h1>
        <p className="text-lg">
          Try Searching for something else or go back to homepage{" "}
          <Link href={"/"} className="text-blue-500">
            {" "}
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{result && <ImageSearchResult results={data} />}</>;
};

export default page;
