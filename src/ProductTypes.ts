export type ProductColumn = {
  label: string;
  value: string;
  subtext: string;
};

export type ProductDetailedRow = {
  label: string;
  value: string;
};

export type ProductDetailed = {
  title: string;
  rows: ProductDetailedRow[];
};

export type ProductLinks = {
  apply: string;
  logo: string;
};

export type ProductMetaConfirm = {
  description: string;
  heading: string;
};

export type ProductMeta = {
  faded: boolean;
  confirm: ProductMetaConfirm;
};

export type Product = {
  id: string;
  issuer: string;
  title: string;
  brand: string;
  disclaimer: string;
  description: string;
  highlighted: boolean;
  labels: string[];
  columns: ProductColumn[];
  detailed: ProductDetailed[];
  feature_point: string;
  links: ProductLinks;
  meta: ProductMeta;
};

export type ProductList = Product[];

export type ProductFilterChoice = {
  label: string;
  value: string;
};

export type ProductFilter = {
  title: string;
  key: string;
  multiChoice: boolean;
  selected: string[];
  choices: ProductFilterChoice[];
};
