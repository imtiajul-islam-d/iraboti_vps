import React from "react";
import wifi from "../../../../../public/image/facilities/wifi.svg";
import transport from "../../../../../public/image/facilities/transport.svg";
import Image from "next/image";

import { GiPaperBoat, GiHutsVillage, GiVillage } from "react-icons/gi";
import { CgGames } from "react-icons/cg";

const Activities = () => {
  return (
    <section className="max-w-[90rem] mx-auto md:px-8 lg:px-16 section-gap">
      <div className="container_inner_sm section_gap">
        <div>
          <p className="text-center ">ACTIVITIES</p>
          <h2 className="text-center">Activities and Experiences</h2>
        </div>
        <div className="mt-14 md:mt-24">
          <div className="lg:max-w-[46.375rem] xl:max-w-[59.625rem] 2xl:max-w-[72.93rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-y-28 sm:gap-y-32 md:gap-y-0">
            <div className="flex flex-col items-center p-4 transition-colors cursor-pointer w-fit h-fit focus:bg-bg_1">
              <span className="text-5xl">
                <GiPaperBoat />
              </span>
              {/* <Image alt="icon" src={wifi} className="w-12 aspect-square" /> */}
              <p className="mt-7 font-heading">Canal Cruising</p>
            </div>
            <div className="flex flex-col items-center p-4 transition-colors cursor-pointer w-fit h-fit focus:bg-bg_1">
              {/* <Image
                alt="icon"
                src={transport}
                className="w-12 aspect-square"
              /> */}
              <span className="text-5xl">
                <CgGames />
              </span>
              <p className="mt-7 font-heading">Indoor games</p>
            </div>
            <div className="flex flex-col items-center p-4 transition-colors cursor-pointer w-fit h-fit focus:bg-bg_1">
              {/* <Image alt="icon" src={wifi} className="w-12 aspect-square" /> */}
              <span className="text-5xl">
                <GiVillage />
              </span>
              <p className="mt-7 font-heading">Village tour</p>
            </div>
            <div className="flex flex-col items-center p-4 transition-colors cursor-pointer w-fit h-fit focus:bg-bg_1">
              <span className="text-5xl">
                <GiHutsVillage />
              </span>
              {/* <Image
                alt="icon"
                src={transport}
                className="w-12 aspect-square"
              /> */}
              <p className="mt-7 font-heading">local cultural events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
