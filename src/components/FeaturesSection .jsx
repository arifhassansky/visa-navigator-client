import { Typewriter } from "react-simple-typewriter";
import animation from "../../public/Animation - 1733506123223.json";
import animation2 from "../../public/Animation - 1733507382356.json";
import animation3 from "../../public/Animation - 1733507729475.json";
import animation4 from "../../public/Animation - 1733508070278.json";
import animation5 from "../../public/Animation - 1733508240236.json";
import animation6 from "../../public/Animation - 1733508519702.json";
import Lottie from "lottie-react";

const features = [
  {
    icon: (
      <div className="w-20 p-2">
        <Lottie animationData={animation} loop={true} />
      </div>
    ),
    title: "Worldwide Coverage",
    description:
      "Seamless global connectivity ensuring access, support, and services anytime worldwide.",
    bgColor: "bg-green-100",
  },
  {
    icon: (
      <div className="w-20 p-2">
        <Lottie animationData={animation6} loop={true} />
      </div>
    ),
    title: "Competitive Pricing",
    description:
      "Affordable rates ensuring excellent value, high-quality service for all customers across all markets.",
    bgColor: "bg-orange-100",
  },
  {
    icon: (
      <div className="w-20 p-2">
        <Lottie animationData={animation3} loop={true} />
      </div>
    ),
    title: "Fast Booking",
    description:
      "Quick and hassle-free booking process ensuring convenience, speed, and efficiency for all users.",
    bgColor: "bg-yellow-100",
  },
  {
    icon: (
      <div className="w-20 p-2">
        <Lottie animationData={animation5} loop={true} />
      </div>
    ),
    title: "Guided Tours",
    description:
      "Expert-led tours offering immersive experiences, and unforgettable adventures worldwide.",
    bgColor: "bg-green-100",
  },
  {
    icon: (
      <div className="w-20 p-2">
        <Lottie animationData={animation4} loop={true} />
      </div>
    ),
    title: "Best Support 24/7",
    description:
      "Reliable 24/7 support ensuring your assistance, solutions, and peace of mind anytime you need.",
    bgColor: "bg-green-100",
  },
  {
    icon: (
      <div className="w-20 p-2">
        <Lottie animationData={animation2} loop={true} />
      </div>
    ),
    title: "Ultimate Flexibility",
    description:
      "Complete freedom to customize plans, schedules, and choices to suit your needs perfectly.",
    bgColor: "bg-orange-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-28">
      <div className="text-center mb-12">
        <p className="text-green-500 h-8 text-4xl font-semibold mb-4 font-secondary">
          <Typewriter
            words={["Our Success"]}
            loop
            typeSpeed={100}
            deleteSpeed={50}
          />
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-secondary">
          Why Choose Visa Navigator
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition flex items-center gap-6"
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center ${feature.bgColor}`}
            >
              <span className="text-5xl p-6">{feature.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
