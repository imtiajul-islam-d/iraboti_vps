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
              className=" transition-all cursor-pointer hover:scale-90 active:scale-110 w-[3rem] md:w-[4.5rem]"
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
            <a aria-label="Chat on WhatsApp" href="https://wa.me/1404004400">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1faf38"/><stop offset="100%" stop-color="#60d669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f9f9f9"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
            </a>
            
            {/* <a
              href="tel:+8801404004400"
              className="p-3 transition-colors bg-gray-200 rounded-full md:p-5 text-primary hover:scale-90 active:scale-110"
            >
              <span className="md:text-xl">
                <MdOutlinePhoneInTalk />
              </span>
            </a> */}
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
