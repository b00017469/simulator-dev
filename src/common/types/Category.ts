export type CategoryType = {
  id: string;
  title: string;
  subcategories: SubCategoryType[];
};

export type SubCategoryType = {
  id: string;
  title: string;
  code: codeType[];
};

type codeType = {
  row: number;
  content: string;
};
