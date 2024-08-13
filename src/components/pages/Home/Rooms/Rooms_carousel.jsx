"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import room from "@/data/rooms.json";
import { LuScaling } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import Image from "next/image";
import Details_Modal from "@/components/shared/Details_Modal";

export default function Rooms_carousel() {
  const [showModal, setShowModal] = useState(false);
  const [api, setApi] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const modalRef = useRef(null)

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const VisibleModal = (i) => {
    setSelectedData(i);
    setShowModal((e) => !e);
  };

  useEffect(() => {

    if (showModal) {
      modalRef?.current?.focus()
    } else {
      modalRef?.current?.remove()
    }
  }, [showModal])
  return (
    <>
      <div
        onClick={() => setShowModal((e) => e)}
        className={`${showModal
          ? "block"
          : "hidden"
          }`}
      >
        {showModal && selectedData && (
          <Details_Modal data={selectedData} setShowModal={setShowModal} modalRef={modalRef} />
        )}
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="bigger_gap"
      >
        <CarouselContent>
          {room.map((item, i) => (
            <CarouselItem
              key={i}
              className="sm:basis-1/2 lg:basis-1/3"
              setApi={setApi}
            >
              <button
                onClick={() => VisibleModal(item)}
                className="relative min-h-[27.5rem] aspect-[9/16] md:aspect-square w-full rounded_all overflow-hidden "
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/90"></div>
                <Image
                  src={item?.images[0]?.img}
                  alt="rooms"
                  width={720}
                  height={1280}
                  className="min-h-[27.5rem] aspect-[9/16] md:aspect-square w-full object-center object-cover"
                  placeholder="blur"
                  sizes="70svw"
                  blurDataURL={process.env.blurDataURL}
                />
                <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full p-4 text-white info xl:p-8">
                  <div className="upper border rounded_all link_m border-white p-[.625rem] flex items-center gap-2 w-fit">
                    &#2547; <p>{item?.price}</p>&#47;
                    <p className="uppercase">night</p>
                  </div>
                  <div className="down">
                    <h3 className="text-left capitalize">{item?.title}</h3>
                    <p className="my-4 text-left">{item?.desc}</p>
                    <div className="grid items-center grid-cols-2 gap-2 sm:grid-cols-4">
                      <div className="flex items-center gap-[.625rem] uppercase">
                        {" "}
                        <LuScaling /> {item?.info?.size}{" "}
                      </div>
                      <div className="flex items-center gap-[.625rem] uppercase">
                        {" "}
                        <SlPeople /> {item?.info?.person}{" "}
                      </div>
                      <div className="flex items-center gap-[.625rem] uppercase">
                        {" "}
                        <IoBedOutline /> {item?.info?.bed}{" "}
                      </div>
                      <div className="flex items-center gap-[.625rem] uppercase">
                        {" "}
                        <GiBathtub /> {item?.info?.bath}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative w-full">
          <div className="absolute -translate-x-1/2 top-4 md:top-6 lg:top-8 w-28 left-1/2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </>
  );
}
