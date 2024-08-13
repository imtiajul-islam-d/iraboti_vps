import Image from "next/image";
import ira from "../../../../public/image/follow/f14.jpg";
import values from "../../../../public/image/follow/c1.jpg";
import { Accordion_comps } from "@/components/shared/Accordion_comps";

export default function About() {
  const demo = [
    {
      id: 1,
      que: "Mission",
      ans: "Amid the monotone of life, the pain we bear in mechanized living, the distance to our nature-self makes us restless and far away from the inner peace.Iraboti promises the peace you seek, Iraboti Eco Resort & Research Center provides the complete silence where you can dive into yourself by the touch of nature..",
    },
    {
      id: 2,
      que: "Vision",
      ans: "Our vision is to make your travel easier and affordable.We wish to let you melt with the unique tastes, culture & stories of the peripheral area of the worlds largest Mangrove forest-Sundarbans.",
    },
    {
      id: 3,
      que: "Community Engagement",
      ans: "We dream to create a model eco-tourism village of its kind to eliminate poverty of the inhabitants with the money, education & knowledge of the tourism.",
    },
    {
      id: 4,
      que: "Innovation",
      ans: "We are the first private initiative to let our tourism industry properly connect with the most poor, life threatened poverty driven & deprived community people of Sundarbans, mostly Bawali, Mawali & fishermen."
    },
    {
      id: 5,
      que: "Conclusion",
      ans: "Our Technology driven sales engines are the key to building an industry blending tourism-community-agriculture with cultural experiences. We believe it may be a better solution for not going to build process industries near ecologically Critical areas like Sundarban periphery."
    }

  ];
  return (
    <section className="container_outer">
      <div className="relative w-full h-[70svh] md:h-[90svh]">
        <Image
          src={values}
          alt=""
          className="w-full object-cover brightness-50 md:rounded_all h-[70svh] md:h-[90svh] absolute top-0 left-0 z-[-1]"
          placeholder="blur"
          sizes="70svw"
          blurDataURL={process.env.blurDataURL}
        />
        <div className="w-full flex items-center justify-center h-[70svh] md:h-[90svh] pt-[.5svh] sm:max-w-[23.9rem] md:max-w-[31.25rem] xl:max-w-[44.8rem] mx-auto px-7 sm:px-5">
          <div className="space-y-6 text-center text-white">
            <h1 className="leading-none capitalize md:leading-normal">
              About Iraboti
            </h1>
            {/* <p className="uppercase link sm:px-4 md:px-8 xl:px-32">
              Indulge in luxury in our rooms and suites, featuring stunning
              views, elegant furnishings, and modern amenities.
            </p> */}
          </div>
        </div>
      </div>
      {/* Other sections */}
      <div className="my-20 md:my-[12.5rem] mx-auto space-y-20 md:space-y-[12.5rem]">
        <p className=" w-full md:text-5xl text-2xl  px-5 xl:px-[5.75rem] text-justify ">
          <span className="leading-normal text-primary/70">Iraboti</span>{" "}
          <span className="leading-normal">
            Eco Resort & Research Center is a community-based village tourism
            destination. Our resort offers a unique experience for visitors who
            love nature and want to learn about environmental conservation with
            various accommodation options, including cottages, duplexes and
            treehouses (future) and surrounded by beautiful greenery and natural
            landscapes of mighty Sundarbans, the largest mangrove forest in the
            world.
          </span>
        </p>
        <div className="mission px-[.625rem]">
          <div className=" md:px-5 xl:px-[3.75rem] py-6 md:py-8 lg:py-[12.5rem] bg-primary/90 w-full ">
            <div className="flex flex-col gap-4 md:gap-7 lg:gap-[6.25rem] px-4 sm:px-5 mx-auto">
              <div className="flex flex-col gap-10 md:flex-row md:gap-12">
                <div className="w-full">
                  <Image
                    src={values}
                    width={350}
                    height={210}
                    placeholder="blur"
                    sizes="70svw"
                    blurDataURL={process.env.blurDataURL}
                    className="object-cover w-full h-full"
                    alt="FAQ"
                  />
                </div>
                <div className="w-full space-y-10 lg:space-y-8">
                  {demo.map((item) => (
                    <Accordion_comps
                      key={item.id}
                      ans={item.ans}
                      que={item.que}
                    />
                  ))}
                </div>
              </div>
              <div className="">
                <p className=" w-full md:text-5xl text-2xl  px-5 xl:px-[5.75rem] text-justify text-white">
                  <span className="leading-normal">
                    Sundarbans is the worlds largest mangrove forest and inhabitants of this locality believe in many Jungle myths & deities like &apos;BonoBibi&apos; & &apos;ShahJangali&apos;. Won&apos;t you come to have their blessings!!
                  </span>
                </p>
              </div>
              <div className="h-[80svh] w-full">
                <Image
                  src={ira}
                  alt="about-image"
                  className="h-[80svh] bg-center object-cover  "
                  placeholder="blur"
                  sizes="70svw"
                  blurDataURL={process.env.blurDataURL}
                />
              </div>
              <div className="w-full px-5 xl:px-[5.75rem] text-justify space-y-10 lg:space-y-8 text-white">
                <p className="md:text-5xl text-2xl font-heading">Why should you come to Iraboti?</p>
                <p className="md:text-4xl text-xl">
                  Amid the monotone of life, the pain we bear in mechanized living, the distance to our nature-self makes us restless and far away from the inner peace.
                  Iraboti promises the peace you seek, Irboti provides the complete silence where you can go & dive into yourself by the touch of nature..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full px-[.625rem] mb-[.625rem] mt-[12.5rem]">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Iraboti%20Eco%20Resort%20&amp;%20Research%20Center%20Limited+(Iraboti%20Eco%20Resort%20&amp;%20Research%20Center%20Limited)&amp;t=h&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Population calculator map
            </a>
          </iframe>
        </div>
      </div>
    </section>
  );
}
