import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";

export default function Main_Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
