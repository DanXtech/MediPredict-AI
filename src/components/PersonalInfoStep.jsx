import { useEffect } from "react";
import { AlertCircle, User2 } from "lucide-react"
import PropTypes from "prop-types";
const PersonalInfoStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="space-y-4">
       <div className="flex items-center gap-2">
       <div className="bg-green-400 inline-block p-2 rounded-full shadow-sm">
       <User2 size={20} className=" text-white font-bold"/>
       </div>
        <h2 className="text-2xl font-bold ">
        Personal Information
       </h2>
       </div>
            <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} /> {errors.fullName}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <input
                    type="date"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} /> {errors.dateOfBirth}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1 flex items-center gap-0.5"> <AlertCircle size={14} /> {errors.gender}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Contact Number</label>
                <input
                    type="tel"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                />
                {errors.contactNumber && <p className="text-red-500 text-sm mt-1 flex items-center gap-2"> <AlertCircle size={14} />{errors.contactNumber}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-2"> <AlertCircle size={14} />{errors.email}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1 flex items-center gap-2"> <AlertCircle size={14} />{errors.address}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Emergency Contact</label>
                <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                />
                {errors.emergencyContact && <p className="text-red-500 text-sm mt-1 flex items-center gap-2"> <AlertCircle size={14} />{errors.emergencyContact}</p>}
            </div>
        </div>
    );
};

 PersonalInfoStep.propTypes = {
    formData: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      contactNumber: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      emergencyContact: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      fullName: PropTypes.string,
      dateOfBirth: PropTypes.string,
      gender: PropTypes.string,
      contactNumber: PropTypes.number,
      email: PropTypes.string,
      address: PropTypes.string,
      emergencyContact: PropTypes.string,
    }).isRequired,
  };

export default PersonalInfoStep;