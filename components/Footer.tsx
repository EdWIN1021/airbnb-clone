import React from "react";

const tabs = [
  {
    title: "Popular",
    cities: [
      {
        name: "Amsterdam",
        type: "Vacation rentals",
      },
      {
        name: "Barcelona",
        type: "Cottage rentals",
      },
      {
        name: "Barrie",
        type: "Apartment rentals",
      },
      {
        name: "Barry's Bay",
        type: "Vacation rentals",
      },
      {
        name: "The Blue Mountains",
        type: "Vacation rentals",
      },
      {
        name: "Boston",
        type: "Beachfront rentals",
      },
      {
        name: "Calabogie",
        type: "Cottage rentals",
      },
      {
        name: "Sault Ste. Marie",
        type: "Cottage rentals",
      },
      {
        name: "Cancún",
        type: "Vacation rentals",
      },
      {
        name: "Chicago",
        type: "House rentals",
      },
      {
        name: "Cobourg",
        type: "Vacation rentals",
      },
      {
        name: "Davenport",
        type: "Vacation rentals",
      },
      {
        name: "Dublin",
        type: "Apartment rentals",
      },
      {
        name: "Edmonton",
        type: "Vacation rentals",
      },
      {
        name: "Florence",
        type: "Villa rentals",
      },
      {
        name: "Flagstaff",
        type: "Pet-friendly rentals",
      },
      {
        name: "Halifax",
        type: "Vacation rentals",
      },
      {
        name: "Huntsville",
        type: "Cabin rentals",
      },
    ],
  },
  {
    title: "Lakes",
  },
  {
    title: "Mountains",
  },
  {
    title: "Coastal",
  },
  {
    title: "Islands",
  },
  {
    title: "Outdoors",
  },
  {
    title: "Unique stays",
  },
  {
    title: "Categories",
  },
  {
    title: "Things to do",
  },
];

const Footer = () => {
  return (
    <div className="bg-medium-gray flex justify-center mt-[150px]">
      <div className=" p-12">
        <h3 className="text-[22px] mb-2">Inspiration for future getaways</h3>
        <div className="flex gap-4 border-b border-[#DDDDDD]">
          {tabs.map((tab) => (
            <span key={tab.title} className="text-dark-gray text-[14px] py-2">
              {tab.title}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <ul className="grid  gap-x-2 gap-y-6 grid-cols-[repeat(6,minmax(0,250px))]">
            {tabs[0].cities?.map((city, index) => (
              <li className="flex flex-col text-[14px]" key={index}>
                <span className="font-semibold">{city.name}</span>
                <span className="text-dark-gray">{city.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
