import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiWifiOffLine } from "react-icons/ri";

const LatestVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/latestVisas`)
      .then((res) => res.json())
      .then((data) => {
        setLatestVisas(data.slice(0, 8));
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {latestVisas.map((visa) => (
          <div
            key={visa._id}
            className="border border-gray-200 rounded-xl shadow-lg hover:shadow-xl overflow-hidden p-4"
          >
            <img
              src={visa.countryPhoto}
              alt={visa.country}
              className="w-full h-48 object-cover rounded-xl hover:scale-105 transition duration-300"
            />
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg mt-4 font-bold text-primary">
                  {visa.countryName}
                </h3>
                <p className="mt-4 bg-green-200 px-2 rounded-md text-sm">
                  {visa.visaType}
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <p className="text-sm">⏱️{visa.processingTime} Processing</p>
                <p className="text-sm">💵 ${visa.fee}</p>
              </div>
              <div className="flex justify-between items-center pt-1 text-sm">
                <p>📅 {visa.validity} Validity</p>
                <p className="flex items-center gap-1 text-sm">
                  {visa.applicationMethod == "Online" ? (
                    "💻"
                  ) : (
                    <RiWifiOffLine />
                  )}
                  {visa.applicationMethod} apply
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleDetails(visa._id)}
                  className="w-full bg-primary text-white hover:bg-secondary py-1 rounded-lg hover:bg-primary-dark transition"
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
