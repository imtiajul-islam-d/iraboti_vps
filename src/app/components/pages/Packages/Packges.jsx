import Facilities from "@/components/pages/Home/Facilities/Facilities"
import packages from "@/data/packages.json"
import Package_banner from "./Package_banner"
import All_package from "@/components/pages/Packages/All_package";

export default function Packges() {
    return (
        <>
            <Package_banner />
            <All_package data={packages} />
            <Facilities />
        </>
    )
}