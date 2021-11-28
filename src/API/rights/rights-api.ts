import rightsTags from "../_dataForAPI/rights/tags.json";

const rightsAPI = {
  getTags: () => {
    return Promise.resolve(rightsTags);
  },
};

export default rightsAPI;
