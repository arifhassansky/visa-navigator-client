import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Memories That Will Last Forever",
      text: "I cannot express enough how satisfied I am with the web development services provided by Egens Lab from the initial.",
      name: "Surela Akter",
      role: "Founder, Travel Lab",
      image: "https://i.ibb.co.com/Cw6nq3F/surela.jpg",
      rating: "★ ★ ★ ★ ★",
    },
    {
      title: "Journey Beautiful Indonesia",
      text: "I cannot express enough how satisfied I am with the web development services provided by Egens Lab from the initial.",
      name: "Bristy Akter",
      role: "CEO, TravelX",
      image: "https://i.ibb.co.com/ZzhDBd0/bristy.jpg",
      rating: "★ ★ ★ ★ ",
    },
    {
      title: "Cultural Immersion at Its Best",
      text: "I cannot express enough how satisfied I am with the web development services provided by Egens Lab from the initial.",
      name: "Arif Hassan",
      role: "Founder, Nedpro",
      image: "https://i.ibb.co.com/8dphcXj/IMG-5483-01.jpg",
      rating: "★ ★ ★ ★ ",
    },
    {
      title: "An Unforgettable Adventure",
      text: "The services provided were exceptional, and the team ensured everything was seamless from start to finish.",
      name: "Irfan Khan",
      role: "Blogger, ExploreTheWorld",
      image:
        "https://i.ibb.co.com/gFg88Xt/470175899-1674601013099659-7328407391152462961-n.jpg",
      rating: "★ ★ ★ ★ ★",
    },
    {
      title: "A Seamless Travel Experience",
      text: "The professionalism and commitment of the team made my travel experience smooth and stress-free.",
      name: "Nabila Jahan",
      role: "CEO, DressBD",
      image: "https://i.ibb.co.com/NKTdQgy/vabi.jpg",
      rating: "★ ★ ★ ★ ★",
    },

    {
      title: "Discovering Hidden Gems",
      text: "Thanks to the expert guidance, I discovered places I never knew existed and will cherish forever.",
      name: "Rabbi",
      role: "Travel Influencer, HiddenPaths",
      image: "https://i.ibb.co.com/XJjMLW5/rabby.jpg",
      rating: "★ ★ ★ ",
    },

    {
      title: "Stress-Free Group Travel",
      text: "Organizing group tours became a breeze, and everything was flawlessly executed.",
      name: "Jahid Hasan",
      role: "Founder, GroupGo",
      image: "https://i.ibb.co.com/Mk8jDmF/jahid.jpg",
      rating: "★ ★ ★ ★ ★",
    },

    {
      title: "Authenticity in Every Journey",
      text: "Authentic experiences and local insights made my trip unforgettable.",
      name: "Sakib",
      role: "Owner, TravelVistas",
      image: "https://i.ibb.co.com/yqyP4xg/sakub.jpg",
      rating: "★ ★ ★ ★ ",
    },

    {
      title: "Perfect Planning from Start to End",
      text: "Every detail was meticulously planned, ensuring a hassle-free and enjoyable trip.",
      name: "Tanzim Tabassum",
      role: "CEO, ExploreWorldly",
      image: "https://i.ibb.co.com/v3DXs9C/tanzim.jpg",
      rating: "★ ★ ★ ★ ★",
    },

    {
      title: "Exceptional Support Throughout",
      text: "The support team was always available and went above and beyond to make my trip seamless.",
      name: "Jannatul Dua",
      role: "Founder, TravelEase",
      image: "https://i.ibb.co.com/8DwG0R3/dua.jpg",
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
