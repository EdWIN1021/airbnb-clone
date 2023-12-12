import React from "react";

const Footer = () => {
  return (
    <div className="bg-medium-gray px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 py-12 text-[14px] ">
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

      <div className="py-6 border-t border-[#DDDDDD] ">
        <p className="text-[14px]">© 2023 Airbnb, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
