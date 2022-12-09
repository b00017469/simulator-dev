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
          maxUsersSpeed: 0,
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
    case 'SELECTOR/CATEGORIES-GOT': {
      return {
        ...state,
        categories: action.payload.data,
        isToggleSearchedCategory: false,
      };
    }
    case 'SELECTOR/CATEGORIES-RESULT-SEARCH': {
      const foundCategories = action.payload.data.reduce(
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

export const getCategories = (data: CategoryType[]) =>
  ({ type: 'SELECTOR/CATEGORIES-GOT', payload: { data } } as const);
export const setCategoriesSearch = (categoryTitle: string, data: CategoryType[]) =>
  ({
    type: 'SELECTOR/CATEGORIES-RESULT-SEARCH',
    payload: { categoryTitle, data },
  } as const);

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
  maxUsersSpeed: number;
};

export type CategorySelectorReducerActions =
  | ReturnType<typeof getCategories>
  | ReturnType<typeof setCategoriesSearch>;
