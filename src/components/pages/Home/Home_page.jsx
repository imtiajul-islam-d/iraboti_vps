import Activities from "./Activities/Activities";
import Banner from "./Banner/Banner";
// import Blog from "./Blog/Blog";
import Facilities from "./Facilities/Facilities";
// import Core_features from "./Feature/Core_features";
import Featured from "./Featured/Featured";
import Follow_gallery from "./Follow/Follow_gallery";
import Rooms_suits from "./Rooms/Rooms_suits";
import Special from "./Speciality/Special";
import Statistics from "./Statistics/Statistics";
import Testimonial from "./Testimonial/Testimonial";

export default function Home_page() {
  return (
    <section>
      <Banner />
      <Featured />
      <Statistics />
      <Rooms_suits />
      <Activities />
      {/* <Blog /> */}
      <Testimonial />
      <Facilities />
      <Special />
      <Follow_gallery />
    </section>
  );
}
