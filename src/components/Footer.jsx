import { FaPhone } from "react-icons/fa";
import { MdAddLocation, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#314530] text-white">
      {/* Main Footer Section */}
      <footer className="w-11/12 mx-auto p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:place-items-center gap-12">
        {/* Contact Us Section */}
        <div>
          <h6 className="text-2xl font-bold mb-4">Contact Us</h6>
          <p className="text-xl text-secondary font-bold">Visa Navigator</p>
          <p className="text-secondary">Processing Visa Worldwide</p>

          <div className="flex items-center mt-2">
            <MdAddLocation className="text-4xl text-gray-300 mr-2" />
            <span>14 Daisy Garden, Mohammadpur, Dhaka 1207</span>
          </div>

          <div className="flex items-center mt-2">
            <FaPhone className="text-2xl text-gray-300 mr-2" />
            <span>+8801960606195</span>
          </div>

          <div className="flex items-center mt-2">
            <MdOutlineMailOutline className="text-2xl text-gray-300 mr-2" />
            <span>arifskypro@gmail.com</span>
          </div>
        </div>

        {/* Services Offered Section */}
        <nav>
          <h6 className="text-2xl font-bold mb-4">Services</h6>

          <Link
            to="/allVisas"
            className="block mt-2 text-gray-300 hover:text-gray-400 transition-colors"
          >
            All visa
          </Link>
          <Link
            to="/addVisa"
            className="block mt-2 text-gray-300 hover:text-gray-400 transition-colors"
          >
            Add visa
          </Link>
          <Link
            to="/myAddedVisas"
            className="block mt-2 text-gray-300 hover:text-gray-400 transition-colors"
          >
            Added Visas
          </Link>
          <Link
            to="/MyVisaApplications"
            className="block mt-2 text-gray-300 hover:text-gray-400 transition-colors"
          >
            Visa Application
          </Link>
        </nav>

        {/* Social Media Links Section */}
        <nav>
          <h6 className="text-2xl font-bold mb-4">Follow Us</h6>
          <div className="flex mt-2 gap-2">
            <a
              href="https://www.facebook.com/arifhearthacker/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/swKMGKv/2021-Facebook-icon-svg.png"
                alt="Facebook"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <a
              href="https://x.com/arifskypro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/3Yd0c93/free-twitter-logo-icon-2429-thumb.png"
                alt="Twitter"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/arif-hassan-8a4642317/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/b1Tvsq6/linkedin.webp"
                alt="LinkedIn"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/ariyan_sky/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/phDPkf7/instrgram.png"
                alt="Instagram"
                className="w-10 h-10 rounded-full"
              />
            </a>
          </div>
        </nav>
      </footer>

      {/* Footer Bottom Section */}
      <div className="text-center bg-[#223E2E] py-6">
        <p className="text-gray-300">
          © {new Date().getFullYear()} | All Rights Reserved | Visa Navigator |
          Md. Arif Hassan
        </p>
      </div>
    </div>
  );
};

export default Footer;
