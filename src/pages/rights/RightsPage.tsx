import cl from "classnames";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { IRightsTag } from "../../API/rights/rights-interface";
import fontStyle from "../../assets/styles/fonts.module.scss";
import PagePagination from "../../components/PagePagination/PagePagination";
import PageTags from "../../components/PageTags/PageTags";
import { useAppSelector } from "../../hooks/redux";
import {
  getRightsResults,
  getRightsTags,
  setRightsTagsSelected,
} from "../../redux/rights/rights-actions";
import RightsCard from "./card/RightsCard";
import style from "./rightsPage.module.scss";

const RightsPage: FC = () => {
  const dispatch = useDispatch();
  const { tags, tags_selected, rights } = useAppSelector(
    (state) => state.rights
  );
  const wPage = document.documentElement.clientWidth;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(wPage > 1440 ? 16 : wPage > 1280 ? 12 : 4);
  const [row, setRow] = useState(
    wPage > 1440 ? 4 : wPage > 1280 ? 3 : wPage > 768 ? 2 : 1
  );
  const rightsRef = useRef<HTMLHeadingElement>(null);

  const handleTogglePage = (v: number) => {
    window.scrollTo({
      behavior: "smooth",
      top: rightsRef.current?.offsetTop,
    });
    setPage(v);
  };

  useEffect(() => {
    dispatch(getRightsTags());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRightsResults(tags_selected, limit, page));
  }, [dispatch, limit, page, tags_selected]);

  useEffect(() => {
    setPage(1);
  }, [tags_selected, limit]);

  useState(() => {
    const handleResize = () => {
      setTimeout(() => {
        const w = document.documentElement.clientWidth;
        setLimit(w > 1440 ? 16 : w > 1280 ? 12 : 4);
        setRow(w > 1440 ? 4 : w > 1280 ? 3 : w > 768 ? 2 : 1);
      }, 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <h1 className={cl(fontStyle.h1, style.title)} ref={rightsRef}>
        Права детей
      </h1>
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
        <ul className={style.list}>
          {rights.results.map((item, index) => (
            <Fragment key={item.id}>
              <li className={style.list_item}>
                <RightsCard card={item} index={limit * (page - 1) + index} />
              </li>
              {(index + 1) % row === 0 &&
                index !== rights.results.length - 1 && (
                  <span className={style.separator} />
                )}
            </Fragment>
          ))}
        </ul>
        {rights.count > limit && (
          <PagePagination
            selected={page}
            count={Math.ceil(rights.count / limit)}
            onClick={handleTogglePage}
          />
        )}
      </section>
    </>
  );
};

export default RightsPage;
