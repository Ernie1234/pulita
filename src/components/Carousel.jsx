import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({
  children: sliderImg,
  autoSlide = true,
  autoSliderInterval = 3000,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prev = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? sliderImg.length - 1 : currentSlide - 1
    );
  };
  const next = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === sliderImg.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const sliderInterval = setInterval(next, autoSliderInterval);
    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderImg}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow-md bg-white/80 hover:bg-white text-gray-800"
        >
          <FaChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow-md bg-white/80 hover:bg-white text-gray-800"
        >
          <FaChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center items-center gap-2">
          {sliderImg.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-white rounded-full ${
                currentSlide === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.node,
  autoSlide: PropTypes.bool,
  autoSliderInterval: PropTypes.number,
};

export default Carousel;
