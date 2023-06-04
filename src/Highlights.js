import React, { useEffect, useState } from "react";
import HighlightsCards from "./HighlightsCards";
import { apiRepository } from "./Network/apiRepository";

const Highlights = () => {
  const [highlightsData, setHighlightsData] = useState([]);
  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    getHighlightData();
  }, []);

  const getHighlightData = async () => {
    const dataForHighlights = await apiRepository.getHighlights();
    setHighlightsData(dataForHighlights);
    setDataReceived(true);
  };

  if (!dataReceived) {
    return null;
  }

  return (
    <div className="w-full">
      <h2 className="font-bold ml-[16%] mt-[2%]">Highlights</h2>
      <div className="flex relative mx-[15%] mb-[4%]">
        {highlightsData.map((curelem) => {
          return <HighlightsCards data={curelem} key={curelem.image} />;
        })}
      </div>
    </div>
  );
};

export default Highlights;
