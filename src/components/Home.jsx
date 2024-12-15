import Banner from "../Banner";
import FeaturesSection from "./FeaturesSection ";
import Flags from "./Flags";
import LatestVisas from "./LatestVisas";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Flags />
      <LatestVisas />
      <FeaturesSection />
      <Testimonials />
    </div>
  );
};

export default Home;
