import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ICity } from "../../../API/auth/auth-interface";
import { useAppSelector } from "../../../hooks/redux";
import { changeUserCity, getAllCities } from "../../../redux/auth/auth-actions";
import style from "./changeCityForm.module.scss";

const ChangeCityForm: FC = () => {
  const dispatch = useDispatch();
  const { cities } = useAppSelector((state) => state.auth);

  const handleCityChoose = (city: ICity) => {
    dispatch(changeUserCity(city));
  };

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <div className={style.root}>
      <p className={style.title}>Выберите ваш город</p>
      <ul className={style.group}>
        {cities.main.map((city) => (
          <li key={city.id} className={style.item}>
            <button
              type="button"
              className={style.city}
              onClick={() => handleCityChoose(city)}
            >
              {city.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className={style.group}>
        {cities.another.map((city) => (
          <li key={city.id} className={style.item}>
            <button
              type="button"
              className={style.city}
              onClick={() => handleCityChoose(city)}
            >
              {city.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeCityForm;
