import { useContext, useEffect, useState } from "react";
import { authContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyAddedVisas = () => {
  const { user, setLoading } = useContext(authContext);
  const [myAddedVisas, setMyAddedVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/myAddedVisas/?email=${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setMyAddedVisas(result);
      });
  }, [user?.email, setLoading]);

  const handleDelete = (visaId) => {
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
        fetch(`${import.meta.env.VITE_URL}/deleteVisa/${visaId}`, {
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
              const filterApplications = myAddedVisas.filter(
                (application) => application._id !== visaId
              );
              setMyAddedVisas(filterApplications);
            }
          });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const countryName = form.countryName.value;
    const countryPhoto = form.countryPhoto.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const description = form.description.value;
    const requiredDocuments = Array.from(form.elements["requiredDocuments"])
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const updateVisaInfo = {
      countryName,
      countryPhoto,
      visaType,
      processingTime,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      description,
      requiredDocuments,
    };

    fetch(
      `${import.meta.env.VITE_URL}/myAddedVisas/update/${selectedVisa._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateVisaInfo),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          const updatedVisas = myAddedVisas.map((visa) =>
            visa._id === selectedVisa._id
              ? { ...visa, ...updateVisaInfo }
              : visa
          );
          setMyAddedVisas(updatedVisas);
          toast("Visa Updated Successfully");
          document.getElementById(`modal-${selectedVisa._id}`).close();
        }
      });
  };

  const handleUpdateClick = (visa) => {
    setSelectedVisa(visa);
    document.getElementById(`modal-${visa._id}`).showModal();
  };

  return (
    <div className="w-11/12 mx-auto mb-16 p-6 md:p-8 mt-36">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-3">
          Visa Applications Overview
        </h2>
        <h3 className="text-gray-600 text-center">
          Easily view, update, and organize your visa applications at your
          convenience
        </h3>
      </div>
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
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myAddedVisas?.map((application) => (
              <tr
                key={application._id}
                className="border text-center hover:bg-gray-100 duration-300"
              >
                <td className="py-4 flex justify-center">
                  <img
                    className="w-16 rounded-md"
                    src={application.countryPhoto}
                  />
                </td>
                <td className="py-4">{application.countryName}</td>
                <td className="py-4">{application.visaType}</td>
                <td className="py-4">{application.processingTime}</td>
                <td className="py-4">${application.fee}</td>
                <td className="py-4">{application.validity}</td>
                <td className="py-4">{application.applicationMethod}</td>
                <td className="py-4 space-x-4 flex justify-center">
                  <button
                    onClick={() => handleUpdateClick(application)}
                    className="bg-green-600 text-white px-4 py-1 text-lg font-semibold rounded-lg"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(application._id)}
                    className="bg-red-600 text-white px-4 py-1 text-lg font-semibold rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for updating visa */}
      <dialog
        id={`modal-${selectedVisa?._id}`}
        className="modal modal-bottom sm:modal-middle transition-all duration-300 ease-in-out transform opacity-0"
      >
        <div className="modal-box p-8 border border-primary rounded-lg shadow-lg">
          <h3 className="text-3xl text-center font-bold mb-6 text-primary">
            Update Your Visa Application
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-lg block mb-2">
                Country Photo
              </label>
              <input
                type="text"
                name="countryPhoto"
                defaultValue={selectedVisa?.countryPhoto}
                placeholder="Enter Your Country Photo URL"
                className="input input-bordered input-accent w-full rounded-lg"
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg block mb-2">
                Country Name
              </label>
              <input
                type="text"
                name="countryName"
                defaultValue={selectedVisa?.countryName}
                placeholder="Enter Your Country Name"
                className="input input-bordered input-accent w-full rounded-lg"
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg block mb-2">
                Visa Type
              </label>
              <select
                name="visaType"
                className="input input-bordered input-accent w-full rounded-lg"
                defaultValue={selectedVisa?.visaType}
                required
              >
                <option value="">Select</option>
                <option value="Tourist visa">Tourist visa</option>
                <option value="Student visa">Student visa</option>
                <option value="Official visa">Official visa</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-lg block mb-2">
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                defaultValue={selectedVisa?.processingTime}
                placeholder="e.g., 10-15 days"
                className="input input-bordered input-accent w-full rounded-lg"
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg block mb-2">
                Age Restriction
              </label>
              <input
                type="number"
                name="ageRestriction"
                defaultValue={selectedVisa?.ageRestriction}
                placeholder="Enter Age Restriction"
                className="input input-bordered input-accent w-full rounded-lg"
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg block mb-2">Fee</label>
              <input
                type="number"
                name="fee"
                defaultValue={selectedVisa?.fee}
                placeholder="Enter Fee"
                className="input input-bordered input-accent w-full rounded-lg"
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg block mb-2">Validity</label>
              <input
                type="text"
                name="validity"
                defaultValue={selectedVisa?.validity}
                placeholder="e.g., 6 months"
                className="input input-bordered input-accent w-full rounded-lg"
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg block mb-2">
                Application Method
              </label>
              <input
                type="text"
                name="applicationMethod"
                defaultValue={selectedVisa?.applicationMethod}
                placeholder="e.g., Online"
                className="input input-bordered input-accent w-full rounded-lg"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="font-medium text-lg block mb-2">
                Description
              </label>
              <textarea
                className="border border-accent w-full rounded-lg p-3"
                name="description"
                placeholder="Enter a description"
                defaultValue={selectedVisa?.description}
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div className="col-span-2">
              <fieldset className="border border-gray-200 rounded-lg p-4">
                <legend className="font-medium text-lg mb-2 text-primary">
                  Required Documents
                </legend>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Valid passport",
                    "Visa application form",
                    "Recent passport-sized photograph",
                    "National Identity Card",
                  ].map((doc) => (
                    <label
                      key={doc}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <input
                        type="checkbox"
                        name="requiredDocuments"
                        defaultChecked={selectedVisa?.requiredDocuments?.includes(
                          doc
                        )}
                        value={doc}
                        className="checkbox checkbox-accent"
                      />
                      {doc}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="mt-6 flex justify-end col-span-2 text-end gap-2">
              <button
                type="button"
                className="py-2 px-6 text-lg bg-gray-500 text-white rounded-lg"
                onClick={() =>
                  document.getElementById(`modal-${selectedVisa._id}`).close()
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-6 text-lg bg-green-600 text-white rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyAddedVisas;
