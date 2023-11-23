import React from "react";

const ImageCard = ({ id, title, url }) => {
  return (
    <div className="">
      <div className=" overflow-hidden rounded-lg shadow-lg">
        <img className="object-cover w-full h-48" src={url} alt={title} />
        <div className="px-6 py-4 h-24">
          <h1>
            {id}. {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
