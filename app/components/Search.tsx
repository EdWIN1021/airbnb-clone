import Image from "next/image";
const Search = () => {
  return (
    <div className="border rounded-full border-light-gray p-1.5 cursor-pointer hover:shadow-md text-sm">
      <span className="font-semibold px-4 border-r border-light-gray">
        Anywhere
      </span>
      <span className="font-semibold px-4 border-r border-light-gray">
        Any week
      </span>
      <span className="px-4">Add guests</span>
      <Image src="/search.svg" width={32} height={32} alt="search" />
    </div>
  );
};

export default Search;
