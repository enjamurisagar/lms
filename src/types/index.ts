export type RootLayoutType = {
  children: React.ReactNode;
};

export type NavItemType = {
  name: string;
  href: string;
  subNavs?: {
    name: string;
    href: string;
  }[];
};

export type HomeCategoriesType = {
  name: string;
  coursesCount: number;
  image: string;
};

export type ButtonType = {
  className?: string;
  children: React.ReactNode;
};
