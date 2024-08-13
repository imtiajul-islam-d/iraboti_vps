"use client";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import data from "@/data/navigation.json";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navigation() {
  const collapse = [
    { id: 1, title: "About", link: "/about" },
    { id: 2, title: "Restaurant", link: "/restaurant" },
    { id: 3, title: "Activities", link: "/activities" },
    { id: 4, title: "Gallery", link: "/gallery" },
  ];
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="absolute z-10 w-full pb-3 -translate-x-1/2 container_outer top-3 md:top-6 2xl:top-12 left-1/2">
        <div className="grid grid-cols-3 gap-4 px-5 text-white lg:grid-cols-12 xl:px-12">
          {/* links */}
          <div className="flex items-center border-b border-gray-300 md:gap-5 lg:gap-8 lg:col-span-5">
            {data?.navigation.links.map(
              (item) =>
                item.title !== "Pages" && (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="hidden  link uppercase gap-[.625rem] items-center"
                  >
                    {item.title}{" "}
                    <span className="inline-block text-[.5rem] ">
                      <FaChevronRight />
                    </span>{" "}
                  </Link>
                )
            )}
            <div
              onClick={() => setShowMenu((e) => !e)}
              class=" transition-all cursor-pointer hover:scale-90 active:scale-110 w-[3rem] md:w-[4.5rem]"
            >
              <CgMenuLeft className="text-3xl lg:text-6xl" />
            </div>
          </div>
          {/* logo  */}
          <Link
            href="/"
            className="flex items-center justify-center w-full lg:col-span-2"
          >
            <Image
              className="object-cover md:w-24 lg:w-28"
              src={data?.logo?.img}
              alt={data?.logo?.alt}
              width={100}
              height={100}
              priority
            />
          </Link>
          {/* cta  */}
          <div className="flex items-center justify-end gap-5 border-b border-gray-300 xl:gap-8 lg:gap-7 lg:col-span-5">
            <div className="text-white">
              <p className="hidden link md:block">EN</p>
            </div>
            <a
              href="tel:+8801404004400"
              className="p-3 transition-colors bg-gray-200 rounded-full md:p-5 text-primary hover:scale-90 active:scale-110"
            >
              <span className="md:text-xl">
                <MdOutlinePhoneInTalk />
              </span>
              {/* <p>{data?.phone}</p> */}
            </a>
            {/* <button className="hidden button md:block">{data?.btn}</button> */}
          </div>
        </div>
      </nav>
      <section
        data-lenis-prevent
        className={`fixed z-[112] top-0 left-1/2 -translate-x-1/2 w-full h-[100svh] overflow-y-auto transition-all container_outer ${ShowMenu ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <div className="relative left-0 top-0 w-full flex flex-col h-fit min-h-[100svh] mx-auto items-start md:justify-around px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 md:gap-6 lg:gap-8 2xl:gap-16 bg-black/95 pt-5 md:py-8 lg:py-16">
          <div className="relative w-full">
            <div className="flex items-center justify-between md:block">
              <button
                onClick={() => setShowMenu((e) => !e)}
                className="inline-block mb-6 text-5xl text-red-500 transition-all bg-transparent hover:text-white lg:text-7xl hover:scale-90 active:scale-110"
              >
                <IoCloseOutline />
              </button>
              <Link href="/" className="inline-block md:hidden">
                <Image
                  className="object-cover w-12 aspect-square "
                  src={data?.logo?.img}
                  alt={data?.logo?.alt}
                  width={100}
                  height={100}
                  priority
                />
              </Link>
            </div>
            <h1 className="text-4xl text-white md:text-5xl md:pt-16 lg:pt-8">
              Menu
            </h1>
            <div className="flex flex-col items-start justify-start gap-2 md:gap-[3.125rem] pb-20 mt-8 md:mt-[6.25rem] w-full">
              {data?.navigation.links.map((item) => (
                <Link
                  onClick={() => setShowMenu((e) => !e)}
                  className="text-2xl text-gray-300 transition-all font-regular md:font-heading md:text-[3.25rem] hover:text-accent-light "
                  key={item.id}
                  Link
                  href={item?.link}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
            <span className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 h-[0.0625rem] bg-border w-[95%]"></span>
            <button className="w-full button md:hidden">{data.btn}</button>
          </div>
          <div className="mt-[3.125rem] text-white w-full">
            <div className="hidden md:block space-y-[3.125rem] ">
              <div className="logo">
                <Link
                  href="/"
                  className="flex items-center w-full lg:col-span-2"
                >
                  <Image
                    className="object-cover md:w-24 lg:w-28"
                    src={data?.logo?.img}
                    alt={data?.logo?.alt}
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>
              <div className="mt-[3.125rem]">
                <h4>Location</h4>
                <p className="mt-8 text-white md:pr-20 lg:pr-72 ">
                  Dhangmari ,Banishanta Union, Dacope Upazila, Khulna District
                </p>
              </div>
              <div className="space-y-6">
                <h4>Phone Support</h4>
                <a
                  href="tel:+8801404004400"
                  className="flex items-center gap-5 mt-8"
                >
                  <LuPhone size={20} />
                  <p className="text-white p_m">+8801404004400</p>
                </a>
                <div className="flex items-center gap-5">
                  <MdOutlineMailOutline size={20} />
                  <a href="mailto:irabotiecoresort@gmail.com" className="text-white p_m">irabotiecoresort@gmail.com</a>
                </div>
              </div>
              <div className="">
                <h4>Connect With Us</h4>
                <div className="flex items-center gap-6 mt-8">
                  <FaFacebookF />
                  <FaYoutube />
                  <FaXTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <div className="flex items-center gap-5">
                <LuPhone size={20} />
                <p className="text-white p_m">+8801404004400</p>
              </div>
              <div className="flex items-start gap-5">
                <FaLocationDot size={20} className="mt-2" />
                <p className="text-white p_m">
                  Dhangmari ,Banishanta Union, Dacope Upazila, Khulna District
                </p>
              </div>
              <div className="flex items-center gap-5">
                <MdOutlineMailOutline size={20} />
                <p className="text-white p_m">irabotiecoresort@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
