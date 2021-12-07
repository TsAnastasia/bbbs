import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IRightsTag } from "../../API/rights/rights-interface";
import PageTags from "../../components/PageTags/PageTags";
import { useAppSelector } from "../../hooks/redux";
import {
  getRightsResults,
  getRightsTags,
  setRightsTagsSelected,
} from "../../redux/rights/rights-actions";
import cl from "classnames";

import fontStyle from "../../assets/styles/fonts.module.scss";
import style from "./RightsPage.module.scss";
import PagePagination from "../../components/PagePagination/PagePagination";

const RightsPage: FC = () => {
  const dispatch = useDispatch();
  const { tags, tags_selected, rights } = useAppSelector(
    (state) => state.rights
  );
  const wPage = document.documentElement.clientWidth;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(wPage > 1440 ? 16 : wPage > 768 ? 12 : 4);

  useEffect(() => {
    dispatch(getRightsTags());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRightsResults(tags_selected, limit, page));
  }, [dispatch, limit, page, tags_selected]);

  useEffect(() => {
    setPage(1);
  }, [tags_selected]);

  useState(() => {
    const handleResize = () => {
      setTimeout(() => {
        const w = document.documentElement.clientWidth;
        setLimit(w > 1440 ? 16 : w > 768 ? 12 : 4);
      }, 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <h1 className={cl(fontStyle.h1, style.title)}>Права детей</h1>
      <PageTags
        className={style.tags}
        tags={tags.map((tag) => ({
          id: tag.id,
          name: tag.name,
          active: tags_selected.some((i) => i.id === tag.id),
        }))}
        setSelected={(v: IRightsTag[]) => dispatch(setRightsTagsSelected(v))}
      />
      <section>
        {rights.results.map((r) => (
          <p key={r.id}>{r.title}</p>
        ))}
        <PagePagination
          selected={page}
          count={Math.ceil(rights.count / limit)}
          onClick={(v: number) => {
            setPage(v);
          }}
        />
      </section>
    </>
  );
};

export default RightsPage;
