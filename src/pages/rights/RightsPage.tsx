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

const RightsPage: FC = () => {
  const dispatch = useDispatch();
  const { tags, tags_selected, rights } = useAppSelector(
    (state) => state.rights
  );
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    dispatch(getRightsTags());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRightsResults(tags_selected, limit, page));
  }, [dispatch, limit, page, tags_selected]);

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
      </section>
    </>
  );
};

export default RightsPage;
