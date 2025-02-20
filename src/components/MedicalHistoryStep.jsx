
import { AlertCircle, LucideBriefcaseMedical } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const MedicalHistoryStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="space-y-4">
       <div className="flex items-center gap-2">
       <div className="bg-green-400 inline-block p-2 rounded-full shadow-sm">
       <LucideBriefcaseMedical size={20} className=" text-white font-bold"/>
       </div>
        <h2 className="text-2xl font-bold ">
        Medical history
       </h2>
       </div>
            <div>
                <label className="block text-sm font-medium mb-1">Pre-existing Conditions</label>
                {["Diabetes", "Hypertension", "None"].map((condition) => (
                    <label key={condition} className="flex items-center">
                        <input
                            type="checkbox"
                            name="preExistingConditions"
                            value={condition}
                            checked={formData.preExistingConditions.includes(condition)}
                            onChange={(e) => {
                                const updatedConditions = e.target.checked
                                    ? [...formData.preExistingConditions, condition]
                                    : formData.preExistingConditions.filter((c) => c !== condition);
                                setFormData({ ...formData, preExistingConditions: updatedConditions });
                            }}
                            className="form-checkbox text-cyan-600 rounded"
                        />
                        <span className="ml-2">{condition}</span>
                    </label>
                ))}
                {errors.preExistingConditions && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.preExistingConditions}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Past Surgeries</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.pastSurgeries}
                    onChange={(e) => setFormData({ ...formData, pastSurgeries: e.target.value })}
                />
                {errors.pastSurgeries && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.pastSurgeries}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Current Medications</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.currentMedication}
                    onChange={(e) => setFormData({ ...formData, currentMedication: e.target.value })}
                />
                {errors.currentMedication && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.currentMedication}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Allergies</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                />
                {errors.allergies && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.allergies}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Family History</label>
                {["Heart Disease", "None"].map((history) => (
                    <label key={history} className="flex items-center">
                        <input
                            type="checkbox"
                            name="familyHistory"
                            value={history}
                            checked={formData.familyHistory.includes(history)}
                            onChange={(e) => {
                                const updatedHistory = e.target.checked
                                    ? [...formData.familyHistory, history]
                                    : formData.familyHistory.filter((h) => h !== history);
                                setFormData({ ...formData, familyHistory: updatedHistory });
                            }}
                            className="form-checkbox text-cyan-600 rounded"
                        />
                        <span className="ml-2">{history}</span>
                    </label>
                ))}
                {errors.familyHistory && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.familyHistory}</p>}
            </div>
        </div>
    );
};

MedicalHistoryStep.propTypes = {
    formData: PropTypes.shape({
      preExistingConditions: PropTypes.arrayOf(PropTypes.string).isRequired,
      pastSurgeries: PropTypes.string.isRequired,
      currentMedication: PropTypes.string.isRequired,
      allergies: PropTypes.number.isRequired,
      familyHistory: PropTypes.string.isRequired,
      
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      preExistingConditions: PropTypes.string,
      pastSurgeries: PropTypes.string,
      currentMedication: PropTypes.string,
      allergies: PropTypes.number,
      familyHistory: PropTypes.string,
    }).isRequired,
  };

export default MedicalHistoryStep;