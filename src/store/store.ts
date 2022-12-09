import { combineReducers, createStore } from 'redux';

import { categorySelectorReducer } from '../features/categorySelector/reducer/categorySelectorReducer';
import { trainingReducer } from '../features/training/reducer/trainingReducer';

const rootReducer = combineReducers({
  selector: categorySelectorReducer,
  training: trainingReducer,
});

export const store = createStore(rootReducer);

export type AppRootState = ReturnType<typeof rootReducer>;
