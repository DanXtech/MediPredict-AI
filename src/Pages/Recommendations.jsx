import { useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Recommendations = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  // Handle form submission
  const handleUpload = async () => {
    if (!pdfFile) {
      setError("Please select a PDF file.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("pdf", pdfFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/analyze-report", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze the PDF");
      }

      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Failed to analyze the PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Your Medical Report and Get Instant Recommendations</h2>

      {/* File Upload Input */}
      <input 
        type="file" 
        accept="application/pdf" 
        onChange={handleFileChange} 
        className="mb-4 border p-2 w-full rounded"
      />
      
      {/* Upload Button */}
      <button 
        onClick={handleUpload} 
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded cursor-pointer"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload & Analyze"}
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Recommendations Section */}
      {recommendations && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Recommendations</h2>
          <div className="prose max-w-none">
            <ReactMarkdown>{recommendations}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
