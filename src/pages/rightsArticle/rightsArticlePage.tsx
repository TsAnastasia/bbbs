import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import rightsAPI from "../../API/rights/rights-api";
import { IRightsArticle } from "../../API/rights/rights-interface";
import { useAppSelector } from "../../hooks/redux";
import { AppRoutesEnum } from "../../routes";

const RightsArticlePage: FC = () => {
  const { rightId } = useParams();
  const navigate = useNavigate();
  const { tags_selected } = useAppSelector((state) => state.rights);
  const [data, setData] = useState({} as IRightsArticle);

  useEffect(() => {
    rightsAPI
      .getArticle(+rightId!, tags_selected)
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
        navigate(AppRoutesEnum.NOT_FOUND);
      });
  }, [tags_selected, rightId, navigate]);

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
