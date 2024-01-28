import { sliderImg } from "../libs/data";
import Carousel from "./Carousel";

function Jumbotron() {
  return (
    <div className="flex flex-col md:flex-row px-3 py-2 md:py-4 md:px-8 lg:py-10 lg:px-28 bg-blue-900">
      <div className="flex-1 flex flex-col items-left justify-center text-white">
        <h1 className="text-5xl font-semibold uppercase text-wrap">
          <div className="p-4">healthy</div>
          <div className="bg-red-600 p-4 w-fit">energy drives</div>
          <div className="p-4"> a better life</div>
        </h1>
        <p className="w-9/12 text-sm md:text-base lg:text-[1.1rem] tracking-wider pt-6">
          MANUFACTURERS SPECIALIZED IN NATURAL GAS GENERATOR SET, BIO GAS
          GENERATOR SET, LPG GENERATOR SET, BIOMASS GASIFIER SYSTEM.
        </p>
      </div>
      <div className="w-full flex-1">
        <Carousel autoSlide autoSliderInterval={5000}>
          {sliderImg.map((s) => (
            <img
              key={s.id}
              src={s.imgUrl}
              alt={s.imgUrl}
              className="object-contain"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Jumbotron;
