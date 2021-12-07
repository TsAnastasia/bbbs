import rightsTags from "../_dataForAPI/rights/tags.json";
import allRights from "../_dataForAPI/rights/all.json";
import { IRightsRes, IRightsTag } from "./rights-interface";

const rightsAPI = {
  getTags: () => {
    return Promise.resolve(rightsTags as IRightsTag[]);
  },
  getRights: (
    tags: IRightsTag[],
    limit: number | null,
    page: number | null
  ) => {
    const res =
      tags.length > 0
        ? allRights.filter((r) =>
            r.tags.some((t) => tags.some((i) => i.id === t.id))
          )
        : allRights;
    return Promise.resolve<IRightsRes>({
      count: res.length,
      results: limit
        ? res.slice(limit * ((page || 1) - 1), limit * (page || 1))
        : res,
      page: page || 1,
    });
  },
  getArticle: (id: number) => {
    return Promise.resolve();
  },
};

export default rightsAPI;
