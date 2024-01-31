import { Link } from "react-router-dom";
import Button from "../components/Button";
import { service } from "../libs/data";

function Service() {
  return (
    <div className="container mx-auto lg:py-16 px-4 md:px-16 lg:px-28 mb-8">
      <div className="w-full flex gap-3 md:gap-6 lg:gap-16">
        <div className="w-3/5 flex flex-col gap-5 md:gap-8 lg:gap-16 pt-6">
          <div className="flex flex-col gap-2 md:gap-5 lg:gap-8">
            <h4 className="bg-gray-200  hover:bg-blue-950 hover:text-gray-100 p-2 md:p-3 lg:p-4 font-bold uppercase text-xl w-fit">
              quality insurance
            </h4>
            <p className="text-base md:text-lg text-justify">
              For each category generator provided in our company, all can share
              12 months or 1500 work hours maintenance. All the troubles arose
              from the structure defect, we guarantee to repair. Otherwise, we
              dont provide quality insurance such as wearing parts, daily
              consumable parts, wrong man - made operation and maintenance
              ignorance
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 lg:gap-8">
            <h4 className="bg-gray-200  hover:bg-blue-950 hover:text-gray-100 p-2 md:p-3 lg:p-4 font-bold uppercase text-xl w-fit">
              before sale service
            </h4>
            <p className="text-base md:text-lg text-justify">
              Presale free charge: burden capacity analysis, category selection,
              technology consultation, assistance with machinery room
              collocation and advice for facilities installation
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 lg:gap-8">
            <h4 className="bg-gray-200  hover:bg-blue-950 hover:text-gray-100 p-2 md:p-3 lg:p-4 font-bold uppercase text-xl w-fit">
              sale service
            </h4>
            <p className="text-base md:text-lg text-justify">
              For helping customers to master the operation, usage and the
              maintenance correctly, Our company in particular provide free sire
              and training courses of different types of generators
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 lg:gap-8">
            <h4 className="bg-gray-200  hover:bg-blue-950 hover:text-gray-100 p-2 md:p-3 lg:p-4 font-bold uppercase text-xl w-fit">
              after sale service
            </h4>
            <p className="text-base md:text-lg text-justify">
              Our company attachs great importance to after sale-service, the
              user to establish a computer archive, tracking services, regular
              inspection services. Maintenance center with a rapid response
              management system, when we receive a notification from customers,
              we will assist to solve the trouble within 1 hours. if fail, our
              after-sale service department will arrange people from the nearest
              maintenance point to help solve. Any customer{`'`}s complaints
              about quality, we ill strictly follow the principle to gice
              customers a satisfying answer in the shortest time
            </p>
          </div>
          <Link to="/contact">
            <Button title="Contact us" />
          </Link>
        </div>
        <div className="w-2/5 flex flexrow md:flex-col overflow-x-scroll md:overflow-y-scroll">
          {service.map((serve) => (
            <img
              key={serve.id}
              src={serve.imgUrl}
              alt={serve.imgUrl}
              className="object-fill"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
