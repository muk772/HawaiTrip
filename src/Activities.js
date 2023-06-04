import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Activities = () => {
  const searchParams = useParams();
  console.log(searchParams.id);
  const [activitiesData, setActivitiesData] = useState([]);
  const [showActivities, setShowActivites] = useState([]);

  useEffect(() => {
    getActivitiesData();
  }, []);

  const getActivitiesData = async () => {
    const data = await fetch(
      "https://web-dev.dev.kimo.ai/v1/activities/" + searchParams.id
    );

    const json = await data.json();
    setActivitiesData(json);
    setShowActivites(json.activities);
    console.log(json);
  };
  if (activitiesData?.name == null) {
    return null;
  }

  return <div>Activities</div>;
};

export default Activities;
