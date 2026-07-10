"use client"
import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";

const cities = [
  // Column 1
  "Mumbai",
  "Delhi",
  "Bengaluru (Bangalore)",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Surat",
  "Jaipur",
  "Udaipur",
  "Dehradun",
  // Column 2
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Thane",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Warangal",
  "Guntur",
  // Column 3
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivli",
  "Varanasi",
  "Srinagar",
  "Amritsar",
  "Rohtak",
  "Rewa",
  // Column 4
  "Ranchi",
  "Howrah",
  "Jabalpur",
  "Noid",
  "Gwalior",
  "Allahabad",
  "Vijayawada",
  "Coimbatore",
  "Jodhpur",
  "Kota",
  "Jhansi",
  "Ujjain",
  // Column 5
  "Madurai",
  "Chandigarh",
  "Guwahati",
  "Hubballi-Dharwad",
  "Tiruchirappalli",
  "Mysuru (Mysore)",
  "Jamshedpur",
  "Bareilly",
  "Aligarh",
  "Bhubaneswar",
  "Haldwani",
  "Ratlam"
];

function WeDeliverTo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCities = useMemo(() => {
    return cities.filter(city =>
      city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const displayedCities = showAll ? filteredCities : filteredCities.slice(0, 60);

  // Organize cities into 5 columns for desktop
  const columnsDesktop = (() => {
    const cols = [[], [], [], [], []];
    displayedCities.forEach((city, index) => {
      cols[index % 5].push(city);
    });
    return cols;
  })();

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-2 gap-4">
          <h2 className="text-[16px] md:text-[15px] font-light tracking-wide text-gray-900">
            WE DELIVER TO
          </h2>
          
          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(false);
              }}
              className="w-full px-4 py-2 text-gray-700 bg-white border-b-2 border-gray-900 focus:outline-none focus:border-gray-600 placeholder-gray-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
          </div>
        </div>

        {/* Cities Grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 mb-8">
          {columnsDesktop.map((column, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {column.map((city, cityIndex) => (
                <p key={cityIndex} className="text-gray-700 text-[15px] md:text-base">
                  {city}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden mb-8">
          <div className="grid grid-cols-2 gap-4">
            {displayedCities.map((city, index) => (
              <p key={index} className="text-gray-700 text-sm">
                {city}
              </p>
            ))}
          </div>
        </div>

        {/* View More Button */}
        {!showAll && filteredCities.length > 60 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              View More
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              Show Less
            </button>
          </div>
        )}

        {/* No Results */}
        {displayedCities.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-base">
              No cities found for "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default WeDeliverTo;