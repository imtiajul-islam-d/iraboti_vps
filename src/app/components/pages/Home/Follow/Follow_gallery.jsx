"use client";
import Image from "next/image";
import follow from "@/data/follow.json";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
export default function Follow_gallery() {
  return (
    <section className="container_outer">
      <div className=" max-w-[1900px] xl:pt-[6.25rem] lg:pt-20 md:pt-[7.5rem] pt-20">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">@Iraboti Eco Resort</p>
          <h2 className="text-center">Follow us on Instagram</h2>
        </div>
        <div className="mt-8 flex items-center justify-around gap-6">
          <a href="http://facebook.com"><FaFacebookF className="lg:text-5xl text-2xl hover:scale-110 active:scale-90 hover:text-secondary transition-all" /></a>
          <a href="http://youtube.com"><FaYoutube className="lg:text-5xl text-2xl hover:scale-110 active:scale-90 hover:text-secondary transition-all" /></a>
          <a href="http://linkedin.com"><FaLinkedinIn className="lg:text-5xl text-2xl hover:scale-110 active:scale-90 hover:text-secondary transition-all" /></a>
          <a href="http://twitter.com"><FaXTwitter className="lg:text-5xl text-2xl hover:scale-110 active:scale-90 hover:text-secondary transition-all" /></a>
        </div>
        <div className="bigger_gap">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-[.625rem] w-full px-[.625rem] md:px-0">
            <PhotoProvider>
              {follow.map(
                (item) =>
                  (item.length > 4 && ``) || (
                    <PhotoView key={item.id} src={item?.img}>
                      <Image
                        src={item?.img}
                        alt="follow post"
                        width={1280}
                        height={720}
                        className="w-full object-cover rounded_all h-[21.875rem] lg:last:hidden 2xl:last:block"
                        placeholder="blur"
                        sizes="70svw"
                        blurDataURL={process.env.blurDataURL}
                      />
                    </PhotoView>
                  )
              )}
            </PhotoProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
