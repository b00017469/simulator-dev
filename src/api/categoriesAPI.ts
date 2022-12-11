import { codeCategories } from '../db/codeCategories';

export const categoriesAPI = {
  getCategoriesData() {
    return new Promise(resolve => {
      resolve(codeCategories);
    });
  },
};
