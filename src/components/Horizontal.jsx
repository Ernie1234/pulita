import { certificate } from "../libs/data";

function Horizontal() {
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-28 mb-8">
      <h3 className="font-light text-center p-2 md:p-4 lg:p-6 tracking-[.7rem] md:tracking-[1.3rem] lg:tracking-[1.7rem] underline decoration-1">
        certification
      </h3>
      <div className="relative flex items-center">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {certificate.map((item) => (
            <img
              key={item.id}
              src={item.imgUrl}
              alt={item.imgUrl}
              className="w-[330px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Horizontal;
