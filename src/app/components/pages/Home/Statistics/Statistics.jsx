import React from "react";

const Statistics = () => {
  const data = [
    {
      id: 1,
      title: "Happy Customers",
      number: "3500+",
    },
    {
      id: 2,
      title: "Cottages",
      number: "14",
    },
    {
      id: 3,
      title: "Bedrooms",
      number: "20",
    },
    {
      id: 4,
      title: "Since",
      number: "2022",
    },
  ];
  return (
    <section className=" md:py-[6.25rem] py-20 px-5 md:px-[.9375rem]">
      <div className="lg:max-w-[46.375rem] xl:max-w-[59.625rem] 2xl:max-w-[72.93rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-28 sm:gap-y-32 md:gap-y-36 lg:gap-y-0">
        {data?.map((item, idx) => (
          <div key={idx} className="w-max">
            <p className="!leading-none text-7xl xl:text-8xl font-heading  h-fit text-center">
              {item?.number}
            </p>
            <p className=" !leading-none mt-8 sm:mt-9 md:mt-10 lg:mt-11 xl:mt-12  h-fit text-center">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
