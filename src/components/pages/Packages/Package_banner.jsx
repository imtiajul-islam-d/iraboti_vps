import Image from "next/image";
import img from "../../../../public/image/banner/banner2.webp"

export default function Package_banner() {
    return (
        <section className="container_outer">
            <div className="relative w-full h-[70svh] md:h-[90svh]">
                <Image src={img} alt="" className="w-full object-cover brightness-50 md:rounded_all h-[70svh] md:h-[90svh] absolute top-0 left-0 z-[-1]" placeholder="blur"
                    sizes="70svw"
                    blurDataURL={process.env.blurDataURL} />
                <div className="w-full flex items-center justify-center h-[70svh] md:h-[90svh] pt-[.5svh] sm:max-w-[23.9rem] md:max-w-[31.25rem] xl:max-w-[44.8rem] mx-auto px-7 sm:px-5">
                    <div className="text-white text-center space-y-6">
                        <h1 className="capitalize leading-none md:leading-normal">All Packages</h1>
                        <p className="uppercase link sm:px-4 md:px-8 xl:px-32">Indulge in luxury in our rooms and suites, featuring stunning views, elegant furnishings, and modern amenities.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
