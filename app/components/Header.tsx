import { Profile } from "./Profile";
import Search from "./Search";
import Image from "next/image";

const Header = () => {
  return (
    <div className="border-b border-light-gray">
      <header className="flex justify-between h-20 mx-10 items-center ">
        <div className="min-w-[260px] cursor-pointer">
          <Image src="/logo.svg" width={102} height={32} alt="logo" priority />
        </div>

        <Search />
        <Profile />
      </header>
    </div>
  );
};

export default Header;
