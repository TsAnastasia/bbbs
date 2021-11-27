import React, { FC } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import AboutPage from "../../pages/about/AboutPage";
import { AppRoutesEnum } from "../../routes";

const appRoutes: RouteObject[] = [
  { path: "*", element: "not found" },
  { path: AppRoutesEnum.MAIN, element: "MAIN" },
  { path: AppRoutesEnum.ABOUT, element: <AboutPage /> },
  { path: AppRoutesEnum.CALENDAR, element: "CALENDAR" },
  { path: AppRoutesEnum.EVENTS, element: "EVENTS" },
  { path: AppRoutesEnum.QUESTIONS, element: "QUESTIONS" },
  {
    path: AppRoutesEnum.ARCHIVE,
    children: [
      { path: "*", element: <Navigate to={AppRoutesEnum.ARCHIVE} /> },
      { path: "", element: "ARCHIVE" },
      { path: AppRoutesEnum.ARCHIVE_GUIDE, element: "ARCHIVE_GUIDE" },
      { path: AppRoutesEnum.ARCHIVE_VIDEO, element: "ARCHIVE_VIDEO" },
      { path: AppRoutesEnum.ARCHIVE_ARTICLES, element: "ARCHIVE_ARTICLES" },
      { path: AppRoutesEnum.ARCHIVE_MOVIES, element: "ARCHIVE_MOVIES" },
      { path: AppRoutesEnum.ARCHIVE_BOOKS, element: "ARCHIVE_BOOKS" },
    ],
  },
  { path: AppRoutesEnum.CHILDREN_RIGHTS, element: "CHILDREN_RIGHTS" },
  { path: AppRoutesEnum.STORIES, element: "STORIES" },
  { path: AppRoutesEnum.PROFILE, element: "PROFILE" },
];

const AppRouter: FC = () => {
  const routing = useRoutes(appRoutes);

  return routing;
};

export default AppRouter;