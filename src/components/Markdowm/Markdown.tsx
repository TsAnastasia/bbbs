import cl from "classnames";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import style from "./markdowm.module.scss";

interface I {
  content: string;
  className?: string;
}

const Markdown: FC<I> = ({ content, className }) => (
  <section className={cl(style.markdown, className)}>
    <ReactMarkdown>{content}</ReactMarkdown>
  </section>
);

export default Markdown;
