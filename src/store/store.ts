import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
  categorySelectorReducer,
  CategorySelectorReducerActions,
} from '../features/categorySelector/reducer/categorySelectorReducer';
import {
  trainingReducer,
  TrainingReducerActions,
} from '../features/training/reducer/trainingReducer';

const rootReducer = combineReducers({
  selector: categorySelectorReducer,
  training: trainingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootState = ReturnType<typeof rootReducer>;

export type AppActions = CategorySelectorReducerActions | TrainingReducerActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  AppActions
>;

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActions>;
