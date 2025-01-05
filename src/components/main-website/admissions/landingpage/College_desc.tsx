import React, { useState, useEffect } from "react";

interface CollegeData {
  name: string;
  description: string;
  location: string;
  image: string;
}

const College_desc: React.FC = () => {
  const [collegeData, setCollegeData] = useState<CollegeData | null>(null);

  useEffect(() => {
    // Dummy data for testing
    const dummyData: CollegeData = {
      name: "Indian Institute of Technology Delhi (IIT- Delhi)",
      description: "The Indian Institute of Technology Delhi (IIT- Delhi) is a public institute of technology located in Delhi, India. It is one of the 23 Indian Institutes of Technology created to be a Centre of Excellence for India's training, research and development in science, engineering and technology.",
      location: "Delhi, India",
      image: "https://via.placeholder.com/400x200",
    };
    setCollegeData(dummyData);
  }, []);

  return (
    <div>
      
    <div className="container mx-auto p-4 mt-16">
      {collegeData ? (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">{collegeData.name}</h2>
            <p className="text-lg mb-4">{collegeData.description}</p>
            <p className="text-md font-semibold mb-6">
              <strong>Location:</strong> {collegeData.location}
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none">
              Apply Now
            </button>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src={collegeData.image}
              alt={collegeData.name}
              className="w-full h-auto max-w-sm rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading college details...</p>
      )}
    </div>

    <div className="mt-6 ">
        <ul className="flex flex-row gap-6 items-center justify-center bg-slate-50 h-12 ">
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Overview</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Courses & Fees</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Admission</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Scholarship</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Placements</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">CutOffs</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Ranking</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Gallery</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">Reviews</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">News</li>
          <li className="cursor-pointer hover:text-blue-500 hover:underline">QnA</li>
        </ul>
      </div>
    
    </div>
  );
};

export default College_desc;