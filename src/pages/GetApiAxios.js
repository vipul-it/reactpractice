import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "../components/common/ImageCard";

function GetApiAxios() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res.data);
      setdata(res.data);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="mt-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
        {data.map((d) => {
          return (
            <>
              <div>
                <ImageCard title={d.title} url={d.url} id={d.id} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default GetApiAxios;
