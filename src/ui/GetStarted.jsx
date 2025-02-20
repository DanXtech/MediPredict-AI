import { Link } from "react-router-dom"

const GetStarted = () => {
  return (
    <section className=" bg-[#285E61] lg:mt-20" id="medication"
    data-aos="fade-in"
    data-aos-delay="300"
    >
        <div className="flex items-center justify-center text-center lg:h-[100vh] py-10 px-5">
            <div className="space-y-5">
                <h3 className="text-2xl md:text-5xl font-semibold lg:font-bold leading-tight text-white"
                 data-aos="fade-right"
                 data-aos-delay="400"
                >Ready to Transform Your Healthcare <br className="hidden lg:block" /> Practice?</h3>
                <p className="text-lg text-white"
                 data-aos="fade-right"
                  data-aos-delay="400"
                >Join healthcare providers who are already using MediPredict AI to improve <br className="hidden lg:block" /> patient outcomes and optimize their  practice.</p>
                <Link
                to="/registration"
                 data-aos="fade-right"
                 data-aos-delay="400"
                className="bg-white  text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-600 hover:text-white duration-700 shadow-lg cursor-pointer transition-colors">Get Started Now</Link>
            </div>
        </div>
    </section>
  )
}

export default GetStarted