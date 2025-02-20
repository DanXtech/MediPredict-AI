import { Check } from "lucide-react";
import { useState } from "react";
import VitalsAndInsuranceStep from "../ui/FormInfo/VitalsAndInsuranceStep";
import LifestyleStep from "../ui/FormInfo/LifestyleStep";
import MedicalHistoryStep from "../ui/FormInfo/MedicalHistoryStep";
import PersonalInfoStep from "../ui/FormInfo/PersonalInfoStep";

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // const totalSteps = 4;
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    contactNumber: "",
    preExistingConditions: [],
    exerciseFrequency: "",
    height: "",
    weight: "",
    insuranceProvider: "",
  });

  const [errors, setErrors] = useState({});

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    switch (stepNumber) {
      case 1:
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
        break;
      case 2:
        if (!formData.preExistingConditions.length) newErrors.preExistingConditions = 'Please select at least one option';
        break;
      case 3:
        if (!formData.exerciseFrequency) newErrors.exerciseFrequency = 'Please select exercise frequency';
        break;
      case 4:
        if (!formData.height) newErrors.height = 'Height is required';
        if (!formData.weight) newErrors.weight = 'Weight is required';
        if (!formData.insuranceProvider) newErrors.insuranceProvider = 'Insurance provider is required';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
};

const handlePrevious = () => {
  setCurrentStep(prev => prev - 1);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateStep(4)) {
      // Handle form submission
      console.log('Form submitted:', formData);
  }
};


  const renderStepContent = () => {
    const props = {formData, setFormData, errors}
    switch (currentStep) {
      case 1:
          return <PersonalInfoStep  {...props}/>;
      case 2:
          return <MedicalHistoryStep  {...props}/>;
      case 3:
          return <LifestyleStep  {...props}/>;
      case 4:
          return <VitalsAndInsuranceStep  {...props}/>;
      default:
          return null;
  }
  }
 



  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image Section */}
      <div className="md:w-1/2 bg-gradient-to-br from-cyan-600 to-blue-800 hidden md:flex flex-col items-center justify-center p-8">
        <img
          src="/api/placeholder/600/800"
          alt="Doctor with technology"
          className="w-3/4 mb-8 rounded-2xl shadow-2xl"
        />
        <div className="max-w-md text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MediPredict AI</h1>
          <p className="text-xl">
            Experience the future of healthcare with our intelligent prediction system
          </p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="md:w-1/2 p-8 flex flex-col overflow-y-auto bg-gray-50">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step <= currentStep ? "bg-cyan-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {step < currentStep ? <Check size={16} /> : step}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-cyan-600 rounded-full transition-all duration-300"
                // style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
              />
            </div>
          </div>
          

          {/* Form Fields */}
          <div className="bg-white p-6 rounded-xl shadow-sm"
           onSubmit={handleSubmit}>
           {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button
            type="button"
            onClick={handlePrevious}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Previous
          </button>
      )}
            <div className="ml-auto">
          {currentStep < 4 ? (
              <button
                  type="button"
                   onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
               >
                 Next
              </button>
          ) : (
              <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
               >
                Submit Booking
              </button>
          )}
             </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
