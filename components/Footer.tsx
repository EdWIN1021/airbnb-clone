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
    <div className="bg-medium-gray mt-[150px]">
      <div className="pt-12 px-20">
        <h3 className="text-[22px] mb-2">Inspiration for future getaways</h3>

        <div className="flex gap-4 border-b border-[#DDDDDD] overflow-x-auto">
          {tabs.map((tab) => (
            <span key={tab.title} className="text-dark-gray text-[14px] py-2">
              {tab.title}
            </span>
          ))}
        </div>

        <div className="pt-8 pb-12 ">
          <ul className="grid  gap-x-2 gap-y-6 grid-cols-[repeat(2,minmax(0,_1fr))] lg:grid-cols-[repeat(3,minmax(0,_1fr))] xl:grid-cols-[repeat(6,minmax(0,250px))] ">
            {tabs[0].cities?.map((city, index) => (
              <li className="flex flex-col text-[14px]" key={index}>
                <span className="font-semibold">{city.name}</span>
                <span className="text-dark-gray">{city.type}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 py-12 border-t border-[#DDDDDD] text-[14px]">
          <div>
            <span className="font-semibold mb-3">Support</span>
            <ul className="flex flex-col gap-3">
              <li>Help Center</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold mb-3">Hosting</span>
            <ul className="flex flex-col gap-3">
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold mb-3">Airbnb</span>
            <ul className="flex flex-col gap-3">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-[#DDDDDD]">
          <p className="text-[14px]">© 2023 Airbnb, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
