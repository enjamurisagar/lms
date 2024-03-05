import { HomeCategoriesType, NavItemType } from "../types";
export const navItems: NavItemType[] = [
  {
    name: "Home",
    href: "/",
    subNavs: [],
  },
  {
    name: "Courses",
    href: "/courses",
    subNavs: [],
  },
  {
    name: "Blog",
    href: "/blog",
    subNavs: [],
  },
  {
    name: "Page",
    href: "#",
    subNavs: [
      {
        name: "subNav1",
        href: "subnav1",
      },
      {
        name: "subNav1",
        href: "subnav1",
      },
      {
        name: "subNav1",
        href: "subnav1",
      },
    ],
  },
  {
    name: "Premium Theme",
    href: "/premium",
    subNavs: [],
  },
];

import ArtAndDesign from "../assets/home/artanddesign.png";
import Development from "../assets/home/development.png";
import Communication from "../assets/home/communication.png";
import Videography from "../assets/home/videography.png";
import Photography from "../assets/home/photography.png";
import Marketing from "../assets/home/marketing.png";
import ContentWriting from "../assets/home/contentwriting.png";
import Finance from "../assets/home/finance.png";
import Science from "../assets/home/science.png";
import Network from "../assets/home/network.png";
export const homeCategories: HomeCategoriesType[] = [
  {
    name: "Art & Design",
    coursesCount: 38,
    image: ArtAndDesign,
  },
  {
    name: "Development",
    coursesCount: 56,
    image: Development,
  },
  {
    name: "Communication",
    coursesCount: 24,
    image: Communication,
  },
  {
    name: "Videography",
    coursesCount: 10,
    image: Videography,
  },
  {
    name: "Photography",
    coursesCount: 9,
    image: Photography,
  },
  {
    name: "Marketing",
    coursesCount: 17,
    image: Marketing,
  },
  {
    name: "Content Writing",
    coursesCount: 13,
    image: ContentWriting,
  },
  {
    name: "Finance",
    coursesCount: 4,
    image: Finance,
  },
  {
    name: "Science",
    coursesCount: 14,
    image: Science,
  },
  {
    name: "Network",
    coursesCount: 6,
    image: Network,
  },
];
