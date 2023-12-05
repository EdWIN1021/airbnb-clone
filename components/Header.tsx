import Search from "./Search";
import Image from "next/image";
import Tabs from "./Tabs";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("@/components/Profile"), {
  ssr: false,
});

const Header = () => {
  return (
    <>
      <header className="flex justify-between h-20 items-center border-b border-light-gray mx-20">
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
        <div className="cursor-pointer xl:hidden min-w-[32px] min-h-[32px] mr-2">
          <Image
            src="/logo-sm.svg"
            style={{ width: "auto", height: "auto" }}
            width={32}
            height={32}
            alt="logo"
            priority
          />
        </div>
        <Search />
        <Profile />
      </header>
      <Tabs />
    </>
  );
};

export default Header;
