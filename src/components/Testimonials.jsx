import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Memories That Will Last Forever",
      text: "I cannot express enough how satisfied I am with the web development services provided by Egens Lab from the initial.",
      name: "Jordan Moriah",
      role: "Founder, Travel Lab",
      image: "https://i.ibb.co.com/5hBxrBp/1.webp",
    },
    {
      title: "Journey Beautiful Indonesia",
      text: "I cannot express enough how satisfied I am with the web development services provided by Egens Lab from the initial.",
      name: "Liam Nohkan",
      role: "CEO, TourXpro",
      image: "https://i.ibb.co.com/v1HZc3v/2.jpg",
    },
    {
      title: "Cultural Immersion at Its Best",
      text: "I cannot express enough how satisfied I am with the web development services provided by Egens Lab from the initial.",
      name: "Jon Mark",
      role: "Founder, Tourio",
      image: "https://i.ibb.co.com/C14m0j4/3.jpg",
    },
    {
      title: "An Unforgettable Adventure",
      text: "The services provided were exceptional, and the team ensured everything was seamless from start to finish.",
      name: "Sophia Carter",
      role: "Blogger, ExploreTheWorld",
      image: "https://i.ibb.co.com/nkv6Lrg/4.jpg",
    },
    {
      title: "A Seamless Travel Experience",
      text: "The professionalism and commitment of the team made my travel experience smooth and stress-free.",
      name: "Michael Bennett",
      role: "CEO, WanderPro",
      image: "https://i.ibb.co.com/xq1jRJk/5.webp",
    },

    {
      title: "Discovering Hidden Gems",
      text: "Thanks to the expert guidance, I discovered places I never knew existed and will cherish forever.",
      name: "Samantha Blake",
      role: "Travel Influencer, HiddenPaths",
      image: "https://i.ibb.co.com/721HR8J/6.jpg",
    },

    {
      title: "Stress-Free Group Travel",
      text: "Organizing group tours became a breeze, and everything was flawlessly executed.",
      name: "Ethan Green",
      role: "Founder, GroupGo",
      image: "https://i.ibb.co.com/YdHG2pb/7.jpg",
    },

    {
      title: "Authenticity in Every Journey",
      text: "Authentic experiences and local insights made my trip unforgettable.",
      name: "Clara Johnson",
      role: "Content Creator, TravelVistas",
      image: "https://i.ibb.co.com/CmrkZh8/8.jpg",
    },

    {
      title: "Perfect Planning from Start to End",
      text: "Every detail was meticulously planned, ensuring a hassle-free and enjoyable trip.",
      name: "David Roberts",
      role: "CEO, ExploreWorldly",
      image: "https://i.ibb.co.com/4VPrPC1/9.jpg",
    },

    {
      title: "Exceptional Support Throughout",
      text: "The support team was always available and went above and beyond to make my trip seamless.",
      name: "Jessica Lane",
      role: "Founder, TravelEase",
      image: "https://i.ibb.co.com/mTDght2/10.jpg",
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
                    ★ ★ ★ ★ ★
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
