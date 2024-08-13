"use client";
import Image from "next/image";
import img from "../../../../public/image/banner/contact.jpg";
import icon from "../../../../public/icons/more.svg";
import chat from "../../../../public/icons/chat.svg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const handleEmail = (e) => {
    e.preventDefault();
    const SERVICE_ID = "service_zmp1hos";
    const TEMPLATE_ID = "template_hh4lxqi";
    const publicKey = "2lINHPQoIyLj4jgDE";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, publicKey).then(
      (result) => {
        result.status === 200 &&
          toast.success("Message has been sent successfully");
      },
      (error) => {
        error.status === 400 &&
          toast.error("Message sending failed, Try Again");
        console.error(error);
      }
    );
    e.target.reset();
  };
  return (
    <section className="container_outer">
      <div className="relative w-full h-[70svh] md:h-[90svh]">
        <Image
          src={img}
          alt=""
          className="w-full object-cover brightness-50 md:rounded_all h-[70svh] md:h-[90svh] absolute top-0 left-0 z-[-1]"
          placeholder="blur"
          sizes="70svw"
          blurDataURL={process.env.blurDataURL}
        />
        <div className="w-full flex items-center justify-center h-[70svh] md:h-[90svh] pt-[.5svh] sm:max-w-[23.9rem] md:max-w-[31.25rem] xl:max-w-[44.8rem] mx-auto px-7 sm:px-5">
          <div className="space-y-6 text-center text-white">
            <h1 className="leading-none capitalize md:leading-normal">
              Contact
            </h1>
            <p className="uppercase link sm:px-4 md:px-8 xl:px-32">
              Touch the sound of nature.
            </p>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="my-20 md:my-[6.25rem] lg:my-[12.5rem] mx-auto px-4 md:px-16 xl:px-32 2xl:px-64">
        <div className="space-y-7 lg:space-y-14 mb-7 lg:mb-14 text-center lg:max-w-[50rem] mx-auto">
          <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
            <Image src={chat} alt="chat-icon" priority />
            <h1 className="px-8 capitalize">Hi, Pls leave us your query.</h1>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc
            sed sapien dignissim pulvinar. Se d at gravida.
          </p> */}
        </div>
        <form
          onSubmit={handleEmail}
          ref={formRef}
          className="space-y-10 lg:space-y-[3.25rem]"
        >
          <div className="w-full">
            <div>
              <label className="">Full name</label>
              <input
                type="text"
                required
                name="from_name"
                className="w-full mt-2 lg:px-5 lg:py-[1.5625rem] px-4 py-3 text-gray-500 bg-transparent outline-none border focus:border-primary border-border transition-colors rounded-sm "
              />
            </div>
          </div>
          <div>
            <label className="">Email</label>
            <input
              type="email"
              required
              name="email_from"
              className="w-full mt-2 lg:px-5 lg:py-[1.5625rem] px-4 py-3 text-gray-500 bg-transparent outline-none border focus:border-primary border-border transition-colors rounded-sm "
            />
          </div>
          <div>
            <label className="">Phone number</label>
            <div className="relative mt-2">
              <div className="absolute inset-y-0 flex items-center h-6 pr-2 my-auto border-r left-3">
                <select className="h-full bg-transparent rounded-sm outline-none">
                  <option>BD</option>
                </select>
              </div>
              <input
                type="tel"
                placeholder="+880-1000000000"
                name="phone_from"
                className="w-full pl-[4.5rem] px-5 lg:py-[1.5625rem] py-3 appearance-none bg-transparent outline-none border focus:border-primary border-border transition-colors rounded-sm "
              />
            </div>
          </div>
          <div>
            <label className="">Message</label>
            <textarea
              name="message"
              className="w-full px-3 py-2 mt-2 transition-colors bg-transparent border rounded-sm outline-none appearance-none resize-none h-36 focus:border-primary border-border "
            ></textarea>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="flex items-center justify-center gap-3 px-6 py-3 mx-auto transition-colors rounded-sm bg-secondary hover:bg-secondary/70 md:px-8"
            >
              <p className="uppercase link">Send Query</p>
              <span>
                <Image src={icon} alt="" priority />
              </span>
            </button>
          </div>
        </form>
      </div>
      {/* map */}
      <div>
        <div className="w-full">
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
