import { codeCategories } from '../../../db/codeCategories';

const initialState = {
  categories: [
    {
      id: '',
      title: '',
      subcategories: [
        {
          id: '',
          title: '',
          code: '',
        },
      ],
    },
  ],
  isToggle: false,
};

export const sidebarReducer = (
  state: InitialState = initialState,
  action: SidebarReducerActions,
): InitialState => {
  switch (action.type) {
    case 'SIDEBAR/GET-CATEGORIES': {
      return { ...state, categories: codeCategories, isToggle: false };
    }
    case 'SIDEBAR/SET-CATEGORIES-SEARCH': {
      const foundCategories = codeCategories.reduce(
        (result: CategoryType[], category: CategoryType) => {
          const subcategory = category.subcategories.filter(sub =>
            sub.title.toUpperCase().includes(action.payload.categoryTitle.toUpperCase()),
          );

          if (subcategory.length > 0)
            result.push({ ...category, subcategories: [...subcategory] });

          return result;
        },
        [],
      );

      return { ...state, categories: foundCategories, isToggle: true };
    }
    default:
      return state;
  }
};

export const getCategories = () => ({ type: 'SIDEBAR/GET-CATEGORIES' } as const);
export const setCategoriesSearch = (categoryTitle: string) =>
  ({ type: 'SIDEBAR/SET-CATEGORIES-SEARCH', payload: { categoryTitle } } as const);

type InitialState = typeof initialState;

export type CategoryType = {
  id: string;
  title: string;
  subcategories: SubCategoryType[];
};

export type SubCategoryType = {
  id: string;
  title: string;
  code: string;
};

export type SidebarReducerActions =
  | ReturnType<typeof getCategories>
  | ReturnType<typeof setCategoriesSearch>;
