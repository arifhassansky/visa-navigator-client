import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const LatestVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://visa-navigator-server-mu.vercel.app/latestVisas")
      .then((res) => res.json())
      .then((data) => {
        setLatestVisas(data.slice(0, 6));
      });
  }, []);

  const handleDetails = (visaId) => {
    navigate(`/visaDetails/${visaId}`);
  };

  return (
    <div className="mb-12 w-11/12 mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 font-secondary">
        Latest Visas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestVisas.map((visa) => (
          <div
            key={visa._id}
            className="border border-gray-200 rounded-xl shadow-lg overflow-hidden p-6"
          >
            <img
              src={visa.countryPhoto}
              alt={visa.country}
              className="w-full h-48 object-cover rounded-xl hover:scale-105 transition duration-300"
            />
            <div className="space-y-3">
              <h3 className="text-xl mt-4 font-bold text-primary">
                {visa.countryName}
              </h3>
              <p>
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p>
                <strong>Processing Time:</strong> {visa.processingTime}
              </p>
              <p>
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p>
                <strong>Validity:</strong> {visa.validity}
              </p>
              <p>
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleDetails(visa._id)}
                  className="w-full bg-primary text-white hover:bg-secondary py-2 rounded-lg hover:bg-primary-dark transition"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-12">
        <Link
          to="/allVisas"
          className="bg-secondary text-white font-semibold hover:bg-primary px-20 py-3 rounded-lg hover:bg-primary-dark transition"
        >
          See All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisas;
