import Image from "next/image";
import data from "@/data/speciality.json";

export default function Special() {
  return (
    <section className="container_outer">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[.625rem] xl:py-[6.25rem] lg:py-20 md:py-[7.5rem] py-20 mx-[.625rem] md:mx-auto">
        {data.map((item) => (
          <div key={item?.id} className="relative w-full rounded_all">
            <div className="">
              <Image
                className="object-cover object-center w-full aspect-[9/16] sm:aspect-[9/12]  lg:aspect-square rounded_all"
                src={item?.bg}
                width={1024}
                height={540}
                alt="background image"
                placeholder="blur"
                blurDataURL={process.env.blurDataURL}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded_all"></div>
            </div>
            <div className="absolute space-y-8 text-white bottom-8 left-4 md:bottom-8 md:left-8 2xl:bottom-16 2xl:left-16 sm:space-y-4 md:space-y-6 2xl:space-y-8">
              <span>
                <Image
                  className="w-10 md:w-12 lg:w-16"
                  src={item.icon}
                  width={90}
                  height={90}
                  alt="icon"
                  priority
                />{" "}
              </span>
              <h2 className="capitalize">{item.title}</h2>
              <p className="text-wrap">{item?.desc}</p>
              {/* <Link
                href="#"
                className="flex items-center gap-[.625rem] xl:mt-8 md:mt-6 mt-4"
              >
                {" "}
                <span>
                  <Image src={icon} alt="" priority />{" "}
                </span>
                <p className="uppercase">discover More</p>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
