"use client";
import { LuPhoneCall } from "react-icons/lu";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import icon from "../../../public/icons/more_light.svg";
import { GiBathtub } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { LuScaling } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import Amenities from "@/components/shared/Amenities"


export default function Details_Modal({ data, setShowModal, modalRef }) {

    return (
        <section className="fixed top-0 py-5 left-0 w-full h-screen z-[100] bg-white overflow-y-auto" data-lenis-prevent tabIndex="-1" ref={modalRef}>

            <div className="px-4 mx-auto container_inner_lg md:px-16 xl:px-32 2xl:px-64">
                <div className="flex flex-col justify-between sm:flex-row sm:items-end">
                    <div className="">
                        <button
                            onClick={() => setShowModal((e) => !e)}
                            href="#"
                            className="lg:mb-[6.25rem] mb-20 flex items-center gap-[.625rem] bg-red-500 text-white rounded-sm px-8 py-4"
                        >
                            {" "}
                            <span>
                                <Image className="rotate-180" src={icon} alt="" priority />{" "}
                            </span>
                            <p className="uppercase ">Back</p>
                        </button>
                        <h2 className="">
                            {
                                data?.title}
                        </h2>
                        <div className="grid grid-cols-4 gap-4 lg:gap-12 pt-5 md:pt-[.625rem] last:w-fit">
                            <div className="flex items-center gap-2 sm:gap-[.625rem] uppercase"> <LuScaling /> {data?.info?.size} </div>
                            <div className="flex items-center gap-2 sm:gap-[.625rem] uppercase"> <SlPeople /> {data?.info?.person} </div>
                            <div className="flex items-center gap-2 sm:gap-[.625rem] uppercase"> <IoBedOutline /> {data?.info?.bed} </div>
                            <div className="flex items-center gap-2 sm:gap-[.625rem] uppercase"> <GiBathtub /> {data?.info?.bath} </div>
                        </div>
                    </div>
                    <div className="flex items-center p_m gap-[2px] pt-[.625rem] sm:pt-0">
                        &#2547; <p>{data?.price}</p>&#47;<p className="uppercase">night</p>
                    </div>
                </div>
                <div className="details mt-7 md:mt-14 space-y-7 md:space-y-14">
                    {/* image gallery */}
                    <div className="img">
                        <div className="grid grid-cols-12 grid-rows-2 gap-[.625rem]">
                            <PhotoProvider>
                                {
                                    data?.images?.map((shot, i) => <PhotoView key={i} src={shot?.img}>
                                        <Image src={shot?.img} alt="room-shot" width={1024} height={640} className={`${i === 0 ? "md:col-span-6 col-span-12 row-span-2" : "col-span-6 sm:col-span-3"}  w-full object-cover h-full`} placeholder="blur"
                                            sizes="70svw"
                                            blurDataURL={process.env.blurDataURL}></Image>
                                    </PhotoView>)
                                }
                            </PhotoProvider>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="infos md:w-4/6">
                        <h3 className="mb-5 lg:mb-10">Description:</h3>
                        <p>{data?.desc}
                        </p>
                        <div className="space-y-20 lg:space-y-[6.25rem] lg:mt-[6.25rem] mt-20">
                            <div className="">
                                <h3 className="mb-5 xl:mb-8">
                                    Amenities :
                                </h3>
                                <ul className="space-y-8">
                                    {
                                        data?.amenities && data?.amenities?.map((item, i) => <Amenities key={i} title={item?.title} value={item?.value} />)}
                                </ul>
                            </div>
                            <div className="">
                                <h3
                                    className={`mb-5 xl:mb-8`}
                                >
                                    Check-In
                                </h3>
                                <p
                                    className={`text-justify`}
                                >
                                    {data?.in}
                                </p>
                            </div>
                            <div className="">
                                <h3
                                    className={`mb-5 xl:mb-8`}
                                >
                                    Check-Out
                                </h3>
                                <p
                                    className={`text-justify`}
                                >
                                    {data?.out}
                                </p>
                            </div>
                            <div className="">
                                <h3
                                    className={`mb-5 xl:mb-8`}
                                >
                                    Pets
                                </h3>
                                <p
                                    className={`text-justify`}
                                >
                                    Pets are allowed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 xl:space-y-8">
                        <h6>Contact us for the booking information:</h6>
                        <h3 className="flex gap-4 md:gap-8">
                            <LuPhoneCall /> <a href="tel:9051290512">+880 - 1234- 567890</a>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}