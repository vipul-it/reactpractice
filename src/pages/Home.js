import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 px-10">
        <div className="">
          <ol className="list-disc ">
            <li className="text-gray-700 my-2">
              <Link to="/SearchFilter">Search Filter</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/GetApi">Get Api</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/GetApiFetch">Get Api Fetch</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/GetApiAxios">Get Api Axios</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/FormValidation">Form Validation</Link>
            </li>
            <li className="text-gray-700 my-2">
              <Link to="/UseMemoHook">Use Memo Hook</Link>
            </li>
          </ol>
        </div>
        <div className="">
          <ol className="list-disc ">
            <li className="text-gray-700 my-2">
              <Link to="/CodePreview">Code PreView</Link>
            </li>
           
          </ol>
        </div>
        
      </div>
    </>
  );
};

export default Home;
