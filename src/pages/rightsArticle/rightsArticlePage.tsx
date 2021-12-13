import cl from "classnames";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import rightsAPI from "../../API/rights/rights-api";
import { IRightsArticle } from "../../API/rights/rights-interface";
import Markdown from "../../components/Markdowm/Markdown";
import { useAppSelector } from "../../hooks/redux";
import { AppRoutesEnum } from "../../routes";
import style from "./rightsArticlePage.module.scss";
import fontStyle from "../../assets/styles/fonts.module.scss";
import ArrowIcon from "../../assets/images/icons/arrow-blue.svg";

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
      <section className={cl(style.section, style.intro)}>
        <h1 className={cl(fontStyle.h1, style.title)}>{data.title}</h1>
        <p className={cl(fontStyle.description, style.description)}>
          {data.description}
        </p>
      </section>
      <Markdown content={data.body} className={style.section} />
      <section className={style.section}>
        <Link
          to={`${AppRoutesEnum.CHILDREN_RIGHTS}/${data.nextArticle?.id}`}
          className={cl(fontStyle.h3, style.next)}
        >
          <span>{data.nextArticle?.title}</span>
          <img src={ArrowIcon} alt="следующая статья" />
        </Link>
      </section>
    </>
  );
};

export default RightsArticlePage;
