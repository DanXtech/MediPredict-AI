import Header from '../components/Header';
import HeaderBg from "../assets/HeaderBg.png";
// import DoctorImage from "../assets/HomeDescription.png"; // Replace with actual image path
import DoctorImage from "../assets/HomeDescription.svg"; // Replace with actual image path
import LabImage from "../assets/lab.png"; // Replace with actual image path
import Feature from '../ui/Feature';
import Transforming from '../ui/Transforming';
import Integrationdes from '../ui/Integrationdes';
import GetStarted from '../ui/GetStarted';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
     <div
      style={{
        backgroundImage: `url(${HeaderBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className="lg:h-screen w-full  relative"
    >
      {/* Overlay (now behind content) */}
      <div className="absolute inset-0 h-full w-full bg-[#2C7A7B]/50"></div>

      {/* Header (ensured it's above overlay) */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 lg:px-16 px-4 pt-5 pb-5 md:pt-20" id='home'>
        <div className="flex flex-col md:flex-row lg:items-center gap-8">
          {/* Left Content Section */}
          <div className="flex-1 space-y-6 text-white pt-20 lg:pt-0">
            <div className="inline-flex items-center gap-2 bg-[#FFDADA] shadow-lg text-[#FF4747] px-4 py-2 rounded-full"
             data-aos="fade-right"
            data-aos-delay="300"
            >
              <div className="w-4 h-4 bg-[#FF4747] rounded-full"></div>
              <span className="font-medium">AI-Powered Healthcare</span>
            </div>

            <h1 className="text-2xl md:text-5xl font-semibold lg:font-bold leading-tight"
             data-aos="fade-right"
             data-aos-delay="300"
            >
              Intelligent Healthcare Predictions with FHIR Integration
            </h1>

            <p className="text-lg max-w-xl text-white/90"
             data-aos="fade-right"
             data-aos-delay="300"
            >
              Transform patient care with AI-powered risk assessment and smart recommendations, seamlessly integrated with your existing healthcare systems.
            </p>

            <Link 
             data-aos="fade-right"
             data-aos-delay="300"
            to="/registration" className="bg-white  text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-600  hover:text-white duration-700 shadow-lg cursor-pointer transition-colors">
              Register Medication
            </Link>
          </div>

          {/* Right Images Section */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square"
             data-aos="fade-up"
             data-aos-delay="300"
            >
              {/* Main doctor image */}
              <div className="absolute right-0 top-0 w-full lg:w-4/5 lg:h-4/5 rounded-tl-[350px] rounded-tr-[350px] overflow-hidden bg-white shadow-lg border-[16px] border-white">
                <img 
                  src={DoctorImage}
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small lab image */}
              <div className="absolute left-0 bottom-10  w-[150px] lg:w-[300px] rounded-2xl overflow-hidden shadow-lg animate-bounce">
                <img 
                  src={LabImage}
                  alt="Laboratory analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      
      </main>
    </div>

    <Feature/>
    <Transforming/>
    <Integrationdes/>
    <GetStarted/>
    <Footer/>
    </section>
   
  );
};

export default Home;