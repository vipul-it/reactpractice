import React, { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const CodePreviewTamplate = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset "Copied!" message after 2 seconds
    });
  };
  return (
    <>
      <div>
        {code && (
          <div className="max-w-3xl  mt-2 bg-gray-800 py-2 px-4 rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center my-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-600 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                </div>
              </div>
              <div className="">
                <button
                  className="bg-gray-800 text-white px-4 py-2 rounded-md"
                  onClick={copyCodeToClipboard}
                >
                  {copied ? (
                    <div className="flex items-center text-sm">
                      <IoMdCheckmark />
                      <span className="ml-1">Copied!</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-sm">
                      <FaRegClipboard />
                      <span className="ml-1">Copy Code</span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Code Preview */}
            <div>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-white whitespace-pre-wrap">
                {code}
              </pre>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-2"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default CodePreviewTamplate;
