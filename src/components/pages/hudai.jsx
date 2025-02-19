<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {myAddedVisas?.map((application) => (
    <div
      key={application._id}
      className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300"
    >
      <div className="relative">
        <img
          src={application.countryPhoto}
          alt={application.countryName}
          className="w-full h-48 sm:h-56 object-cover rounded-t-2xl hover:scale-105 transition duration-500"
        />
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white bg-black bg-opacity-60 p-2 rounded-lg shadow-lg">
          {application.countryName}
        </h3>
      </div>

      <div className="space-y-4 p-6">
        <p className="text-lg">
          <strong className="text-teal-600">Visa Type:</strong>{" "}
          {application.visaType}
        </p>
        <p className="text-lg">
          <strong className="text-teal-600">Processing Time:</strong>{" "}
          {application.processingTime}
        </p>
        <p className="text-lg">
          <strong className="text-teal-600">Fee:</strong> ${application.fee}
        </p>
        <p className="text-lg">
          <strong className="text-teal-600">Validity:</strong>{" "}
          {application.validity}
        </p>
        <p className="text-lg">
          <strong className="text-teal-600">Application Method:</strong>{" "}
          {application.applicationMethod}
        </p>
      </div>

      <div className="mb-6 space-x-4 flex justify-between px-6">
        <button
          onClick={() => handleUpdateClick(application)}
          className="w-full py-2 text-lg font-semibold bg-green-600 text-white rounded-lg shadow-md transition duration-200 transform hover:scale-105"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(application._id)}
          className="w-full py-2 text-lg font-semibold bg-red-600 text-white rounded-lg shadow-md transition duration-200 transform hover:scale-105"
        >
          Delete
        </button>
      </div>

      {/* Modal for updating visa */}
      <dialog
        id={`modal-${application._id}`}
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
                defaultValue={application.countryPhoto}
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
                defaultValue={application.countryName}
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
                defaultValue={application.visaType}
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
                defaultValue={application.processingTime}
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
                defaultValue={application.ageRestriction}
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
                defaultValue={application.fee}
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
                defaultValue={application.validity}
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
                defaultValue={application.applicationMethod}
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
                defaultValue={application.description}
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
                        defaultChecked={application.requiredDocuments?.includes(
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
                  document.getElementById(`modal-${application._id}`).close()
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
  ))}
</div>;
