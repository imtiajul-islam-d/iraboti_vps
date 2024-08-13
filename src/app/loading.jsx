import Image from "next/image";
import logo from "../../public/image/logo.svg";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="h-[100svh] fixed top-0 left-0 z-[100000000] w-full flex items-center justify-center">
      <Image
        className="animate-bounce w-28 md:w-32 aspect-square"
        src={logo}
        alt="Loading"
      />
    </section>
  );
}
