import Image from "next/image";
import Homeheader from "./component/Homeheader";
import HomeSearch from "./component/HomeSearch";

export default function Home() {
  return (
    <>
      <div>
        <Homeheader />
        <div className="flex flex-col items-center mt-24">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            width="300"
            height="100"
          ></Image>
          <HomeSearch />
        </div>
      </div>
    </>
  );
}
