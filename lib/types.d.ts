export type AboutType = {
  _id?: string;
  displayName: string;
  desc: string;
  fullName: string;
  nickname: string;
  age: number;
  birthday: string;
  sex: string;
  nationality: string;
  status: string;
  languages: string;
};

export type ProjectType = {
  _id?: string;
  href: string;
  ariaLabel: string;
  src: string;
  alt?: string;
  title: string;
  desc: string;
  website: string;
  github: string;
  slug?: string;
};

export type TechStackType = {
  _id: string;
  ariaLabel: string;
  href: string;
  src: string;
  alt: string;
};

export type TopicType = {
  _id?: string;
  title: string;
  desc: string;
};
