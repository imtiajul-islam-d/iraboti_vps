"use client";
import Image from "next/image";
import { LuScaling } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import icon from "../../../../public/icons/more.svg";
import { useState } from "react";
import Details_Modal from "@/components/shared/Package_details";


export default function Package_card({ room }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div
                onClick={() => setShowModal((e) => e)}
                className={`fixed z-[99] top-0 left-0 md:w-[100svw] h-[100svh] inset-0 py-5 overflow-y-auto bg-white transition-all ${showModal
                    ? "visible opacity-100 scale-100"
                    : "invisible opacity-0 scale-0"
                    }`}
            >
                {showModal && (<Details_Modal room={room} setShowModal={setShowModal} />)}
            </div>
            <section className="w-full">
                <button
                    onClick={() => setShowModal((e) => !e)}
                    className="w-full space-y-7"
                >
                    <div className="w-full">
                        <Image
                            src={room?.images[0]?.img}
                            className="object-cover w-full aspect-square"
                            alt=""
                            width={750}
                            height={500}
                            placeholder="blur"
                            sizes="70svw"
                            blurDataURL={process.env.blurDataURL}
                        />
                    </div>
                    <div className="space-y-7">
                        <div className="flex items-center justify-between">
                            <h3 className="text-left">{room?.title}</h3>
                            <div className=" p-[.625rem] flex items-center gap-2 w-full">
                                <p>{room?.price}</p>
                                <p className="uppercase">PER night</p>
                            </div>
                        </div>
                        <div className="grid items-center grid-cols-2 gap-2 sm:grid-cols-4">
                            <div className="flex items-center gap-[.625rem] uppercase">
                                {" "}
                                <LuScaling /> {room?.info?.size}{" "}
                            </div>
                            <div className="flex items-center gap-[.625rem] uppercase">
                                {" "}
                                <SlPeople /> {room?.info?.person}{" "}
                            </div>
                            <div className="flex items-center gap-[.625rem] uppercase">
                                {" "}
                                <IoBedOutline /> {room?.info?.bed}{" "}
                            </div>
                            <div className="flex items-center gap-[.625rem] uppercase">
                                {" "}
                                <GiBathtub /> {room?.info?.bath}{" "}
                            </div>
                        </div>
                        <p className="text-left sm:w-4/5 md:w-full">{room?.desc}</p>
                        <div className="sm:w-4/5 md:w-full">
                            {room?.packages && <h4 className="mb-4 text-left"> Available Packages: </h4>}
                            {
                                room?.packages?.map((i, I) => <div className="flex gap-6 items-center justify-start" key={I}>
                                    <p>{i?.name}</p>
                                    <p>{i?.price} <span>$</span></p>
                                </div>)
                            }
                        </div>
                        <button
                            onClick={() => setShowModal((e) => !e)}
                            href="#"
                            className="flex items-center gap-[.625rem] xl:mt-8 md:mt-6 mt-4 text-primary"
                        >
                            {" "}
                            <span>
                                <Image src={icon} alt="" priority />{" "}
                            </span>
                            <p className="uppercase">Book Now</p>
                        </button>
                    </div>
                </button>
            </section>
        </>
    );
}
