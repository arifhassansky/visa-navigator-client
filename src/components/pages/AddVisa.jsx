import { toast } from "react-toastify";
import SectionTitle from "../SctionTitle";
import { useContext } from "react";
import { authContext } from "../../authProvider/AuthProvider";
import { imageUpload } from "../../utils/ImageBBUpload";
const AddVisa = () => {
  const { user } = useContext(authContext);

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = parseInt(form.fee.value);
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const description = form.description.value;
    const email = user.email;

    const requiredDocuments = Array.from(form.elements["requiredDocuments"])
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const countryPhoto = await imageUpload(image);

    const visaDetails = {
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
      email,
    };
    fetch(`${import.meta.env.VITE_URL}/addVisa`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result?.insertedId) {
          toast.success("Visa Added Succesfully..!");
        }
      });
  };

  return (
    <div className="mt-20">
      <div className="pt-3">
        <SectionTitle
          title="Add Visa Details"
          subTitle="Simplify visa management by adding essential visa information here."
        />
      </div>
      <div className="w-11/12 mx-auto my-16">
        <form
          onSubmit={handleForm}
          className="md:grid md:grid-cols-2 space-y-4 md:space-y-0 gap-6 lg:w-2/3 mx-auto border rounded-lg shadow-lg px-4 md:px-10 py-8"
        >
          <h2 className="col-span-2 text-2xl font-semibold text-center text-primary mb-4">
            Add Your Visa Details Here
          </h2>

          <div>
            <label className="font-medium text-lg block mb-2">
              Country Photo
            </label>
            <input
              type="file"
              name="image"
              placeholder="Enter Your Country Photo URL"
              className="file-input file-input-success w-full"
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
              placeholder="Enter Your Country Name"
              className="input input-bordered input-accent w-full rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-medium text-lg block mb-2">Visa Type</label>
            <select
              name="visaType"
              className="input input-bordered input-accent w-full rounded-lg"
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
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <div className="col-span-2">
            <fieldset className="border border-gray-200 rounded-lg p-4">
              <legend className="font-medium text-lg mb-2 text-primary">
                Required Documents
              </legend>
              <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
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
                      value={doc}
                      className="checkbox checkbox-accent"
                    />
                    {doc}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            className="col-span-2 btn bg-primary text-white py-3 rounded-lg hover:bg-secondary"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
