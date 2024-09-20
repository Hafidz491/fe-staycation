export type navbarItem = {
  label: string;
  link: string;
};

export type icon = {
  id: number;
  img: string;
  count: number;
  desc: string;
};

export type itemProduct = {
  id: number;
  img: string;
  tittle: string;
  city: string;
  special?: string;
  option?: string;
  description?: string;
  fitur?: [string];
};
