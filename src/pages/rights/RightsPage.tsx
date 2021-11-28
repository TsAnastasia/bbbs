import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IRightsTag } from "../../API/rights/rights-interface";
import PageTags from "../../components/PageTags/PageTags";
import { useAppSelector } from "../../hooks/redux";
import {
  getRightsTags,
  setRightsTagsSelected,
} from "../../redux/rights/rights-actions";
import cl from "classnames";

import fontStyle from "../../assets/styles/fonts.module.scss";
import style from "./RightsPage.module.scss";

const RightsPage: FC = () => {
  const dispatch = useDispatch();
  const { tags, tags_selected } = useAppSelector((state) => state.rights);

  useEffect(() => {
    dispatch(getRightsTags());
  }, [dispatch]);

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
    </>
  );
};

export default RightsPage;
