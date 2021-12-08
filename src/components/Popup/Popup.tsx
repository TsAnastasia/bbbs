import cl from "classnames";
import React, { FC, useEffect, useState } from "react";

import style from "./popup.module.scss";

interface I {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  hasButtonClose?: boolean;
}

const Popup: FC<I> = ({
  children,
  isOpen,
  onClose,
  className,
  hasButtonClose = false,
}) => {
  const [id] = useState(`id-${Math.random()}`);

  useEffect(() => {
    const handleCloseClick = (event: MouseEvent) => {
      event.stopPropagation();

      if ((event.target as HTMLElement).id === id) {
        onClose();
      }
    };

    const handleEscClose = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keyup", handleEscClose);
    document.addEventListener("click", handleCloseClick);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
      document.removeEventListener("click", handleCloseClick);
    };
  });

  return (
    <div className={cl(style.popup, isOpen && style.popup_open)} id={id}>
      <div className={cl(style.popup__content, className)}>
        {hasButtonClose && (
          <button
            type="button"
            className={style.popup__close}
            onClick={onClose}
          />
        )}
        {isOpen && children}
      </div>
    </div>
  );
};

export default Popup;
