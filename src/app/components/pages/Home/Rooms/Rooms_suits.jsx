import Rooms_carousel from "./Rooms_carousel";

export default function Rooms_suits() {
  return (
    <section className="container_outer" >
      <div className="container_inner_sm section_gap">
        <div className="text-center title">
          <p className="uppercase link ">explore</p>
          <h2 className="leading-tight">Rooms & Packages</h2>
        </div>
        <Rooms_carousel />
      </div>
    </section>
  );
}
