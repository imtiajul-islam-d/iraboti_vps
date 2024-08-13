import React from "react";
import { BsHouses } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { FaMap } from "react-icons/fa";
import { SiBoat } from "react-icons/si";
import { GiPartyFlags } from "react-icons/gi";
import { FaShip } from "react-icons/fa6"


const Facilities = () => {
  return (
    <section className="max-w-[90rem] mx-auto md:px-8 lg:px-16">
      <div className="container_inner_sm section_gap">
        <div className="">
          <p className="text-center">OUR SERVICES</p>
          <h2 className="text-center">Hotel Facilities</h2>
        </div>
        <div className="mt-14 md:mt-24">
          <div className="lg:max-w-[46.375rem] xl:max-w-[59.625rem] 2xl:max-w-[72.93rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center content-center gap-y-28 sm:gap-y-32 md:gap-y-[3.125rem]">
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              <BsHouses className="text-5xl " />
              <p className=" mt-7 font-heading">Accomodations</p>
            </div>
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              <FaBus className="text-5xl " />
              <p className=" mt-7 font-heading">Transportation</p>
            </div>
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              {/* <Image src={wifi} className="w-12 aspect-square" /> */}
              <MdOutlineTravelExplore className="text-5xl " />
              <p className=" mt-7 font-heading">Guidance for Researchers</p>
            </div>
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              <GiHotMeal className="text-5xl " />
              <p className=" mt-7 font-heading">Local Cuisine</p>
            </div>
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              <FaMap className="text-5xl " />
              <p className=" mt-7 font-heading">Heritage Trip</p>
            </div>
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              <FaShip className="text-5xl " />
              <p className=" mt-7 font-heading">Vessel Booking</p>
            </div>
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              <SiBoat className="text-5xl " />
              <p className=" mt-7 font-heading">Canal Cruising</p>
            </div>
            <div className="flex flex-col items-center w-fit h-fit hover:bg-bg_1 transition-colors focus:bg-bg_1 p-4">
              <GiPartyFlags className="text-5xl " />
              <p className=" mt-7 font-heading">Programmes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
