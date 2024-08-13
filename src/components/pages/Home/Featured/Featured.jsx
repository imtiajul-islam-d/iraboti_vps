import Image from "next/image";
import Link from "next/link";
import icon from "../../../../../public/icons/more.svg";

import img_1 from "../../../../../public/image/follow/f16.jpg"
import img_2 from "../../../../../public/image/follow/s3.jpg"
import img_3 from "../../../../../public/image/follow/f9.jpg"

export default function Ex() {
  return (
    <section className="container_outer">
      <div className="container_inner_lg section_gap">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-0 md:gap-8 lg:gap-0">
            <p className="text-center p_m">Iraboti Eco Resort</p>
            <h2 className="text-center">The community tourism</h2>
          </div>
          <div className="bigger_gap">
            <div className="block lg:hidden mb-14">
              <p className="">
                The world&apos;s largest mangrove forest, the Sundarbans, saw
                the introduction of its first community tourism initiative by
                Iraboti-eco-resort.
              </p>
              <Link
                className="flex items-center gap-2 my-2 uppercase link link_m md:my-4 xl:my-8"
                href="/about"
              >
                <Image src={icon} alt="" priority />
                Read More{" "}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-[.625rem]">
              <div className="flex-col justify-between my-10 lg:my-0 lg:flex">
                <div className="hidden lg:block">
                  <p className="max-w-[26.875rem]">
                    The world&apos;s largest mangrove forest, the Sundarbans,
                    saw the introduction of its first community tourism
                    initiative by Iraboti-eco-resort.
                  </p>
                  <Link
                    className="flex items-center gap-2 my-2 uppercase link link_m md:my-4 xl:my-6"
                    href="/about"
                  >
                    <Image src={icon} alt="" priority />
                    Read More{" "}
                  </Link>
                </div>
                <Image
                  width={750}
                  height={500}
                  placeholder="blur"
                  sizes="70svw"
                  blurDataURL={process.env.blurDataURL}
                  className="object-cover w-full h-full mb-3 lg:mb-6 xl:mb-9"
                  // src={"https://res.cloudinary.com/delabwrcv/image/upload/v1720080421/IMG_4553_1_-_Copy_-_Copy_nonrho.jpg" }
                  src={img_1}
                  alt="featured image"
                />
              </div>
              <div className="w-full space-y-2  md:space-y-[.625rem]">
                <Image
                  width={750}
                  height={500}
                  placeholder="blur"
                  sizes="70svw"
                  blurDataURL={process.env.blurDataURL}
                  className="object-cover w-full"
                  // src={
                  //   "https://res.cloudinary.com/delabwrcv/image/upload/v1720080424/IMG_1869_nkrxfx.jpg"
                  // }
                  src={img_3}
                  alt="featured image"
                />
                <div className="w-1/2">
                  <Image
                    width={750}
                    height={500}
                    placeholder="blur"
                    sizes="70svw"
                    blurDataURL={process.env.blurDataURL}
                    className="object-cover w-full"
                    // src={
                    //   "https://res.cloudinary.com/delabwrcv/image/upload/v1720080423/IMG_7169_xbsyjc.jpg"
                    // }
                    src={img_2}
                    alt="featured image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
