import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import Image from "next/image";
import logo from "../../../public/image/nav_logo.svg";

const Footer = () => {
  return (
    <footer className="pt-20 bg-primary m-[.625rem] rounded_all">
      <div className="mb-12 section_gap">
        <div className="grid grid-cols-1 mx-auto lg:max-w-6xl lg:grid-cols-3 justify-items-center">
          <div className="flex items-center order-2 my-32 text-white lg:my-0 lg:order-none">
            <div>
              <div className="flex items-center justify-center w-full">
                <span className="inline-block font-mono text-3xl text-center text-white border rounded-full border-white/10 aspect-square p-7">
                  <MdOutlineMailOutline />
                </span>
              </div>
              <a href="mailto:irabotiecoresort@gmail.com" className="text-white p_m mt-5">irabotiecoresort@gmail.com</a>
            </div>
          </div>
          <div className="order-1 grid-rows-1 lg:order-none ">
            <div className="flex items-center justify-center w-full">
              <Image src={logo} className="" alt="icon" priority />
            </div>
            <div className="h-[.0625rem] w-1/2 bg-white/10 mx-auto my-9"></div>
            <div>
              <p className="text-center text-white p_m">
                Dhangmari ,Banishanta Union, Dacope Upazila, Khulna District
              </p>
            </div>
          </div>
          <div className="flex items-center order-3 text-white lg:order-none">
            <a href="tel:+8801404004400">
              <div className="flex items-center justify-center w-full">
                <span className="inline-block font-mono text-3xl text-center text-white border rounded-full border-white/10 aspect-square p-7">
                  <LuPhone />
                </span>
              </div>
              <p className="mt-5 font-medium">+8801404004400</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#0E1D1E] rounded_all">
        <p className="py-16 tracking-widest text-center text-white">
          Copyright © 2024 by Iraboti Eco Resort & Research Center
        </p>
      </div>
    </footer>
  );
};

export default Footer;
