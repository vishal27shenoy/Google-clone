"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
const SearchHeaderOption = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  function selectTab(tab) {
    router.push(
      `/search/${tab == "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }
  return (
    <div className="flex space-x-2 select-none border-b justify-center w-full lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("ALl")}
        className={`flex items-center active:text-blue-500 border-transparent space-x-1 border-b-4 
        pb-3 px-2 cursor-pointer ${
          pathname == "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center active:text-blue-500 border-transparent space-x-1 border-b-4 
        pb-3 px-2 cursor-pointer ${
          pathname == "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchHeaderOption;
