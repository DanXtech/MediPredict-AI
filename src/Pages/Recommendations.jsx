import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState({});

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("/api/recommendations");
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <Link to="/">
        <button className="mb-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded cursor-pointer">
          Home
        </button>
      </Link>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Health Recommendations</h2>
      <div className="space-y-4">
        {Object.entries(recommendations).map(([key, value]) => (
          <div key={key} className="border-b pb-4">
            <h3 className="text-lg font-semibold text-blue-600">{key}</h3>
            <p className="text-gray-700 mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations
