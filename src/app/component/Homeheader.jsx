import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
const Homeheader = () => {
  return (
    <header className="">
      <div className="flex justify-end p-5 text-sm space-x-4 items-center">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link href="https://image.google.com">Images</Link>

        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl" />
        <button className="bg-blue-500 text-white px-6 py-2 hover:brightness-105 hover:shadow-md transition-shadow rounded-md">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Homeheader;
