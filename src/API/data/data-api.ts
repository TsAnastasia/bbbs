import { IDataCites } from "./data-interface";
import cites from "../dataForAPI/cites.json";

const dataAPI = {
  getCites: (): IDataCites => {
    return cites;
  },
};

export default dataAPI;
