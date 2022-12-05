import { SubCategoryType } from '../../sidebar/reducer/sidebarReducer';

const initialState = {
  userId: 'testUserId',
  trainingCode: {
    id: '',
    title: 'Категория не выбрана',
    code: "I'll be the fastest coder!",
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
    default:
      return state;
  }
};

export const getCode = (trainingCode: SubCategoryType) =>
  ({ type: 'TRAINING/GET-CODE', payload: trainingCode } as const);

type InitialState = typeof initialState;

export type TrainingReducerActions = ReturnType<typeof getCode>;
