function WhoWeAre() {
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-28 mb-8">
      <h3 className="font-light text-center p-2 md:p-4 lg:p-6 tracking-[.7rem] md:tracking-[1.3rem] lg:tracking-[1.7rem] underline decoration-1">
        Who We Are
      </h3>
      <div className="flex flex-col gap-5 md:gap-8 lg:gap-16">
        <p className="bg-amber-950/10 p-5 md:p-10 lg:p-16 text-lg md:text-xl lg:text-2xl">
          Welcome to Pulita Energy, your trusted source for cutting-edge power
          solutions. We specialize in manufacturing natural gas, bio gas, and
          LPG generator sets, along with biomass gasifier systems. Our
          commitment to innovation, reliability, and sustainability ensures that
          our products meet the diverse energy needs of industries worldwide.
        </p>
        <div className="bg-amber-950/10 p-5 md:p-10 lg:p-16 text-lg md:text-xl lg:text-2xl">
          <p className="font-bold pb-2">Key Offerings:</p>
          <p>
            1. Natural Gas Generator Sets: Efficient and reliable power
            generation.
          </p>
          <p>
            2. Bio Gas Generator Sets: Harness sustainable energy from organic
            waste.
          </p>
          <p>3. LPG Generator Sets: Versatile and clean energy solutions.</p>
          <p>
            4. Biomass Gasifier Systems: Convert biomass into clean, usable gas
            for power generation.
          </p>
        </div>
        <div className="bg-amber-950/10 p-5 md:p-10 lg:p-16 text-lg md:text-xl lg:text-2xl">
          <p className="font-bold pb-2">Why Choose Us?</p>
          <ul className="list-disc pl-5">
            <li>
              Cutting-Edge Technology: Stay ahead with our advanced solutions.
            </li>
            <li>
              Reliability and Performance: Engineered for consistent, efficient
              power.
            </li>
            <li>
              Environmental Sustainability: Contribute to a greener planet.
            </li>
            <li>
              Customized Solutions: Tailored to your specific requirements.
            </li>
            <li>Global Reach: Trusted worldwide for quality and compliance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
