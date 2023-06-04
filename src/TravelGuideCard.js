import React from "react";
import { Link } from "react-router-dom";

const TravelGuideCard = () => {
  return (
    <>
      <div className="shadow-xl rounded-lg mt-5 flex justify-between bg-white w-[100%]">
        <div className="mx-3">
          <h2 className="font-bold font-mono text-2xl mt-3">Mukund Madhav</h2>
          <h2 className="font-mono">Guide Since 2012</h2>

          <a href="https://mukundmadhav.netlify.app/about" target="_blank">
            <button className="bg-transparent hover:bg-green-900 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded mt-8 mb-5">
              Contact
            </button>
          </a>
        </div>
        <div className="w-[22%] mx-5 mt-5">
          <img
            alt="mukund_photo"
            src="../Images/mukundphoto.jpeg"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default TravelGuideCard;
