import { Check } from "lucide-react";
import DoctorsWearing from "../assets/doctors-wearing-simulation-with-hologram-medical-technology.png";
import genBodyImg from "../assets/genBody.png";
import { IntegrationItem } from "../Data";
import { Link } from "react-router-dom";

const Integrationdes = () => {
  return (
    <section className="" id="recommendations">
      <div className="flex flex-col lg:flex-row gap-10 lg:px-16 px-5 py-20">
        <div
          className="flex-1 relative"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img src={DoctorsWearing} className="rounded-2xl" alt="" />
          <img
            src={genBodyImg}
            className="absolute right-0 -bottom-[100px] w-[300px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl hidden lg:block"
            alt=""
          />
        </div>

        <div className="flex-1">
          <h3
            className="text-2xl lg:text-3xl pb-3 font-bold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Seamless FHIR Integration and{" "}
            <span className="text-green-600">Doctor Recommendations</span>
          </h3>
          <p className="lg:text-xl" data-aos="fade-up" data-aos-delay="300">
            MediPredict AI integrates smoothly with your existing healthcare
            systems using SMART on FHIR standards. Get up and running quickly
            with our comprehensive integration support.
          </p>
          {IntegrationItem.map((item, index) => (
            <ul key={index}>
              <li
                className="flex items-center my-5  gap-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Check className="w-6 p-1 text-white font-bold bg-[#1C274C] rounded-[5px] shadow-lg" />
                <span className="text-black text-xl ">{item.title}</span>
              </li>
            </ul>
          ))}

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-2xl font-semibold mb-3">
              Here is the Doctor Recommendation Report
            </h2>
            <Link to={'/recommendations'}
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors"
            >
              View Report Recommendations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrationdes;
