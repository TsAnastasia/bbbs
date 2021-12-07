import cl from "classnames";
import React, { FC, useEffect, useState } from "react";
import style from "./PagePagination.module.scss";
import fontStyle from "../../assets/styles/fonts.module.scss";

interface I {
  selected: number;
  count: number;
  onClick: (page: number) => void;
}

type PageType = number | "...";

const PagePagination: FC<I> = ({ selected, count, onClick }) => {
  const [pages, setPages] = useState<PageType[]>([]);

  useEffect(() => {
    const res: PageType[] = [];
    if (count > 5) {
      res.push(1);
      if (selected > 3) res.push("...");
      if (selected > count - 1) res.push(selected - 3);
      if (selected > count - 2) res.push(selected - 2);
      if (selected > 2) res.push(selected - 1);
      if (selected > 1 && selected < count) res.push(selected);
      if (selected < count - 1) res.push(selected + 1);
      if (selected < 3) res.push(selected + 2);
      if (selected < 2) res.push(selected + 3);
      if (selected < count - 2) res.push("...");
      res.push(count);
    } else {
      for (let index = 0; index < count; index++) {
        res.push(index + 1);
      }
    }
    setPages(res);
  }, [selected, count]);

  return (
    <div className={style.root}>
      <button
        type="button"
        onClick={() => onClick(selected - 1)}
        className={cl(style.arrow, selected < 2 && style.arrow_hidden)}
      />

      <div className={style.pages}>
        {pages.map((item, index) =>
          item === "..." ? (
            <p key={`go-${index}`} className={cl(fontStyle.h3, style.ellipsis)}>
              ...
            </p>
          ) : (
            <button
              type="button"
              key={item}
              onClick={() => onClick(item)}
              className={cl(
                style.page,
                selected === item && style.page_selected,
                fontStyle.h3
              )}
            >
              {item}
            </button>
          )
        )}
      </div>
      <button
        type="button"
        onClick={() => onClick(selected + 1)}
        className={cl(
          style.arrow,
          style.arrow_back,
          selected > count - 1 && style.arrow_hidden
        )}
      />
    </div>
  );
};

export default PagePagination;
