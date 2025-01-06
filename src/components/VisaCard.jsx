import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VisaCard = ({ visa }) => {
  const { _id, countryPhoto, countryName, visaType, processingTime, fee } =
    visa;
  return (
    <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform  hover:shadow-2xl">
      <img
        src={countryPhoto}
        alt={countryName}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-primary">{countryName}</h3>
          <p className="text-sm bg-green-200 px-3 rounded-lg">{visaType}</p>
        </div>
        <p className="text-sm mt-2">⏱️ {processingTime} Processing</p>
        <p className="text-sm mt-1">💵 ${fee}</p>
        <Link
          to={`/visaDetails/${_id}`}
          className="mt-4 w-full block text-center py-1 bg-primary text-white rounded-md hover:bg-secondary transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default VisaCard;
