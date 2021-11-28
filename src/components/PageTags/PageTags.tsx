import React, { FC, useEffect, useState } from "react";
import cl from "classnames";

import style from "./PageTags.module.scss";

interface ITag {
  id: number;
  name: string;
  active: boolean;
}

interface I {
  tags: ITag[];
  setSelected: (v: any[]) => void;
  className?: string;
}

const PageTags: FC<I> = ({ tags, setSelected, className }) => {
  const [isAll, setIsAll] = useState(true);

  const handleTagClick = (tag: ITag) => {
    setSelected(
      tags
        .map((i) => (i.id === tag.id ? { ...i, active: !i.active } : i))
        .filter((i) => i.active)
    );
  };

  useEffect(() => {
    setIsAll(!tags.some((t) => t.active));
  }, [tags]);

  return (
    <section className={cl(style.content, className)}>
      <ul className={style.list}>
        <li>
          <button
            type="button"
            className={cl(style.tag, isAll && style.tag_active)}
            onClick={() => setSelected([])}
          >
            Все
          </button>
        </li>
        {tags.map((tag) => (
          <li key={tag.id}>
            <button
              type="button"
              className={cl(style.tag, tag.active && style.tag_active)}
              onClick={() => handleTagClick(tag)}
            >
              {tag.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PageTags;
