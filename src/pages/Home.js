import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 border-2 px-10">
        <div className="">
          <ol className="list-disc ">
            <li className="text-gray-700 my-2">
              <Link to="/SearchFilter">Search Filter</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/GetApiAxios">GetApiAxios</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/GetApi">GetApi</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/GetApiFetch">Get Api Fetch</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/SearchFilter">SearchFilter</Link>
            </li>
           
          </ol>
        </div>
      </div>
    </>
  );
};

export default Home;
