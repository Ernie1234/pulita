import { Button } from "../components";

function Contact() {
  return (
    <div className="container mx-auto lg:py-16 px-4 md:px-16 lg:px-28 flex flex-col justify-center items-center">
      <div className="bg-white rounded-sm md:rounded-md lg:rounded-lg w-11/12 md:w-6/12 lg:w-5/12 p-3 md:p-5 lg:p-8 shadow-sm md:shadow-md lg:shadow-lg">
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-900/90 text-left pb-2 md:pb-4 lg:pb-6 ">
          Get in Touch
        </h3>
        <div className="mb-2 md:mb-4 lg:mb-6 text-gray-600">
          <p>
            Explore our{" "}
            <span className="text-blue-400 hover:text-blue-500 cursor-pointer">
              Help Docs
            </span>{" "}
            or
          </p>
          <p>Contact our Team</p>
          <hr className="bg-red-400 w-6 md:w-8 lg:w-10 h-[0.15rem] mt-2" />
        </div>
        <form className="flex flex-col gap-1 md:gap-2">
          <input
            required
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-white border-gray-950 border rounded-sm md:rounded-md lg:rounded-lg p-3"
          />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email Address*"
            className="w-full bg-white border-gray-950 border rounded-sm md:rounded-md lg:rounded-lg p-3"
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Message"
            className="w-full bg-white border-gray-950 border rounded-sm md:rounded-md lg:rounded-lg p-3 mb-3"
          />

          <Button title="Send" />
        </form>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-8 lg:gap-12  mt-5 md:mt-8 lg:mt-12  text-gray-600">
        <p className="w-11/12 md:w-6/12 lg:w-4/12">
          Industrial Zone, Bohai Road, Zhujiang Street, Binhai Economic and
          Technology Development District, Weifang City, China
        </p>
        <div className=" flex flex-col text-left gap-1">
          <p>+86 186 7806 0186</p>
          <p>+86 532 8163 7155</p>
          <p>sales@pulitaenergy.com</p>
          <p>+86 186 7806 0186</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
