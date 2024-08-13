import Main_Layout from "@/components/Layouts/Main_layout";
import Link from "next/link";

export default function page() {
  return (
    <Main_Layout>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-10 bg-primary px-[.625rem] pt-[.625rem]">
        <h1 className="text-border font-semibold">Coming Soon ...</h1>
        <Link href="/" className="button link_m">Back To Home</Link>
    </div>
    </Main_Layout>
  )
}