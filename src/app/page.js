"use client";
import Main_Layout from "@/components/Layouts/Main_layout";
import Home_page from "@/components/pages/Home/Home_page";


export default function Home() {

  return (
    <main className="bg-white dark:bg-black">
      {/* <ModeToggle /> */}
      <Main_Layout>
        <Home_page />
      </Main_Layout>
    </main>
  );
}
