import { AlertCircle, Ruler } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const VitalsAndInsuranceStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="space-y-4">
        <div className="flex items-center gap-2">
       <div className="bg-green-400 inline-block p-2 rounded-full shadow-sm">
       <Ruler size={20} className=" text-white font-bold"/>
       </div>
        <h2 className="text-2xl font-bold ">
        Vitals & Measurements
       </h2>
       </div>
            <div>
                <label className="block text-sm font-medium mb-1">Height (cm)</label>
                <input
                    type="number"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                />
                {errors.height && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.height}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                <input
                    type="number"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
                {errors.weight && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.weight}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">BMI</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.bmi}
                    onChange={(e) => setFormData({ ...formData, bmi: e.target.value })}
                />
                {errors.bmi && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.bmi}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Blood Pressure</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.bloodPressure}
                    onChange={(e) => setFormData({ ...formData, bloodPressure: e.target.value })}
                />
                {errors.bloodPressure && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.bloodPressure}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Blood Sugar Level</label>
                <input
                    type="number"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.bloodSugarLevel}
                    onChange={(e) => setFormData({ ...formData, bloodSugarLevel: e.target.value })}
                />
                {errors.bloodSugarLevel && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.bloodSugarLevel}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Cholesterol Level</label>
                <input
                    type="number"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.cholesterolLevel}
                    onChange={(e) => setFormData({ ...formData, cholesterolLevel: e.target.value })}
                />
                {errors.cholesterolLevel && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.cholesterolLevel}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Heart rate</label>
                <input
                    type="number"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.heartRate}
                    onChange={(e) => setFormData({ ...formData, heartRate: e.target.value })}
                />
                {errors.heartRate && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.heartRate}</p>}
            </div>
        </div>
    );
};


VitalsAndInsuranceStep.propTypes = {
    formData: PropTypes.shape({
      height: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      bmi: PropTypes.string.isRequired,
      cholesterolLevel: PropTypes.string.isRequired,
      heartRate: PropTypes.string.isRequired,
      bloodPressure: PropTypes.number.isRequired,
      bloodSugarLevel: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      height: PropTypes.string,
      weight: PropTypes.string,
      bmi: PropTypes.string,
      cholesterolLevel: PropTypes.string,
      heartRate: PropTypes.string,
      bloodPressure: PropTypes.number,
      sleepPattern: PropTypes.string,
      bloodSugarLevel: PropTypes.string,
    }).isRequired,
  };


export default VitalsAndInsuranceStep;