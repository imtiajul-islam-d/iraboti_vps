import { FaPeopleGroup } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { VscSymbolMisc } from "react-icons/vsc";


export default function Amenities({ title, value }) {
    return (
        <li className="">
            <span className={`flex items-center gap-5 xl:gap-8 mt-5 xl:mt-8`}>
                {title === "person" && <FaPeopleGroup className="text-2xl lg:text-3xl" />}
                {title === "Breakfast" && <MdFreeBreakfast className="text-2xl lg:text-3xl" />}
                {title === "misc" && <VscSymbolMisc className="text-2xl lg:text-3xl" />}
                <p
                    className={`text-justify`}
                >
                    {value}
                </p>
            </span>
        </li>
    )
}