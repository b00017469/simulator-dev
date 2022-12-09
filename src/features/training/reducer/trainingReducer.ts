import { SubCategoryType } from '../../categorySelector/reducer/categorySelectorReducer';

const initialState = {
  userId: 'testUserId',
  trainingCode: {
    id: '',
    title: 'Категория не выбрана',
    code: '',
    maxUsersSpeed: 0,
  },
  stats: {
    speedTyping: 0,
    mistakesCount: 0,
    countAttempts: 0,
  },
};

export const trainingReducer = (
  state: InitialState = initialState,
  action: TrainingReducerActions,
): InitialState => {
  switch (action.type) {
    case 'TRAINING/CODE-GOT': {
      return { ...state, trainingCode: action.payload };
    }
    case 'TRAINING/SPEED-CHANGED': {
      return { ...state, stats: { ...state.stats, speedTyping: action.payload } };
    }
    case 'TRAINING/MISTAKES-COUNT-CHANGED': {
      return { ...state, stats: { ...state.stats, mistakesCount: action.payload } };
    }
    default:
      return state;
  }
};

export const getCode = (trainingCode: SubCategoryType) =>
  ({ type: 'TRAINING/CODE-GOT', payload: trainingCode } as const);
export const setSpeed = (speed: number) =>
  ({ type: 'TRAINING/SPEED-CHANGED', payload: speed } as const);
export const setMistakesCount = (mistakesCount: number) =>
  ({ type: 'TRAINING/MISTAKES-COUNT-CHANGED', payload: mistakesCount } as const);

type InitialState = typeof initialState;

export type TrainingReducerActions =
  | ReturnType<typeof getCode>
  | ReturnType<typeof setSpeed>
  | ReturnType<typeof setMistakesCount>;
