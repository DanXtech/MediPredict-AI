import { useEffect, useState } from 'react';
import { Airplay, AlertCircle } from "lucide-react";
import PropTypes from "prop-types";

const WearableDeviceStep = ({ formData, setFormData, errors }) => {
    const [dragActive, setDragActive] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
