import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { certificate } from "../libs/data";

function Horizontal() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-28 mb-8">
      <h3 className="font-light text-center p-2 md:p-4 lg:p-6 tracking-[.7rem] md:tracking-[1.3rem] lg:tracking-[1.7rem] underline decoration-1">
        certification
      </h3>
      <div className="relative flex items-center">
        <div
          className="p-4 mr-3 bg-white/50 hover:bg-white shadow-sm md:shadow-md lg:shadow-lg rounded-full"
          onClick={() => slideLeft()}
        >
          <FaChevronLeft />
        </div>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth"
        >
          {certificate.map((item) => (
            <img
              key={item.id}
              src={item.imgUrl}
              alt={item.imgUrl}
              loading="lazy"
              id="cert"
              className="w-[330px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            />
          ))}
        </div>
        <div
          className="p-4 ml-3 bg-white/50 hover:bg-white shadow-sm md:shadow-md lg:shadow-lg rounded-full"
          onClick={() => slideRight()}
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Horizontal;
