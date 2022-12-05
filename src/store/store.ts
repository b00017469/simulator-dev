import { combineReducers, createStore } from 'redux';

import { sidebarReducer } from '../features/sidebar/reducer/sidebarReducer';
import { trainingReducer } from '../features/training/reducer/trainingReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  training: trainingReducer,
});

export const store = createStore(rootReducer);

export type AppRootState = ReturnType<typeof rootReducer>;
