import { achievement } from "../libs/data";

function Achievements() {
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-28 mb-8">
      <h3 className="font-light text-center p-2 md:p-4 lg:p-6 tracking-[.7rem] md:tracking-[1.3rem] lg:tracking-[1.7rem] underline decoration-1 capitalize">
        achievements
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-9">
        {achievement.map((achieve) => (
          <div key={achieve.id} className="w-full">
            <img
              src={achieve.imgUrl}
              alt={achieve.title}
              className="object-cover"
            />
            <p className="pt-2 md:pt-4 lg:pt-6">{achieve.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
