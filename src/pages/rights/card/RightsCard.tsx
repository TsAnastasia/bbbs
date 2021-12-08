import cl from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IRightsCard } from "../../../API/rights/rights-interface";
import fontStyle from "../../../assets/styles/fonts.module.scss";
import { AppRoutesEnum } from "../../../routes";
import style from "./RightsCard.module.scss";

interface I {
  card: IRightsCard;
  index: number;
}

const classesColor = [
  style.card_color_yellow,
  style.card_color_green,
  style.card_color_yellow,
  style.card_color_red,
  style.card_color_blue,
  style.card_color_red,
  style.card_color_green,
  style.card_color_yellow,
  style.card_color_green,
  style.card_color_blue,
  style.card_color_red,
  style.card_color_blue,
];
const classesShape = [
  style.card_shape_square,
  style.card_shape_round,
  style.card_shape_arch,
  style.card_shape_round,
  style.card_shape_arch,
  style.card_shape_square,
  style.card_shape_arch,
  style.card_shape_square,
  style.card_shape_round,
];

const RightsCard: FC<I> = ({ card, index }) => {
  return (
    <Link
      to={`${AppRoutesEnum.CHILDREN_RIGHTS}/${card.id}`}
      className={style.root}
    >
      <article
        className={cl(
          style.card,
          classesShape[index % classesShape.length],
          classesColor[index % classesColor.length]
        )}
      >
        <h3 className={cl(fontStyle.h3, style.title)}>{card.title}</h3>
        <ul className={style.tags}>
          {card.tags.map((t) => (
            <li key={t.id}>
              <span className={cl(fontStyle.tag, style.tag)}>{t.name}</span>
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
};

export default RightsCard;
