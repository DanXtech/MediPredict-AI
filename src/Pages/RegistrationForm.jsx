import { useState } from "react";
import PersonalInfoStep from "../components/PersonalInfoStep";
import MedicalHistoryStep from "../components/MedicalHistoryStep";
import LifestyleStep from "../components/LifestyleStep";
import VitalsAndInsuranceStep from "../components/VitalsAndInsuranceStep";
import InsuranceDetailsStep from "../components/InsuranceDetailsStep"; // New component
import WearableDeviceStep from "../components/WearableDeviceStep"; // New component
import { Check } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import { slideData } from "../Data";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const RegistrationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Updated to 6 steps
  const [formData, setFormData] = useState({
  // Personal Information
  fullName: "John Doe",
  dateOfBirth: "1990-05-15",
  gender: "Male",
  contactNumber: "123-456-7890",
  email: "johndoe@example.com",
  address: "123 Main Street, City, Country",
  emergencyContact: "Jane Doe - 987-654-3210",

  // Medical History
  preExistingConditions: ["Diabetes", "Hypertension"],
  pastSurgeries: "Appendectomy",
  currentMedication: "Metformin, Lisinopril",
  allergies: "Peanuts, Penicillin",
  familyHistory: ["Heart Disease", "Cancer"],

  // Lifestyle & Habits
  smoking: "No",
  alcoholConsumption: "Occasionally",
  exerciseFrequency: "3 times a week",
  dietType: "Balanced",
  sleepPattern: "7-8 hours",
  stressLevel: "Moderate",

  // Vitals & Measurements
  height: 175,
  weight: 70,
  bmi: "22.9",
  bloodPressure: "120/80 mmHg",
  bloodSugarLevel: 95,
  cholesterolLevel: 180,
  heartRate: 78,

  // Insurance Details
  healthInsuranceProvider: "BlueCross",
  policyNumber: "BC123456789",
  coverageType: "Comprehensive",
  primaryPhysician: "Dr. Smith",
  preferredHospital: "City General Hospital",

  // Wearable Device Integration
  wearableDevice: "Yes",
  deviceType: "Smartwatch",
  syncHealth: "Yes",
  fileUpload: [],
});

  const [errors, setErrors] = useState({});

  const validateStep = (stepNumber) => {
    const newErrors = {};

    switch (stepNumber) {
      case 1:
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.emergencyContact) newErrors.emergencyContact = 'Emergency contact is required';
        break;
      case 2:
        if (!formData.preExistingConditions.length) newErrors.preExistingConditions = 'Please select at least one option';
        if (!formData.pastSurgeries) newErrors.pastSurgeries = 'Past surgeries is required';
        if (!formData.currentMedication) newErrors.currentMedication = 'Current medication is required';
        if (!formData.allergies) newErrors.allergies = 'Allergies is required';
        if (!formData.familyHistory.length) newErrors.familyHistory = 'Family History is required';
        break;
      case 3:
        if (!formData.smoking) newErrors.smoking = 'Smoking status is required';
        if (!formData.alcoholConsumption) newErrors.alcoholConsumption = 'Alcohol consumption is required';
        if (!formData.exerciseFrequency) newErrors.exerciseFrequency = 'Exercise frequency is required';
        if (!formData.dietType) newErrors.dietType = 'Diet type is required';
        if (!formData.sleepPattern) newErrors.sleepPattern = 'Sleep pattern is required';
        if (!formData.stressLevel) newErrors.stressLevel = 'Stress level is required';
        break;
      case 4:
        if (!formData.height) newErrors.height = 'Height is required';
        if (!formData.weight) newErrors.weight = 'Weight is required';
        if (!formData.bmi) newErrors.bmi = 'BMI is required';
        if (!formData.bloodPressure) newErrors.bloodPressure = 'Blood pressure is required';
        if (!formData.bloodSugarLevel) newErrors.bloodSugarLevel = 'Blood sugar level is required';
        if (!formData.cholesterolLevel) newErrors.cholesterolLevel = 'Cholesterol level is required';
        if (!formData.heartRate) newErrors.heartRate = 'Heart rate is required';
        break;
      case 5:
        if (!formData.healthInsuranceProvider) newErrors.healthInsuranceProvider = 'Health insurance provider is required';
        if (!formData.policyNumber) newErrors.policyNumber = 'Policy number is required';
        if (!formData.coverageType) newErrors.coverageType = 'Coverage type is required';
        if (!formData.primaryPhysician) newErrors.primaryPhysician = 'Primary physician is required';
        if (!formData.preferredHospital) newErrors.preferredHospital = 'Preferred hospital is required';
        break;
      case 6:
        if (!formData.wearableDevice) newErrors.wearableDevice = 'Wearable device status is required';
        if (!formData.deviceType) newErrors.deviceType = 'Device type is required';
        if (!formData.syncHealth) newErrors.syncHealth = 'Sync health status is required';
        if (formData.fileUpload.length === 0) {
          newErrors.fileUpload = 'Please upload a file';
        } else {
          formData.fileUpload.forEach((file) => {
            if (!['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)) {
              newErrors.fileUpload = 'Only PNG, JPG, and PDF files are allowed';
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
              newErrors.fileUpload = 'File size should not exceed 5MB';
            }
          });
        }
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
    e.preventDefault(); // Prevent default form submission behavior
  
    if (validateStep(currentStep)) {
      console.log("Form submission successful, navigating to Dashboard...");
      
      navigate("/dashboard", { state: { formData } }); // ✅ Pass formData via state
    } else {
      console.log("Form validation failed, staying on the form.");
    }
  };
  

  const renderStepContent = () => {
    const props = { formData, setFormData, errors };
  
    return (
      <motion.div
        key={currentStep} // Ensures unique animation for each step
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {currentStep === 1 && <PersonalInfoStep {...props} />}
        {currentStep === 2 && <MedicalHistoryStep {...props} />}
        {currentStep === 3 && <LifestyleStep {...props} />}
        {currentStep === 4 && <VitalsAndInsuranceStep {...props} />}
        {currentStep === 5 && <InsuranceDetailsStep {...props} />}
        {currentStep === 6 && <WearableDeviceStep {...props} />}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
  {/* Left Side - Image Section */}
  {/* <div className="md:w-1/2 bg-gradient-to-br from-cyan-600 to-blue-800 hidden md:flex flex-col items-center justify-center p-8 sticky top-0 h-screen">
    <img
      src={Imagebanner}
      alt="Doctor with technology"
      className="w-3/4 mb-8 rounded-2xl shadow-2xl"
    />
    <div className="max-w-md text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MediPredict AI</h1>
      <p className="text-xl">
        Experience the future of healthcare with our intelligent prediction system
      </p>
    </div>
  </div> */}
 <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-cyan-600 to-blue-800 justify-center items-center p-8 h-screen relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full max-w-lg "
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center text-center">
              <img src={slide.image} alt={slide.title} className="w-full rounded-xl shadow-lg" />
              <h2 className="text-white text-xl font-bold mt-4">{slide.title}</h2>
              <p className="text-white text-sm mt-2">{slide.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
      <div className="custom-pagination absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2"></div>
      </div>
 

  {/* Right Side - Form Section */}
  <div className="md:w-1/2 h-screen flex flex-col bg-white">
    
    {/* Sticky Progress Steps */}
    <div className="sticky top-0  z-10 p-4 ">
      <div className="flex justify-between mb-2">
        {[1, 2, 3, 4, 5, 6].map((step) => (
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
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>

    {/* Scrollable Form */}
    <div className="flex-1 overflow-y-auto p-5 ">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full bg-white shadow-lg p-6">
        {/* Form fields */}
        <AnimatePresence mode="wait">
          {renderStepContent()}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default RegistrationForm;