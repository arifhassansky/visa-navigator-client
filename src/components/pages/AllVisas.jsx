import { useLoaderData } from "react-router-dom";
import VisaCard from "../VisaCard";
import { useState } from "react";

const AllVisas = () => {
  const loadVisas = useLoaderData();
  const [filteredVisas, setFilteredVisas] = useState(loadVisas);

  const handleFilter = (visaType) => {
    if (visaType) {
      fetch(
        `https://visa-navigator-server-mu.vercel.app/getVisas?visaType=${visaType}`
      )
        .then((res) => res.json())
        .then((result) => {
          setFilteredVisas(result);
        });
    } else {
      setFilteredVisas(loadVisas);
    }
  };

  return (
    <div>
      <div className="mb-12 mt-8 w-11/12 mx-auto flex justify-between items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            Visa Application Management
          </h2>
          <h3 className="text-gray-600">
            View and manage the status of your visa applications with ease.
          </h3>
        </div>

        {/* Dropdown Section */}
        <div className="ml-auto">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn md:m-1 bg-primary text-white hover:bg-secondary"
            >
              Filter By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow right-0"
            >
              <li className="hover:bg-secondary rounded-lg  hover:text-white">
                <button onClick={() => handleFilter(null)}>All Visas</button>
              </li>
              <li className="hover:bg-secondary rounded-lg  hover:text-white">
                <button onClick={() => handleFilter("Tourist visa")}>
                  Tourist Visa
                </button>
              </li>
              <li className="hover:bg-secondary rounded-lg  hover:text-white">
                <button onClick={() => handleFilter("Student visa")}>
                  Student Visa
                </button>
              </li>
              <li className="hover:bg-secondary rounded-lg  hover:text-white">
                <button onClick={() => handleFilter("Official visa")}>
                  Official Visa
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visa Cards Section */}
      <div className="w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVisas.map((visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
