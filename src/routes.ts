export enum AppRoutesEnum {
  MAIN = "/main",
  ABOUT = "/about",
  CALENDAR = "/calendar",
  EVENTS = "/events",
  QUESTIONS = "/questions",
  ARCHIVE = "/archive",
  ARCHIVE_GUIDE = "guide",
  ARCHIVE_VIDEO = "video",
  ARCHIVE_ARTICLES = "articles",
  ARCHIVE_MOVIES = "movies",
  ARCHIVE_BOOKS = "books",
  CHILDREN_RIGHTS = "/children-rights",
  STORIES = "/stories",
  PROFILE = "/profile",
  NOT_FOUND = "/not-found",
}

export enum ExternalLinkEnum {
  FACEBOOK = "https://www.facebook.com/BigBrothers.BigSisters.Russia",
  VK = "https://vk.com/big.brothers.big.sisters",
  INSTAGRAM = "https://www.instagram.com/nastavniki_org",
  YOUTUBE = "https://www.youtube.com/user/Nastavniki",
  ORGANIZATION = "https://www.nastavniki.org/o-nas/ob-organizaczii",
  HELP_MONEY = "https://www.nastavniki.org/campaign/pomoch-dengami",
  YANDEX_PRAKTIKUM = "https://praktikum.yandex.ru",
  DESIGN = "https://krkr.design",
  MENTORING = "https://www.nastavniki.org/volontyorstvo/kak-stat-volonterom/",
  PARTHERSHIP = "https://www.nastavniki.org/oficzialno/korporativnyim-partnyoram/",
}

type ExternalLinkType = {
  url: ExternalLinkEnum;
  name: string;
};

type LinkType = {
  route: string;
  name: string;
};

type HeaderLinkType = {
  route: AppRoutesEnum;
  name: string;
  children?: LinkType[];
};

export const HEADER_LINKS: HeaderLinkType[] = [
  { route: AppRoutesEnum.CALENDAR, name: "Календарь" },
  { route: AppRoutesEnum.EVENTS, name: "Куда пойти" },
  { route: AppRoutesEnum.QUESTIONS, name: "Вопросы" },
  {
    route: AppRoutesEnum.ARCHIVE,
    name: "Читать и смотреть",
    children: [
      {
        route: `${AppRoutesEnum.ARCHIVE}/${AppRoutesEnum.ARCHIVE_GUIDE}`,
        name: "Справочник",
      },
      {
        route: `${AppRoutesEnum.ARCHIVE}/${AppRoutesEnum.ARCHIVE_VIDEO}`,
        name: "Видео",
      },
      {
        route: `${AppRoutesEnum.ARCHIVE}/${AppRoutesEnum.ARCHIVE_ARTICLES}`,
        name: "Статьи",
      },
      {
        route: `${AppRoutesEnum.ARCHIVE}/${AppRoutesEnum.ARCHIVE_MOVIES}`,
        name: "Фильмы",
      },
      {
        route: `${AppRoutesEnum.ARCHIVE}/${AppRoutesEnum.ARCHIVE_BOOKS}`,
        name: "Книги",
      },
    ],
  },
  { route: AppRoutesEnum.CHILDREN_RIGHTS, name: "Права детей" },
  { route: AppRoutesEnum.STORIES, name: "Истории" },
];

export const FOOTER_LINKS: LinkType[] = [
  { route: AppRoutesEnum.ABOUT, name: "О проекте" },
  { route: AppRoutesEnum.CALENDAR, name: "Календарь" },
  { route: AppRoutesEnum.EVENTS, name: "Куда пойти" },
  { route: AppRoutesEnum.QUESTIONS, name: "Вопросы" },
  { route: AppRoutesEnum.ARCHIVE, name: "Читать и смотреть" },
  { route: AppRoutesEnum.CHILDREN_RIGHTS, name: "Права детей" },
  { route: AppRoutesEnum.STORIES, name: "Истории" },
];

// RU: Ссылки на соц сети
export const SOCIAL_LINKS: ExternalLinkType[] = [
  { url: ExternalLinkEnum.FACEBOOK, name: "facebook" },
  { url: ExternalLinkEnum.VK, name: "vkontakte" },
  { url: ExternalLinkEnum.INSTAGRAM, name: "instagram" },
  { url: ExternalLinkEnum.YOUTUBE, name: "youtube" },
];
