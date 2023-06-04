import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { apiRepository } from "./Network/apiRepository";

const Activities = () => {
  const searchParams = useParams();
  console.log(searchParams.id);
  const [activitiesData, setActivitiesData] = useState([]);
  const [showActivities, setShowActivites] = useState([]);

  useEffect(() => {
    getActivitiesData();
  }, []);
  // fetch(
  //   "https://web-dev.dev.kimo.ai/v1/activities/" + searchParams.id
  // );
  const getActivitiesData = async () => {
    const data = await apiRepository.getActivities(searchParams.id);

    setActivitiesData(data);
    setShowActivites(data.activities);
    console.log(data);
  };
  if (activitiesData?.name == null) {
    return null;
  }

  return <div>{searchParams.id}</div>;
};

export default Activities;
