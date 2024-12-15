/* eslint-disable react/prop-types */
const SctionTitle = ({ title, subTitle }) => {
  return (
    <div className="bg-primary py-16 text-center">
      <h2 className="text-4xl text-gray-700 font-extrabold mb-3">{title}</h2>
      <h3 className="text-gray-700">{subTitle}</h3>
    </div>
  );
};

export default SctionTitle;
