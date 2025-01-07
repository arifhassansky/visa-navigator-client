import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Hassle-Free Visa Application Process",
      text: "Visa Navigator made applying for my visa so easy! The step-by-step instructions and online application were seamless.",
      name: "Surela Akter",
      role: "Founder, Travel Lab",
      image: "https://i.ibb.co/Cw6nq3F/surela.jpg",
      rating: "★ ★ ★ ★ ★",
    },
    {
      title: "Quick and Reliable Service",
      text: "I was impressed by how quickly Visa Navigator processed my visa application. Highly recommended for frequent travelers!",
      name: "Bristy Akter",
      role: "CEO, TravelX",
      image: "https://i.ibb.co/ZzhDBd0/bristy.jpg",
      rating: "★ ★ ★ ★ ",
    },
    {
      title: "Accurate Visa Requirement Details",
      text: "I found all the information I needed about visa requirements for multiple countries in one place. A lifesaver!",
      name: "Arif Hassan",
      role: "Founder, Nedpro",
      image: "https://i.ibb.co/8dphcXj/IMG-5483-01.jpg",
      rating: "★ ★ ★ ★ ",
    },
    {
      title: "Excellent Customer Support",
      text: "The team was very responsive and guided me through the process whenever I had questions. Highly satisfied!",
      name: "Irfan Khan",
      role: "Blogger, ExploreTheWorld",
      image:
        "https://i.ibb.co/gFg88Xt/470175899-1674601013099659-7328407391152462961-n.jpg",
      rating: "★ ★ ★ ★ ★",
    },
    {
      title: "Stress-Free Visa Tracking",
      text: "The visa tracking feature gave me real-time updates, making the entire process stress-free.",
      name: "Nabila Jahan",
      role: "CEO, DressBD",
      image: "https://i.ibb.co/NKTdQgy/vabi.jpg",
      rating: "★ ★ ★ ★ ★",
    },
    {
      title: "Comprehensive Visa Guidelines",
      text: "The detailed guidelines helped me avoid mistakes in my application. The portal is very user-friendly.",
      name: "Rabbi",
      role: "Influencer, HiddenPaths",
      image: "https://i.ibb.co/XJjMLW5/rabby.jpg",
      rating: "★ ★ ★ ",
    },
    {
      title: "Smooth Group Visa Applications",
      text: "Visa Navigator made it easy to manage group visa applications efficiently. Highly recommend it for travel agencies.",
      name: "Jahid Hasan",
      role: "Founder, GroupGo",
      image: "https://i.ibb.co/Mk8jDmF/jahid.jpg",
      rating: "★ ★ ★ ★ ★",
    },
    {
      title: "User-Friendly Interface",
      text: "The portal's simple and clean interface made finding and applying for a visa a breeze.",
      name: "Sakib",
      role: "Owner, TravelVistas",
      image: "https://i.ibb.co/yqyP4xg/sakub.jpg",
      rating: "★ ★ ★ ★ ",
    },
    {
      title: "Flawless Application Process",
      text: "I had a great experience using Visa Navigator. Every step was well-documented and easy to follow.",
      name: "Tanzim Tabassum",
      role: "CEO, ExploreWorldly",
      image: "https://i.ibb.co/v3DXs9C/tanzim.jpg",
      rating: "★ ★ ★ ★ ★",
    },
    {
      title: "Exceptional Service",
      text: "The team went above and beyond to make my visa application process smooth and successful. Fantastic service!",
      name: "Jannatul Dua",
      role: "Founder, TravelEase",
      image: "https://i.ibb.co/8DwG0R3/dua.jpg",
      rating: "★ ★ ★ ★ ",
    },
  ];

  return (
    <section className="pb-16 px-4 text-center">
      <h2 className="text-5xl md:text-6xl h-16 font-bold mt-4 font-secondary">
        <Typewriter
          words={["Travelers Say About Us"]}
          loop
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <p className="mt-4 text-gray-400">
        Unveiling the Stories of Unforgettable Journeys: Hear What Our Travelers
        Have to Say About <br className="hidden lg:block" /> their Life-Changing
        Adventures and Experiences with Us.
      </p>

      <div className="mt-16">
        <Marquee pauseOnHover gradient={false} speed={40}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 h-80 w-80 rounded-lg shadow-md border text-center mx-4 flex flex-col justify-between flex-grow"
            >
              <div>
                <div className="mb-4 flex justify-center">
                  <span className="text-yellow-400 text-lg font-semibold">
                    {testimonial.rating}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{testimonial.title}</h3>
                <p className="mt-2">{testimonial.text}</p>
              </div>
              <div className="flex items-center justify-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
                />
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
