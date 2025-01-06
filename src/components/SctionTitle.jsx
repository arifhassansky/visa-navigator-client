/* eslint-disable react/prop-types */
const SctionTitle = ({ title, subTitle }) => {
  return (
    <div className="bg-primary text-black py-16 text-center">
      <h2 className="text-4xl font-extrabold mb-3">{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
};

export default SctionTitle;
