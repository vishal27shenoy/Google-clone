"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [Searchloading, setSearchloading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setSearchloading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!res) return;
    router.push(`/search/web?searchTerm=${res}`);
    setSearchloading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 items-center mx-auto max-w-[90%] border border-gray-200 px-5 
    py-3 rounded-full hover:shadow-md focus-within:shadow-md 
    transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8 sm:flex-row">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearch}
          disabled={Searchloading}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {Searchloading ? (
            <img src="/loading.svg" className="h-6 text-center" />
          ) : (
            " I am feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
