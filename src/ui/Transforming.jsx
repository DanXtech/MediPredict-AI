import TransformBg from "../assets/Transforming.png"
import { TransformData } from "../Data"
const Transforming = () => {
  return (
    <section
    style={{
        backgroundImage: `url(${TransformBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}
    className="lg:h-[100vh] w-full relative my-10" id="transforming">
        <div className="absolute inset-0 h-full w-full bg-[#2C7A7B]/50"></div>
        <div className=" relative z-10 flex items-center justify-center lg:h-[100vh] py-16">
           <div className="lg:px-16 px-5">
           <div className="text-center pb-10"
            data-aos="fade-right"
            data-aos-delay="400"
           >
                <h2 className="text-2xl md:text-4xl font-bold text-white text-left lg:text-center lg:mb-4">Why Choose MediPredict <br className="block lg:hidden" /> AI</h2>
                <p className="text-white max-w-2xl lg:text-xl mx-auto pt-2 text-left lg:text-center">Transforming healthcare with intelligent predictions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                     {TransformData.map((feature, index) => (
                       <div 
                         key={index}
                          data-aos="fade-up"
                          data-aos-delay="400"
                         className="bg-transparent px-5 py-10 rounded-[40px]  border border-[#ffffff] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:border-[#2ABBBD] hover:scale-105 cursor-pointer"
                       >
                         <div className="flex ite justify-center mb-5">
                           {/* <feature.icon size={32} strokeWidth={1.5} /> */}
                           <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
                         </div>
                         <h3 className="text-white font-semibold text-xl py-3 text-center">
                           {feature.title}
                         </h3>
                         <p className="text-white leading-relaxed text-center">
                           {feature.description}
                         </p>
                       </div>
                     ))}
            </div>
           </div>
        </div>
    </section>

  )
}

export default Transforming