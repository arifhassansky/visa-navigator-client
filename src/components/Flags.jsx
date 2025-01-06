import Marquee from "react-fast-marquee";

const Flags = () => {
  return (
    <div className="mt-10 mb-20">
      <Marquee pauseOnHover gradient={false} speed={60} className="space-x-8">
        <div className="flex justify-center items-center gap-6">
          <img
            className="h-16"
            src="https://i.ibb.co.com/ckmC7Nj/Flag-of-Kenya-svg.png"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/cQYNTcP/Flag-of-India-svg.png"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/KwRndH1/Flag-Germany.webp"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/1bHs3hD/Flag-of-Egypt-svg.png"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/cTQT5rs/Flag-of-the-People-s-Republic-of-China-svg.webp"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/KhzS7m9/Flag-of-Canada-Pantone-svg.png"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/8sd39Dn/Flag-of-Australia-converted-svg.webp"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/3S53X8T/Flag-of-Argentina-svg.webp"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/DMnpCDM/Flag-of-Brazil-svg.png"
          />
          <img
            className="h-16"
            src="https://i.ibb.co.com/chm78j0/Flag-of-Bangladesh-svg.webp"
          />
          <img className="h-16" src="https://i.ibb.co.com/hX8vCC0/hong.png" />
          <img
            className="h-16"
            src="https://i.ibb.co.com/9yGkBv9/Flag-of-Sweden-svg.png"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Flags;
