export type Project = {
  id: string;
  title: string;
  links: ProjectLinks[];
  devtools: string[];
  images: {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
  };
};

export type ProjectLinks = {
  name: string;
  url: string;
  default: boolean;
};
