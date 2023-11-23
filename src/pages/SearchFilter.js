import React, { useState } from "react";

import { popularCitiesInIndia } from "../constant";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = popularCitiesInIndia.filter((city, name) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredCities.map((data) => {
        return <div key={data.id}>{data.name}</div>;
      })}
    </div>
  );
};

export default SearchFilter;
