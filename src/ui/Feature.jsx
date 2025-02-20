import StarIcon1 from "../assets/Star11.svg"
import StarIcon2 from "../assets/Star22.svg"
import {features} from "../Data";
import {Check} from "lucide-react"
const Feature = () => {

  return (
    <section  className="py-10 lg:py-20 relative " id="features" >
      {/* Background Elements */}
     <div className="hidden lg:block">
     <img src={StarIcon1}
      data-aos="fade-up"
      data-aos-delay="400"
     className="absolute -top-[150px]  left-[0rem] w-[300px] animate-pulse" alt="" />
     <img src={StarIcon2} 
      data-aos="fade-up"
      data-aos-delay="400"
     className="absolute -top-[150px] right-[0rem] w-[300px] animate-pulse" alt="" />
     </div>    
      <div className="lg:px-16 px-5">
        {/* Header */}
        <div className="text-center"
         data-aos="fade-right"
        data-aos-delay="300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-left lg:text-center text-gray-900 lg:mb-4 pt-[2rem]">
            Powerful AI Features
          </h2>
          <p className="text-gray-600 max-w-2xl lg:text-xl mx-auto text-left lg:text-center">
            Advanced capabilities to enhance healthcare decision-making
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 lg:pt-[5em]">
          {features.map((feature, index) => (
            <div 
              key={index}
               data-aos="fade-right"
               data-aos-delay="400"
              className="bg-white/80 backdrop-blur-sm px-5 py-10 rounded-[40px] border border-[#2ABBBD] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:border-[#C05621] hover:scale-105 cursor-pointer"
            >
              <div className="text-cyan-500 mb-3">
                {/* <feature.icon size={32} strokeWidth={1.5} /> */}
                <Check/>
              </div>
              <h3 className="text-gray-900 font-semibold text-xl py-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;