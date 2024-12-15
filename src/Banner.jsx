import { useState } from "react";

const Banner = () => {
  const images = [
    {
      id: 1,
      image1: "https://i.ibb.co.com/9sQ9xdY/hindi3.jpg",
      image2: "https://i.ibb.co.com/FXT76bh/indian.png",
      name: "GO INDIA",
      title: "Explore Visa Options for India",
      quote:
        "Discover India's diverse visa types, including tourist, student, and business visas, to experience the cultural richness and heritage of the country.",
    },
    {
      id: 2,
      image1: "https://i.ibb.co.com/bRMfnhY/soudi-arabia.jpg",
      image2: "https://i.ibb.co.com/S7rNnnb/arabic-flag.png",
      name: "GO SAUDI ARABIA",
      title: "Visa Requirements for Saudi Arabia",
      quote:
        "Easily apply for Saudi Arabian visas, including work, tourist, and pilgrimage visas. Our guide simplifies your journey to this historic and thriving country.",
    },
    {
      id: 3,
      image1: "https://i.ibb.co.com/WBmKLjg/france.jpg",
      image2: "https://i.ibb.co.com/2K08tLt/franch-flag.png",
      name: "GO FRANCE",
      title: "Your Pathway to France – Visa Simplified",
      quote:
        "Learn about the different visa options for France, from studying to tourism, and take the first step toward experiencing the country's art, culture, and cuisine.",
    },
    {
      id: 4,
      image1: "https://i.ibb.co.com/Hr62Mvh/pakistan.jpg",
      image2: "https://i.ibb.co.com/RHH3phJ/pakistan.png",
      name: "GO PAKISTAN",
      title: "Visa Solutions for Pakistan",
      quote:
        "Unlock the world of opportunities in Pakistan with visa options for business, tourism, or family visits. Let us guide you through the process for a smooth experience.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Go to the next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden flex justify-center items-center">
      {images.map((item, itemIndex) => {
        const { id, image1, image2, name, title, quote } = item;

        return (
          itemIndex === index && (
            <div
              key={id}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out"
            >
              <img
                src={image1}
                alt={name}
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="space-y-4 px-6">
                <h3 className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-4">
                  {name}
                  <img
                    className="w-16 h-16 rounded-full"
                    src={image2}
                    alt={`${name} flag`}
                  />
                </h3>
                <h4 className="text-xl md:text-2xl font-light">{title}</h4>
                <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {quote}
                </p>
              </div>
            </div>
          )
        );
      })}

      {/* Arrow buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
      >
        &gt;
      </button>
    </section>
  );
};

export default Banner;
