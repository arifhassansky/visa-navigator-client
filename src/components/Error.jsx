import { Link } from "react-router-dom";
import errorImg from "../../public/Animation - 1733579930510.json";
import Lottie from "lottie-react";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-6xl font-black mb-4">404</h2>
      <h3 className="text-lg font-medium mb-4">
        We cannot find the page you are looking for.
      </h3>
      <Link
        to="/"
        className="bg-primary font-medium rounded-lg text-white px-6 py-2"
      >
        Back to Home
      </Link>
      <div className="mt-4 w-80">
        <Lottie animationData={errorImg} loop={true} />
      </div>
    </div>
  );
};

export default Error;
