import Image from "next/image";
import icon from "../../../../../public/icons/qoute.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import testimonials from "@/data/testimonials.json";

export default function Testimonial() {
  return (
    <section className="container_outer bg-bg_1">
      <div className="xl:py-[12.5rem] lg:py-20 md:py-[7.5rem] py-20 container_inner_lg">
        <div className="flex flex-col items-center justify-center gap-7 md:gap-8">
          <Image src={icon} alt="qoute" />
          <div className="">
            <p className="text-center">VOICE FROM OUR GUESTS</p>
            <h2 className="text-center">Testimonials</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[3.25rem] bigger_gap text-center w-full">
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent className="w-full px-4 -ml-2 gap-4">
              {testimonials?.map((item, i) => (
                <CarouselItem key={i}>
                  <div className="">
                    <h3 className="lg:max-w-[57.5rem] w-full lg:mb-[3.125rem] lg:mx-auto text-wrap">
                      {item?.details}
                    </h3>
                    <p>{item?.name}</p>
                    <p>{item?.designation}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="w-full hidden justify-between items-center absolute md:-top-10 lg:top-0 -translate-y-1/2 md:flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
