import React from "react";
import { Link } from "react-router-dom";

const HighlightsCards = ({ data }) => {

  return (
    <div className="rounded-lg shadow-2xl w-[100%] m-5 content-center">
      <img alt={data.title} src={data.image} className="rounded-t-lg" />

      <h2 className="text-2xl font-medium text-green-900 mt-2 mx-2">
        {data.title}
      </h2>
      <h2 className="font-serif w-2/3 mt-2 mx-2">{data.description}</h2>

      <Link to={"/activities/" + data.title}>
        <button className="px-[90%] bottom-0  text-green-900 mt-5 mb-5 ">
          ➡
        </button>
      </Link>
    </div>
  );
};

export default HighlightsCards;
