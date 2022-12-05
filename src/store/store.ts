import { combineReducers, createStore } from 'redux';

import { sidebarReducer } from '../features/sidebar/reducer/sidebarReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export const store = createStore(rootReducer);

export type AppRootState = ReturnType<typeof rootReducer>;
