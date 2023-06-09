import apiHandler from "./apiHandler";

export const apiRepository = {
  getHighlights: () => {
    const url = "/highlights";

    return apiHandler.get(url, "");
  },
  getCategories: () => {
    const url = "/categories";
    return apiHandler.get(url, "");
  },
  getActivities: (param) => {
    const url = "/activities/";
    return apiHandler.get(url, param);
  },
};
