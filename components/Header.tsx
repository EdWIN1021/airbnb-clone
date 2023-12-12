import Search from "./Search";
import Image from "next/image";
import Tabs from "./Tabs";
import Profile from "./Profile";

const Header = () => {
  return (
    <>
      <header className="border-b border-light-gray">
        <div className="px-6 md:px-10 flex justify-between h-20 items-center">
          <div className="cursor-pointer flex-1 hidden xl:block">
            <Image
              src="/logo.svg"
              style={{ width: "auto", height: "auto" }}
              width={102}
              height={32}
              alt="logo"
              priority
            />
          </div>
          <div className="cursor-pointer xl:hidden flex-1 min-w-[32px] min-h-[32px] mr-2">
            <Image
              src="/logo-sm.svg"
              width={32}
              height={32}
              alt="logo"
              priority
            />
          </div>
          <Search />
          <Profile />
        </div>
      </header>
      {/* <Tabs /> */}
    </>
  );
};

export default Header;
