import SearchHeader from "../component/SearchHeader";
import "./../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function SearchLayout({ children }) {
  return (
    <div className>
      <SearchHeader />
      {children}
    </div>
  );
}
