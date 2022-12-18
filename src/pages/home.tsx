import DatContent from "../Components/DatContent";
import Footer from "../Components/Footer";
import HeaderComponent from "../Components/header";
import HomeComponent from "../Components/home";
import Navbar from "../Components/NavBar";

const HomeCompo = () => {
  return (
    <div className="bg-[#e5e5e5]">
      <Navbar />
      <HeaderComponent />
      <HomeComponent />
      <DatContent />
      <Footer />
    </div>
  );
};

export default HomeCompo;
