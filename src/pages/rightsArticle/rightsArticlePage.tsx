import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import rightsAPI from "../../API/rights/rights-api";
import { IRightsArticle } from "../../API/rights/rights-interface";
import { useAppSelector } from "../../hooks/redux";

const RightsArticlePage: FC = () => {
  const { rightId } = useParams();
  const { tags_selected } = useAppSelector((state) => state.rights);
  const [data, setData] = useState({} as IRightsArticle);

  useEffect(() => {
    rightsAPI
      .getArticle(+rightId!, tags_selected)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [tags_selected, rightId]);

  return (
    <>
      <h1>
        RightsArticlePage
        {`tags = ${tags_selected.map((i) => i.name).join(",")}`}
        {`id = ${rightId}`}
        {`title = ${data.title}`}
        {`next = ${data.nextArticle?.id}`}
      </h1>
      <div>{data.body}</div>
    </>
  );
};

export default RightsArticlePage;
