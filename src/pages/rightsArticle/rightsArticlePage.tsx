import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
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
      <section>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </section>
      {data.body}

      <section>
        <Link to={`${AppRoutesEnum.CHILDREN_RIGHTS}/${data.nextArticle?.id}`}>
          {data.nextArticle?.title}
        </Link>
      </section>
    </>
  );
};

export default RightsArticlePage;
