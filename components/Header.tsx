import Profile from "./Profile";
import Search from "./Search";
import Image from "next/image";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <div className="">
      <header className="flex justify-between h-20 items-center border-b border-light-gray mx-20">
        <div className="cursor-pointer flex-1">
          <Image src="/logo.svg" width={102} height={32} alt="logo" priority />
        </div>

        <Search />
        <Profile />
      </header>
      <Tabs />
    </div>
  );
};

export default Header;
