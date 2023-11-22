import React, { useState } from "react";

import { popularCitiesInIndia } from "../constant";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = popularCitiesInIndia.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredCities.map((d) => {
        return <div key={d.id}>{d.name}</div>;
      })}
    </div>
  );
};

export default Home;
