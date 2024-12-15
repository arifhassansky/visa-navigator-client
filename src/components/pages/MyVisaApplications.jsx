import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../../authProvider/AuthProvider";

const MyVisaApplications = () => {
  const { email } = useContext(authContext);
  const [visaApplications, setVisaApplications] = useState([]);
  const [filteredVisaApplications, setFilteredVisaApplications] = useState([]);

  useEffect(() => {
    fetch(
      `https://visa-navigator-server-mu.vercel.app/appliedVisa?email=${email}`
    )
      .then((res) => res.json())
      .then((appliedVisas) => {
        setVisaApplications(appliedVisas);
        setFilteredVisaApplications(appliedVisas);
      });
  }, [email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-server-mu.vercel.app/appliedVisa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Visa Application has been deleted.",
                icon: "success",
              });
              const filterApplications = filteredVisaApplications.filter(
                (application) => application._id !== id
              );
              setFilteredVisaApplications(filterApplications);
            }
          });
      }
    });
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    if (searchValue) {
      fetch(
        `https://visa-navigator-server-mu.vercel.app/appliedVisa?search=${searchValue}`
      )
        .then((res) => res.json())
        .then((appliedVisas) => {
          setVisaApplications(appliedVisas);
          setFilteredVisaApplications(appliedVisas);
        });
    } else {
      fetch(
        `https://visa-navigator-server-mu.vercel.app/appliedVisa?email=${email}`
      )
        .then((res) => res.json())
        .then((appliedVisas) => {
          setVisaApplications(appliedVisas);
          setFilteredVisaApplications(appliedVisas);
        });
    }
  };

  return (
    <div className="w-11/12 mx-auto mb-16 p-6 md:p-8">
      <div className="flex justify-center lg:justify-end mb-4 lg:mb-0">
        <label className="input input-bordered border-primary flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search by Country"
            onChange={handleSearch}
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
      <div className="flex justify-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-3">
            Manage Your Visa Applications
          </h2>
          <h3 className="text-gray-600 text-center">
            Track the status of your visa applications and manage your requests
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVisaApplications?.map((application) => (
          <div
            key={application._id}
            className="p-6 shadow-lg rounded-xl overflow-hidden border border-gray-200 transform transition duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="relative mb-8">
              <h3 className="absolute bottom-2 left-2 text-xl font-semibold text-white bg-black bg-opacity-50 p-2 rounded-md">
                {application.countryName}
              </h3>
              <img
                src={application.countryPhoto}
                alt={application.countryName}
                className="w-full h-40 sm:h-56 object-cover rounded-lg"
              />
            </div>

            <div>
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Visa Type:</strong>
                  {application.visaType}
                </p>
                <p>
                  <strong className="text-primary">Processing Time:</strong>
                  {application.processingTime}
                </p>
                <p>
                  <strong className="text-primary">Fee:</strong> $
                  {application.fee}
                </p>
                <p>
                  <strong className="text-primary">Validity:</strong>
                  {application.validity}
                </p>
                <p>
                  <strong className="text-primary">Application Method:</strong>
                  {application.applicationMethod}
                </p>
                <p>
                  <strong className="text-primary">Applied Date:</strong>
                  {application.appliedDate}
                </p>
                <p>
                  <strong className="text-primary">Applicant:</strong>
                  {`${application.firstName} ${application.lastName}`}
                </p>
                <p>
                  <strong className="text-primary">Email:</strong>
                  {application.email}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => handleCancel(application._id)}
                  className="w-full py-1 text-lg font-semibold bg-red-500 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-700 transition duration-300"
                >
                  Cancel Application
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
// if (searchValue) {
//   const filteredVisas = visaApplications.filter((application) =>
//     application.countryName.toLowerCase().includes(searchValue)
//   );
//   setFilteredVisaApplications(filteredVisas);
// } else {
//   setFilteredVisaApplications(visaApplications);
// }
