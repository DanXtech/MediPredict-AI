
import { AlignHorizontalDistributeCenter } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const LifestyleStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });


    return (
        <div className="space-y-4">
       <div className="flex items-center gap-2">
       <div className="bg-green-400 inline-block p-2 rounded-full shadow-sm">
       <AlignHorizontalDistributeCenter size={20} className=" text-white font-bold"/>
       </div>
        <h2 className="text-2xl font-bold ">
        Lifestyle & Habits
       </h2>
       </div>
            <div>
                <label className="block text-sm font-medium mb-1">Smoking</label>
                <select
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.smoking}
                    onChange={(e) => setFormData({ ...formData, smoking: e.target.value })}
                >
                    <option value="">Select smoking status</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                {errors.smoking && <p className="text-red-500 text-sm mt-1">{errors.smoking}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Alcohol Consumption</label>
                <select
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.alcoholConsumption}
                    onChange={(e) => setFormData({ ...formData, alcoholConsumption: e.target.value })}
                >
                    <option value="">Select alcohol consumption</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                {errors.alcoholConsumption && <p className="text-red-500 text-sm mt-1">{errors.alcoholConsumption}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Exercise Frequency</label>
                <select
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.exerciseFrequency}
                    onChange={(e) => setFormData({ ...formData, exerciseFrequency: e.target.value })}
                >
                    <option value="">Select exercise frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && <p className="text-red-500 text-sm mt-1">{errors.exerciseFrequency}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Diet Type</label>
                <select
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.dietType}
                    onChange={(e) => setFormData({ ...formData, dietType: e.target.value })}
                >
                    <option value="">Select diet type</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="balanced">Balanced</option>
                </select>
                {errors.dietType && <p className="text-red-500 text-sm mt-1">{errors.dietType}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Sleep Pattern</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.sleepPattern}
                    onChange={(e) => setFormData({ ...formData, sleepPattern: e.target.value })}
                />
                {errors.sleepPattern && <p className="text-red-500 text-sm mt-1">{errors.sleepPattern}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Stress Level</label>
                <select
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.stressLevel}
                    onChange={(e) => setFormData({ ...formData, stressLevel: e.target.value })}
                >
                    <option value="">Select stress level</option>
                    <option value="mild">Mild</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                </select>
                {errors.stressLevel && <p className="text-red-500 text-sm mt-1">{errors.stressLevel}</p>}
            </div>
        </div>
    );
};


LifestyleStep.propTypes = {
    formData: PropTypes.shape({
      smoking: PropTypes.string.isRequired,
      alcoholConsumption: PropTypes.string.isRequired,
      exerciseFrequency: PropTypes.number.isRequired,
      dietType: PropTypes.string.isRequired,
      sleepPattern: PropTypes.string.isRequired,
      stressLevel: PropTypes.string.isRequired,
      
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      smoking: PropTypes.string,
      pastSurgeries: PropTypes.string,
      alcoholConsumption: PropTypes.string,
      exerciseFrequency: PropTypes.number,
      sleepPattern: PropTypes.string,
      dietType: PropTypes.string,
      stressLevel: PropTypes.string,
    }).isRequired,
  };

export default LifestyleStep;