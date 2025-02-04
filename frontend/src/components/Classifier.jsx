import React, { useState } from 'react';
import Navbar from './Navbar';

const Classifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setClassificationResult(null);
  };

  const handleClassify = async () => {
    if (!selectedFile) return;
    setLoading(true);
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    try {
      const response = await fetch('http://localhost:5000/classify', { // Update the port to match Flask
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      setClassificationResult(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Classification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
    <Navbar/>
    <div className="max-w-2xl mx-auto mt-36 p-6 bg-white shadow-lg rounded-lg ">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
        Waste Classifier ♻️
      </h1>

      <div className="mb-4">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-green-50 file:text-green-700
            hover:file:bg-green-100
          "
        />
      </div>

      <button
        onClick={handleClassify}
        className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
        disabled={!selectedFile || loading}
      >
        {loading ? 'Classifying...' : 'Classify Waste'}
      </button>

      {classificationResult && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-green-300">
          <h2 className="text-2xl font-semibold text-green-600">Classification Result:</h2>
          <p className="mt-2 text-lg"><strong>Category:</strong> {classificationResult.category}</p>
          <h3 className="mt-4 text-xl font-medium text-green-600">Recommendations:</h3>
          <ul className="mt-2 list-disc list-inside text-lg">
            {classificationResult.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600">How It Works</h2>
        <p className="mt-2 text-justify text-lg text-gray-700">
          Upload an image of your waste item, and our AI will classify it into the correct category and provide recycling recommendations. This helps you recycle properly and contributes to a greener planet.
        </p>
        <h3 className="mt-4 text-xl font-medium text-green-600">Supported Waste Types:</h3>
        <ul className="mt-2 list-disc list-inside text-lg text-gray-700">
          <li>Plastics (bottles, containers)</li>
          <li>Paper and Cardboard</li>
          <li>Glass (jars, bottles)</li>
          <li>Metals (cans, foil)</li>
          <li>Organic Waste (food scraps, yard waste)</li>
        </ul>
      </div>
    </div>
    {/* Footer */}
    <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <p>Contact us: info@cdwastemanagement.com</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Classifier;
