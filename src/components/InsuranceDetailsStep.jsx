import { AlertCircle, BookAudio } from "lucide-react";
import PropTypes from "prop-types";


import { useEffect } from "react";

const InsuranceDetailsStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="space-y-4">
           <div className="flex items-center gap-2">
       <div className="bg-green-400 inline-block p-2 rounded-full shadow-sm">
       <BookAudio size={20} className=" text-white font-bold"/>
       </div>
        <h2 className="text-2xl font-bold ">
        Insurance Details
       </h2>
       </div>
            <div>
                <label className="block text-sm font-medium mb-1">Health Insurance Provider</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.healthInsuranceProvider}
                    onChange={(e) => setFormData({ ...formData, healthInsuranceProvider: e.target.value })}
                />
                {errors.healthInsuranceProvider && <p className="text-red-500 text-sm flex items-center gap-0.5"> <AlertCircle size={14} />{errors.healthInsuranceProvider}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Policy Number</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.policyNumber}
                    onChange={(e) => setFormData({ ...formData, policyNumber: e.target.value })}
                />
                {errors.policyNumber && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.policyNumber}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Coverage Type</label>
                <select
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.coverageType}
                    onChange={(e) => setFormData({ ...formData, coverageType: e.target.value })}
                >
                    <option value="">Select coverage type</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                </select>
                {errors.coverageType && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.coverageType}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Primary Physician</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.primaryPhysician}
                    onChange={(e) => setFormData({ ...formData, primaryPhysician: e.target.value })}
                />
                {errors.primaryPhysician && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.primaryPhysician}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Preferred Hospital</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.preferredHospital}
                    onChange={(e) => setFormData({ ...formData, preferredHospital: e.target.value })}
                />
                {errors.preferredHospital && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} />{errors.preferredHospital}</p>}
            </div>
        </div>
    );
};


InsuranceDetailsStep.propTypes = {
    formData: PropTypes.shape({
      healthInsuranceProvider: PropTypes.string.isRequired,
      policyNumber: PropTypes.string.isRequired,
      coverageType: PropTypes.number.isRequired,
      primaryPhysician: PropTypes.string.isRequired,
      preferredHospital: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      healthInsuranceProvider: PropTypes.string,
      policyNumber: PropTypes.string,
      coverageType: PropTypes.number,
      sleepPattern: PropTypes.string,
      primaryPhysician: PropTypes.string,
      preferredHospital: PropTypes.string,
    }).isRequired,
  };

export default InsuranceDetailsStep;