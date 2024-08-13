import Package_card from "../Packages/Package_card";


export default function All_package({ data }) {
    return (
        <section className="bg-bg_1">
            <div className="px-4 mx-auto container_inner_lg section_gap md:px-16 xl:px-32 2xl:px-64 ">
                <div className="space-y-8 text-primary text-center sm:max-w-[20.785rem] md:max-w-[30.875rem] lg:max-w-[36.875rem] mx-auto">
                    <div className="space-y-5 ">
                        <p className="uppercase link">our accomodation</p>
                        <h2 className="capitalize">
                            Discover Our Rooms & Suites and Villas
                        </h2>
                    </div>
                    <p className="px-10 capitalize md:px-20 lg:px-32">
                        Come in, take your shoes off and let yourself sink into the
                        mattress.
                    </p>
                </div>
                <div className="mt-[6.25rem]">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-20 md:gap-x-[3.75rem] ">
                        {data.map((room) => (
                            (<Package_card key={room.id} room={room} />)
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
