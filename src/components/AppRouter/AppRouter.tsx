import React, { FC, useLayoutEffect } from "react";
import {
  Navigate,
  RouteObject,
  useLocation,
  useRoutes,
} from "react-router-dom";

import AboutPage from "../../pages/about/AboutPage";
import NotFoundPage from "../../pages/notFound/notFoundPage";
import RightsPage from "../../pages/rights/RightsPage";
import RightsArticlePage from "../../pages/rightsArticle/rightsArticlePage";
import { AppRoutesEnum } from "../../routes";

const appRoutes: RouteObject[] = [
  { path: "*", element: <NotFoundPage /> },
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
  {
    path: AppRoutesEnum.CHILDREN_RIGHTS,
    children: [
      { path: "*", element: <Navigate to={AppRoutesEnum.ARCHIVE} /> },
      { path: "", element: <RightsPage /> },
      { path: ":rightId", element: <RightsArticlePage /> },
    ],
  },
  { path: AppRoutesEnum.STORIES, element: "STORIES" },
  { path: AppRoutesEnum.PROFILE, element: "PROFILE" },
];

const AppRouter: FC = () => {
  const routing = useRoutes(appRoutes);
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return routing;
};

export default AppRouter;
