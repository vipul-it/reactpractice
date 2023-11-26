import React, { useState } from "react";
import CodePreviewTamplate from "../components/common/CodePreviewTamplate";

const CodePreview = () => {
  // Input box logic
  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mx-5">
        <div className="max-w-3xl  mt-2 bg-gray-800 py-2 px-4 rounded-lg shadow-lg">
          <label className=" text-white font-bold my-6">
           Type or Paste Your Code:
          </label>
          <textarea
            className="bg-gray-900 w-full p-2 my-2 text-white rounded-lg"
            rows="10"
            placeholder="Enter your code here..."
            value={code}
            onChange={handleCodeChange}
          ></textarea>
        </div>
        {code && (
          <CodePreviewTamplate code={code} />
        )}
      </div>
    </>
  );
};

export default CodePreview;
