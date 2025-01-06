import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../../authProvider/AuthProvider";

const MyVisaApplications = () => {
  const { email } = useContext(authContext);
  const [visaApplications, setVisaApplications] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/appliedVisa?email=${email}`)
      .then((res) => res.json())
      .then((appliedVisas) => {
        setVisaApplications(appliedVisas);
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
        fetch(`${import.meta.env.VITE_URL}/appliedVisa/${id}`, {
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
              const filterApplications = visaApplications.filter(
                (application) => application._id !== id
              );
              setVisaApplications(filterApplications);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto mb-16 p-6 md:p-8 mt-32">
      <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-3">
        Manage Your Visa Applications
      </h2>
      <h3 className="text-gray-600 text-center mb-8">
        Track the status of your visa applications and manage your requests
      </h3>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-center border bg-primary">
              <th className="py-3">Image</th>
              <th className="py-3">Country</th>
              <th className="py-3">Visa Type</th>
              <th className="py-3">Processing Time</th>
              <th className="py-3">Fee</th>
              <th className="py-3">Validity</th>
              <th className="py-3">Application Method</th>
              <th className="py-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visaApplications?.map((application) => (
              <tr
                key={application._id}
                className="text-center border hover:bg-gray-100 duration-300"
              >
                <td className="py-4 flex justify-center">
                  <img
                    className="w-16 rounded-md "
                    src={application.countryPhoto}
                    alt={application.countryName}
                  />
                </td>
                <td className="py-4">{application.countryName}</td>
                <td className="py-4">{application.visaType}</td>
                <td className="py-4">{application.processingTime}</td>
                <td className="py-4">${application.fee}</td>
                <td className="py-4">{application.validity}</td>
                <td className="py-4">{application.applicationMethod}</td>
                <td className="py-4">
                  <button
                    onClick={() => handleCancel(application._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVisaApplications;
