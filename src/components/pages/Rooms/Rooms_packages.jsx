import Facilities from "../Home/Facilities/Facilities";
import rooms from "@/data/rooms.json";
import Banner_Rooms from "./Banner_Rooms";
import Room_package from "./Room_package";

export default function Rooms_packages() {
    return (
        <section>
            <Banner_Rooms />
            <Room_package data={rooms} />
            <Facilities />
        </section>
    )
}