import React, { useState, useEffect } from "react";
import ShowCategories from "./ShowCategories";
import TravelGuideCard from "./TravelGuideCard";
import { apiRepository } from "./Network/apiRepository";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  const url = "https://web-dev.dev.kimo.ai/v1/categories";
  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    // const data = await fetch(url);
    // const json = await data.json();

    const dataForCategories = await apiRepository.getCategories();

    setCategoriesData(dataForCategories);
  };

  if (categoriesData.length == 0) {
    return null;
  }
  return (
    <div className="flex justify-between bg-teal-100 mb-0 absolute w-[1540px]">
      <div className="mx-[15%] mb-[2%] w-2/4">
        <h2 className="ml-5 font-bold">Categories</h2>
        {categoriesData.map((curelem) => {
          return <ShowCategories data={curelem} key={curelem.name} />;
        })}
      </div>
      <div className="mr-[17%] w-2/4">
        <TravelGuideCard />
      </div>
    </div>
  );
};

export default Categories;
