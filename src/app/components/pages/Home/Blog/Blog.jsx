import Image from "next/image";
import icon from "../../../../../public/icons/more.svg";
import image from "../../../../../public/image/banner/banner4.jpg";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="container_outer">
      <div className="container_inner_sm section_gap">
        <div className="flex flex-col justify-between md:items-center section_header md:flex-row">
          <div className="title">
            <p className="uppercase link">blog</p>
            <h2 className="">Offers & News</h2>
          </div>
          <Link href="/blog" className="flex items-center gap-[.625rem] ">
            <span>
              <Image src={icon} alt="" priority />
            </span>
            <p className="uppercase">View All</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bigger_gap">
          {Array.from({ length: 3 }).map((item, i) => (
            <div className="" key={i}>
              <div className="img rounded_all">
                <Image
                  src={image}
                  alt="blog"
                  className="rounded_all"
                  sizes="80vw"
                  placeholder="blur"
                />
              </div>
              <div className="mt-4 info xl:mt-8 md:mt-6">
                <div className="flex items-center gap-[.625rem]">
                  <p className="capitalize">spa & Wellness</p>{" "}
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>{" "}
                  <p className="capitalize">06 April 2024</p>
                </div>
                <h4 className="mt-3 capitalize md:mt-5 xl:mt-7">
                  hotel june&apos;s upcoming artist in residence
                </h4>
                <Link
                  href="#"
                  className="flex items-center gap-[.625rem] xl:mt-8 md:mt-6 mt-4"
                >
                  {" "}
                  <span>
                    <Image src={icon} alt="" priority />{" "}
                  </span>
                  <p className="uppercase">Read More</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
