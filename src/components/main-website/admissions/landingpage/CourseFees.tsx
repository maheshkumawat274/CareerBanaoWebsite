import React, { useState } from "react";

type Course = {
  name: string;
  fees: string;
  duration: string;
};

const courses: Course[] = [
  { name: "Diploma", fees: "Rs 42,000 - 90,000", duration: "2 - 3.6 Years" },
  { name: "D Pharma", fees: "Rs 1,00,000", duration: "2 Years" },
  { name: "B.Tech", fees: "Rs 1,30,000 - 1,50,000", duration: "4 Years" },
  { name: "BSc", fees: "Rs 45,000 - 1,25,000", duration: "3 - 4 Years" },
  { name: "BCA", fees: "Rs 80,000 - 1,10,000", duration: "3 Years" },
  { name: "BBA", fees: "Rs 80,000 - 1,00,000", duration: "3 Years" },
  { name: "BA", fees: "Rs 30,000 - 50,000", duration: "3 Years" },
  { name: "B.Pharm", fees: "Rs 1,25,000 - 1,35,000", duration: "4 Years" },
  { name: "B.Voc", fees: "Rs 75,000", duration: "3 Years" },
  { name: "B.Com", fees: "Rs 50,000 - 60,000", duration: "3 Years" },
];

const CourseFees: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle visibility of the course list
  const toggleView = () => setShowAll(!showAll);

  // Determine the courses to display (initially 5, or all when expanded)
  const visibleCourses = showAll ? courses : courses.slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Sanskriti University Mathura Fee Structure 2024
      </h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Course</th>
            <th className="py-2 px-4 text-left">Fees</th>
            <th className="py-2 px-4 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          {visibleCourses.map((course, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50`}
            >
              <td className="py-2 px-4">{course.name}</td>
              <td className="py-2 px-4">{course.fees}</td>
              <td className="py-2 px-4">{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View More/View Less Button */}
      <div className="text-center mt-4">
        <button
          onClick={toggleView}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default CourseFees;