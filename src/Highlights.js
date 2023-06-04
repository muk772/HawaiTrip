import React, { useEffect, useState } from "react";
import HighlightsCards from "./HighlightsCards";

const Highlights = () => {
  const [highlightsData, setHighlightsData] = useState([]);
  const [dataReceived, setDataReceived] = useState(false);
  const url = "https://web-dev.dev.kimo.ai/v1/highlights";
  useEffect(() => {
    getHighlightData();
  }, []);
  const getHighlightData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setHighlightsData(json);
    setDataReceived(true);
  };
  if (!dataReceived) {
    return null;
  }
  //ml-[10%] mr-[5%]
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
