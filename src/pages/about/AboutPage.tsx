import cl from "classnames";
import React, { FC } from "react";

import fontStyle from "../../assets/styles/fonts.module.scss";
import Logo from "../../components/UI/logo/Logo";
import style from "./aboutPage.module.scss";
import AboutActions from "./actions/AboutActions";

const AboutPage: FC = () => {
  return (
    <>
      <section className={style.intro} aria-label="Кратко о проекте">
        <p className={cl(fontStyle.h2, style.description)}>
          Наставники.про&nbsp;&ndash; цифоровая информационная платформа
          огрганизации &laquo;Старшие Братья Старшие Сестры&raquo;. Созданная
          для поддержки наставников программы.
        </p>
        <Logo className={style.logo} color="blue" />
      </section>

      <section className={style.organization}>
        <div className={style.organizationHead}>
          <h2 className={cl(fontStyle.h3, style.organizationTitle)}>
            Об организации
          </h2>
        </div>
        <div className={style.organizationBody}>
          <p className={cl(fontStyle.body, style.organizationText)}>
            &laquo;Старшие Братья Старшие Сестры&raquo; &ndash; межрегиональная
            общественная организация содействия воспитанию подрастающего
            поколения. Мы&nbsp;поддерживаем детей, которым требуется внимание:
            оставшихся без попечения родителей, приемных, детей
            из&nbsp;неполных, многодетных или неблагополучных семей, детей
            с&nbsp;ограниченными возможностями.
          </p>
          <p className={cl(fontStyle.body, style.organizationText)}>
            Любому человеку, тем более ребенку, необходимо общение. Без него
            дети растут неуверенными и&nbsp;замкнутыми. Одиночество токсично,
            а&nbsp;самое надежное противоядие &mdash; дружба.
          </p>
          <p className={cl(fontStyle.body, style.organizationText)}>
            Мы&nbsp;помогаем детям, которым не&nbsp;хватает поддержки взрослого
            друга, &laquo;Младшим&raquo;. Таким другом становится наш волонтер,
            &laquo;Старший&raquo;. Он&nbsp;принимает ребенка, какой
            он&nbsp;есть, поддерживает, помогает раскрыть потенциал,
            почувствовать уверенность в&nbsp;своих силах, узнать элементарные
            вещи о&nbsp;жизни, адаптироваться и&nbsp;полноценно участвовать
            в&nbsp;жизни общества.
          </p>
        </div>
      </section>

      <section className={style.target} aria-label="Цель организации">
        <p className={cl(fontStyle.h2, style.targetText)}>
          Мы хотим, чтобы наставник был у каждого ребенка, который в&nbsp;нем
          нуждается
        </p>
      </section>

      <AboutActions />
    </>
  );
};

export default AboutPage;
