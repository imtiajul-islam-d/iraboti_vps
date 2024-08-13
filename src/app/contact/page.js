import Main_Layout from "@/components/Layouts/Main_layout";
import Contact from "@/components/pages/Contact/Contact";
import { Toaster } from "react-hot-toast";
export default function page() {
  return (
    <Main_Layout>
        <Contact />
        <Toaster/>
    </Main_Layout>
  )
}