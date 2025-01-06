import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";
import { toast } from "react-toastify";

const VisaDetails = () => {
  const { email } = useContext(authContext);
  const singleVisa = useLoaderData();

  const {
    countryPhoto,
    countryName,
    visaType,
    processingTime,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    description,
    requiredDocuments,
  } = singleVisa;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = form.appliedDate.value;
    const fee = form.fee.value;
    const appliedVisa = {
      countryName,
      countryPhoto,
      visaType,
      processingTime,
      fee,
      validity,
      applicationMethod,
      appliedDate,
      firstName,
      lastName,
      email,
    };

    fetch(`${import.meta.env.VITE_URL}/appliedVisa`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appliedVisa),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("You applied Succesfully..!");
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto my-16 p-6 md:p-8 shadow-2xl rounded-xl">
      <div className="relative mb-12 overflow-hidden rounded-xl shadow-lg">
        <img
          src={countryPhoto}
          alt={countryName}
          className="w-full h-64 md:h-96 object-cover transform hover:scale-105 transition duration-500"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 rounded-b-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {countryName}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/*Visa Information */}
        <div className="space-y-6">
          <div className=" shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Visa Information
            </h3>
            <div className="space-y-2">
              <p className="text-lg">
                <strong>Visa Type:</strong> {visaType}
              </p>
              <p className="text-lg">
                <strong>Processing Time:</strong>
                {processingTime}
              </p>
              <p className="text-lg">
                <strong>Age Restriction:</strong>
                {ageRestriction ? `${ageRestriction} years` : "None"}
              </p>
              <p className="text-lg">
                <strong>Fee:</strong> ${fee}
              </p>
              <p className="text-lg">
                <strong>Validity:</strong> {validity}
              </p>
              <p className="text-lg">
                <strong>Application Method:</strong>
                {applicationMethod}
              </p>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Required Documents
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg ">
            {requiredDocuments.map((doc, index) => (
              <li
                key={index}
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-6 mt-8">
        <div className="shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Description
          </h3>
          <p className="text-lg leading-relaxed text-justify">{description}</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          onClick={() => document.getElementById("modal").showModal()}
          className="bg-secondary text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-primary transform hover:scale-105 transition duration-300 text-center"
        >
          Apply Now
        </Link>
      </div>

      {/* Modal */}
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-3xl text-center font-bold mb-4">
            Apply for Visa
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block  font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Applied Date</label>
                <input
                  type="text"
                  name="appliedDate"
                  value={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Fee</label>
                <input
                  type="text"
                  name="fee"
                  defaultValue={fee}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => document.getElementById("modal").close()}
                className="px-6 py-2 btn text-gray-600 border rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => document.getElementById("modal").close()}
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;
