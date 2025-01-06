import VisaCard from "../VisaCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllVisas = () => {
  const [visa, setVisa] = useState([]);
  const [visaType, setVisaType] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const getvisa = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_URL
        }/getVisas?visaType=${visaType}&search=${search}&sort=${sort}`
      );
      setVisa(data);
    };
    getvisa();
  }, [search, visaType, sort]);

  return (
    <div className="mb-12 mt-40 w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
          Visa Application Management
        </h2>
        <h3 className="text-gray-600">
          View and manage the status of your visa applications with ease.
        </h3>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-between gap-6 my-8">
        {/* sort */}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn md:m-1 bg-secondary text-white hover:bg-primary"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow left-0"
          >
            <li className="hover:bg-primary rounded-lg  hover:text-white">
              <button onClick={() => setSort("asc")}>
                Price (Low to High)
              </button>
            </li>
            <li className="hover:bg-secondary rounded-lg  hover:text-white">
              <button onClick={() => setSort("dsc")}>
                Price (Hign to Low)
              </button>
            </li>
          </ul>
        </div>
        {/* search box */}
        <div className="w-5/12">
          <label className="input input-bordered border-primary flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by Country"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
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
              <button onClick={() => setVisaType("")}>All Visas</button>
            </li>
            <li className="hover:bg-secondary rounded-lg  hover:text-white">
              <button onClick={() => setVisaType("Tourist visa")}>
                Tourist Visa
              </button>
            </li>
            <li className="hover:bg-secondary rounded-lg  hover:text-white">
              <button onClick={() => setVisaType("Student visa")}>
                Student Visa
              </button>
            </li>
            <li className="hover:bg-secondary rounded-lg  hover:text-white">
              <button onClick={() => setVisaType("Official visa")}>
                Official Visa
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Visa Cards Section */}
      <div className=" mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visa?.map((visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
