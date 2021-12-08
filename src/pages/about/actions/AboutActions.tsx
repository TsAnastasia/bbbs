import cl from "classnames";
import React, { ReactNode } from "react";

import fontStyle from "../../../assets/styles/fonts.module.scss";
import { ExternalLinkEnum } from "../../../routes";
import style from "./aboutActions.module.scss";

interface IItem {
  title: string;
  description: ReactNode;
  link: { route: string; name: string };
}

const content: IItem[] = [
  {
    title: "Пожертвования",
    description: (
      <p className={style.description}>
        Деньги пойдут на&nbsp;оплату работы кураторов программы
        (профессиональные психологи/социальные работники), которые поддерживают
        дружбу между ребенком и наставником.
      </p>
    ),
    link: { route: ExternalLinkEnum.HELP_MONEY, name: "сделать пожертвование" },
  },
  {
    title: "Наставничество",
    description: (
      <p className={style.description}>
        Наставник &laquo;Старшие Братья Старшие Сестры&raquo;&nbsp;&mdash;
        значимый взрослый, который становится для ребенка старшим другом,
        ролевой моделью, принимает своего &laquo;Младшего&raquo; таким, какой
        он&nbsp;есть. &laquo;Старший&raquo; открывает для ребенка дверь
        в&nbsp;большой мир и&nbsp;дарит ему надежду на&nbsp;более счастливое
        и&nbsp;успешное будущее.
      </p>
    ),
    link: { route: ExternalLinkEnum.MENTORING, name: "подробнее" },
  },
  {
    title: "Партнерство",
    description: (
      <p className={style.description}>
        Компании поддерживают нас не&nbsp;только деньгами,
        но&nbsp;и&nbsp;делами. Мы&nbsp;собрали все возможные способы поддержки
        и&nbsp;сотрудничества: профессиональная помощь Pro Bono, организационная
        помощь, корпоративное волонтерство, мастер-классы, лекции, учебные
        программы
      </p>
    ),
    link: { route: ExternalLinkEnum.PARTHERSHIP, name: "подробнее" },
  },
];

const AboutActions = () => {
  return (
    <section aria-label="Действия">
      <ul className={style.list}>
        {content.map((item) => (
          <li key={item.title} className={style.item}>
            <article className={style.card}>
              <h3 className={cl(fontStyle.h3, style.title)}>{item.title}</h3>
              <div className={cl(fontStyle.body, style.body)}>
                {item.description}
                <a
                  className={cl(fontStyle.button, style.link)}
                  href={item.link.route}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.link.name}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutActions;
