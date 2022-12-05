import { SubCategoryType } from '../../sidebar/reducer/sidebarReducer';

const initialState = {
  userId: 'testUserId',
  trainingCode: {
    id: '',
    title: 'Категория не выбрана',
    code: '',
    maxUsersSpeed: '',
  },
  stats: {
    speedTyping: '0',
    countMistakes: '0',
    countAttempts: '0',
  },
};

export const trainingReducer = (
  state: InitialState = initialState,
  action: TrainingReducerActions,
): InitialState => {
  switch (action.type) {
    case 'TRAINING/GET-CODE': {
      return { ...state, trainingCode: action.payload };
    }
    case 'TRAINING/SET-SPEED': {
      return { ...state, stats: { ...state.stats, speedTyping: action.payload } };
    }
    default:
      return state;
  }
};

export const getCode = (trainingCode: SubCategoryType) =>
  ({ type: 'TRAINING/GET-CODE', payload: trainingCode } as const);
export const setSpeed = (speed: string) =>
  ({ type: 'TRAINING/SET-SPEED', payload: speed } as const);

type InitialState = typeof initialState;

export type TrainingReducerActions =
  | ReturnType<typeof getCode>
  | ReturnType<typeof setSpeed>;
