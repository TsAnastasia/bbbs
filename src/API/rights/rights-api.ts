import rightsTags from "../_dataForAPI/rights/tags.json";
import allRights from "../_dataForAPI/rights/all.json";
import rightsData from "../_dataForAPI/rights/rights.json";
import { IRightsArticle, IRightsRes, IRightsTag } from "./rights-interface";

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
  getArticle: (id: number, tags: IRightsTag[]) => {
    const res = rightsData.find((i) => i.id === id);
    if (!res)
      return Promise.reject({ message: `Rights article id = ${id} not found` });
    const rights =
      tags.length > 0
        ? allRights.filter((r) =>
            r.tags.some((t) => tags.some((i) => i.id === t.id))
          )
        : allRights;
    const index = rights.findIndex((i) => i.id === id);
    const nextArticle =
      rights.length === 0
        ? null
        : index === 0
        ? rights[rights.length - 1]
        : rights[index - 1];
    return Promise.resolve<IRightsArticle>({
      ...res,
      nextArticle,
    });
  },
};

export default rightsAPI;
