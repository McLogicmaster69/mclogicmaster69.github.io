import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "McLogicmaster69",
  DESCRIPTION:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  EMAIL: "email@domain.com",
};

export const HOME: Metadata = {
  TITLE: SITE.TITLE,
  DESCRIPTION: SITE.DESCRIPTION,
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const POSTS: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};
