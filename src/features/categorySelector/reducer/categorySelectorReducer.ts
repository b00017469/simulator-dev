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
          maxUsersSpeed: '',
        },
      ],
    },
  ],
  isToggleSearchedCategory: false,
};

export const categorySelectorReducer = (
  state: InitialState = initialState,
  action: CategorySelectorReducerActions,
): InitialState => {
  switch (action.type) {
    case 'SELECTOR/GET-CATEGORIES': {
      return { ...state, categories: codeCategories, isToggleSearchedCategory: false };
    }
    case 'SELECTOR/SET-CATEGORIES-SEARCH': {
      const foundCategories = codeCategories.reduce(
        (result: CategoryType[], category: CategoryType) => {
          const subcategories = category.subcategories.filter(sub =>
            sub.title.toUpperCase().includes(action.payload.categoryTitle.toUpperCase()),
          );

          if (subcategories.length > 0)
            result.push({ ...category, subcategories: [...subcategories] });

          return result;
        },
        [],
      );

      return { ...state, categories: foundCategories, isToggleSearchedCategory: true };
    }
    default:
      return state;
  }
};

export const getCategories = () => ({ type: 'SELECTOR/GET-CATEGORIES' } as const);
export const setCategoriesSearch = (categoryTitle: string) =>
  ({ type: 'SELECTOR/SET-CATEGORIES-SEARCH', payload: { categoryTitle } } as const);

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
  maxUsersSpeed: string;
};

export type CategorySelectorReducerActions =
  | ReturnType<typeof getCategories>
  | ReturnType<typeof setCategoriesSearch>;
