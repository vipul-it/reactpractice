import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "../components/common/ImageCard";

function GetApiAxios() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setdata(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error.message}
      </div>
    );
  }
  if (!data) {
    return (
      <div className="h-screen flex justify-center items-center">
        Response: Data not available
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="my-2">API response using Axios</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
        {data.map((d) => {
          return (
            <>
              <div key={d.id}>
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
