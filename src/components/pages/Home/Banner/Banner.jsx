import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Link from "next/link";
import icon from "../../../../../public/icons/more_light.svg";
import data from "@/data/banner.json";

export default function Banner() {
  return (
    <section className="container_outer">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
          Fade(),
        ]}
      >
        <CarouselContent>
          {data?.map((item, idx) => (
            <CarouselItem key={idx}>
              <div className="relative w-full min-h-[100svh] aspect-[9/16] md:aspect-video">
                <Image
                  src={item?.img}
                  alt=""
                  width={1000}
                  height={750}
                  placeholder="blur"
                  blurDataURL={process.env.blurDataURL}
                  priority
                  className="w-full min-h-[100svh] object-cover absolute brightness-50 md:rounded_all aspect-[9/16] md:aspect-video"
                />
                <div className="absolute w-full flex items-center justify-center top-0 left-0 aspect-[9/16] md:aspect-video min-h-[100svh] px-4 md:px-0">
                  <div className="mt-5 text-center">
                    <div className="w-full mx-auto text-white md:space-y-8 xl:space-y-10 md:mt-0 md:w-4/5">
                      <p className="uppercase link">the sundarbans</p>
                      <h1 className="text-5xl capitalize sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
                        {item?.title}
                      </h1>
                    </div>
                    <div className="">
                      <Link
                        href="/rooms"
                        className="items-center justify-center hidden w-11/12 gap-3 py-6 mx-auto mt-8 text-white transition-transform rounded-full md:flex md:w-max bg-primary hover:scale-90 active:scale-110 md:px-8 xl:mt-10"
                      >
                        <p className="uppercase link">choose your stay</p>
                        <span>
                          <Image src={icon} alt="" priority />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full bottom-5 ">
                  <Link
                    href="/rooms"
                    className="flex items-center justify-center w-11/12 gap-3 py-6 mx-auto text-white transition-transform rounded-full md:hidden md:w-max bg-primary hover:scale-90 active:scale-110 md:px-8"
                  >
                    <p className="uppercase link">choose your stay</p>
                    <span>
                      <Image src={icon} alt="" priority />
                    </span>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

{
  /* <section className="container_outer">
            <Carousel plugins={[
                Autoplay({
                    delay: 5000,
                }), Fade()]}>
                <CarouselContent>
                    {
                        data.map((item, i) => <CarouselItem key={i}>
                            <div className="relative w-full min-h-[100svh] aspect-[9/16] md:aspect-video">
                                <Image src={item?.img} alt="" className="w-full min-h-[100svh] object-cover absolute brightness-50 md:rounded_all aspect-[9/16] md:aspect-video" placeholder="blur"
                                    sizes="70svw"
                                    width={1000}
                                    height={720}
                                    blurDataURL={process.env.blurDataURL} priority />
                                <div className="absolute w-full flex items-center justify-center top-0 left-0 aspect-[9/16] md:aspect-video min-h-[100svh] px-4 md:px-0">
                                    <div className="text-center">
                                        <div className="w-full mx-auto text-white md:space-y-8 xl:space-y-10 md:mt-0 md:w-4/5">
                                            <p className="uppercase link">the sundarbans</p>
                                            <h1 className="capitalize">step into the heart of
                                                community tourism</h1>
                                        </div>
                                        <div className="">
                                            <Link href="/blog" className="items-center justify-center hidden w-11/12 gap-3 py-6 mx-auto mt-8 text-white transition-colors rounded-full md:flex md:w-max bg-primary hover:bg-primary/70 md:px-8 xl:mt-10">
                                                <p className="uppercase link">choose your stay</p>
                                                <span>
                                                    <Image src={icon} alt="" priority />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute w-full bottom-5 ">
                                    <Link href="/blog" className="flex items-center justify-center w-11/12 gap-3 py-6 mx-auto text-white transition-colors rounded-full md:hidden md:w-max bg-primary hover:bg-primary/70 md:px-8">
                                        <p className="uppercase link">choose your stay</p>
                                        <span>
                                            <Image src={icon} alt="" priority />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>)
                    }
                    // <CarouselPrevious />
                //<CarouselNext />
                </CarouselContent>
            </Carousel>
        </section> */
}
