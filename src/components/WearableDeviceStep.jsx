import { useEffect, useState } from 'react';
import { Airplay, AlertCircle, Upload, X, FileText, Check } from "lucide-react";
import PropTypes from "prop-types";

const WearableDeviceStep = ({ formData, setFormData, errors }) => {
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileError, setFileError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            validateFile(e.target.files[0]);
        }
    };

    const validateFile = (file) => {
        const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (!allowedTypes.includes(file.type)) {
            setFileError("Invalid file type. Only PDF and DOC files are allowed.");
            setUploadedFile(null);
            return;
        }

        if (file.size > maxSize) {
            setFileError("File size exceeds 10MB. Please upload a smaller file.");
            setUploadedFile(null);
            return;
        }

        setUploadedFile(file);
        setFileError(null);
    };

    const removeFile = () => {
        setUploadedFile(null);
        setFileError(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <div className="bg-blue-500 inline-block p-2 rounded-full shadow-sm">
                    <Airplay size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">
                    Wearable Device Integration
                </h2>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Health Insurance Provider
                    </label>
                    <select
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.wearableDevice}
                        onChange={(e) => setFormData({ ...formData, wearableDevice: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="basic">Yes</option>
                        <option value="premium">No</option>
                    </select>
                    {errors.wearableDevice &&
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={14} />{errors.wearableDevice}
                        </p>
                    }
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Device Type
                    </label>
                    <select
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.deviceType}
                        onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                    >
                        <option value="">Select device type</option>
                        <option value="apple">Apple Watch</option>
                        <option value="fitbit">Fitbit</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.deviceType &&
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={14} />{errors.deviceType}
                        </p>
                    }
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sync Health Data
                    </label>
                    <select
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.syncHealth}
                        onChange={(e) => setFormData({ ...formData, syncHealth: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="basic">Yes</option>
                        <option value="premium">No</option>
                    </select>
                    {errors.syncHealth &&
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={14} />{errors.syncHealth}
                        </p>
                    }
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Documents
                    </label>
                    <div
                        className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} ${uploadedFile ? 'bg-gray-50' : ''}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        {!uploadedFile ? (
                            <div className="text-center flex flex-col items-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="mt-4 flex flex-col text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <p className="mt-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600 mt-2">
                                    PDF, DOC up to 10MB
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg w-full text-center">
                                <div className="flex flex-col items-center space-y-2">
                                    <FileText className="h-6 w-6 text-blue-500" />
                                    <p className="text-sm font-medium text-gray-900">
                                        {uploadedFile.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <Check className="h-5 w-5 text-green-500" />
                                    <button
                                        onClick={removeFile}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {fileError && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle size={14} /> {fileError}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

WearableDeviceStep.propTypes = {
    formData: PropTypes.shape({
        wearableDevice: PropTypes.string.isRequired,
        deviceType: PropTypes.string.isRequired,
        syncHealth: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        wearableDevice: PropTypes.string,
        deviceType: PropTypes.string,
        syncHealth: PropTypes.string,
    }).isRequired,
};

export default WearableDeviceStep;
