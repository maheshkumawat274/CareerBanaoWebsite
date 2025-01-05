import React, { useState } from "react";

const CollegeNavigationBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuItems = [
    "Overview",
    "Courses & Fees",
    "Admission",
    "Scholarship",
    "Placements",
    "CutOffs",
    "Campus",
    "Gallery",
    "Reviews",
    "News",
    "QnA",
  ];
  const handleItemClick = (index: number) => {
    setActiveIndex(index); 
  };

  return (
    <div className="bg-white shadow">
      <div className="overflow-auto whitespace-nowrap">
        <nav className="flex space-x-8 px-4 py-2">
          {menuItems.map((item, index) => (
              <a
              key={index}
              href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
              className="text-gray-800 hover:text-blue-600 relative"
              onClick={() => handleItemClick(index)} 
            >
              {item}
              {/* Active Indicator */}
              {activeIndex === index && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"></span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CollegeNavigationBar;
