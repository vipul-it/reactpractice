import React, { useState, useEffect } from 'react';
import ImageCard from '../components/common/ImageCard';


const GetApiFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  console.log(data);

  // Render your data here
  return (
    <div>
      <h1>My Data</h1>
      {/* Render fetched data */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
     
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">{
        data.map((d)=>{
          return (
            <>
            <div>
               <ImageCard title={d.title} url={d.url} id={d.id}/>
            </div>
           
            </>
          )
        })
      }
        </div> 
     
    </div>
  );
};

export default GetApiFetch;
