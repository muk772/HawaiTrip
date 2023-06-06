import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { apiRepository } from "./Network/apiRepository";
import Shimmer from "./Shimmer";

const Activities = () => {
  const searchParams = useParams();

  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    getActivitiesData();
  }, [searchParams]);

  const getActivitiesData = async () => {
    const data = await apiRepository.getActivities(searchParams.id);

    setActivitiesData(data);
    console.log(data);
  };
  if (activitiesData?.name == null) {
    return <Shimmer />;
  }

  return (
    <div className="flex ">
      <div className="w-1/2 flex-1 h-auto">
        <div className="font-mono font-bold mt-5 mx-10  px-5 text-2xl  text-green-900">
          {activitiesData.name}
        </div>
        <div className="font-mono mx-10 mt-3  px-5">
          {activitiesData.description}
        </div>
        <div className="mx-3 mt-10 grid grid-cols-3 gap-4">
          {activitiesData.activities.map((curelem) => {
            return (
              <div className="font-mono mx-10 mt-3 shadow-2xl rounded-lg">
                {curelem.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/2 flex-1 h-auto rounded-lg mt-7 mx-5">
        <img
          src={activitiesData.image}
          className="rounded-lg  w-full h-[50%]"
        />
      </div>
    </div>
  );
};

export default Activities;
