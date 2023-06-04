import React, { useState, useEffect } from "react";

const ShowCategories = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mx-4 mt-4 shadow-xl rounded-lg  bg-white w-[100%]">
        <div className="flex justify-between">
          <h2 className="mx-3 font-mono mt-2">{data.name}</h2>
          <button
            className=" text-green-900 text-2xl font-bold m-2"
            onClick={() => setShow(!show)}
          >
            {show == false ? " →" : "↓"}
          </button>
        </div>
        {show === false ? (
          <h2></h2>
        ) : (
          <ul>
            {data.activities.map((curelem) => {
              return <li key={curelem.title}> → {curelem.title}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default ShowCategories;
