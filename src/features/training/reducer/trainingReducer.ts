import { Nullable } from '../../../common/types/Nullable';
import { SubCategoryType } from '../../categorySelector/reducer/categorySelectorReducer';

const initialState = {
  userId: 'testUserId',
  trainingCode: {
    id: '',
    title: 'Категория не выбрана',
    trainingCodeText: '',
    maxUsersSpeed: 0,
  },
  userCode: {
    userCodeText: '',
    currentUserChar: '',
    currentRightChar: '',
    currentSpeed: 0,
    currentMistakesCount: 0,
  },
  stats: {
    bestUserSpeed: 0,
    minCountMistakes: null as Nullable<number>,
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
    case 'TRAINING/USER-CODE-TEXT-CHANGED': {
      return { ...state, userCode: { ...state.userCode, userCodeText: action.payload } };
    }
    case 'TRAINING/SPEED-CHANGED': {
      return { ...state, userCode: { ...state.userCode, currentSpeed: action.payload } };
    }
    case 'TRAINING/MISTAKES-COUNT-CHANGED': {
      return {
        ...state,
        userCode: { ...state.userCode, currentMistakesCount: action.payload },
      };
    }
    case 'TRAINING/STATS-UPDATED': {
      const speed =
        action.payload.speedTyping > state.stats.bestUserSpeed
          ? action.payload.speedTyping
          : state.stats.bestUserSpeed;
      const minCount =
        state.stats.minCountMistakes &&
        state.stats.minCountMistakes < action.payload.mistakesCount
          ? state.stats.minCountMistakes
          : action.payload.mistakesCount;

      return {
        ...state,
        stats: {
          bestUserSpeed: speed,
          minCountMistakes: minCount,
          countAttempts: state.stats.countAttempts + 1,
        },
      };
    }
    default:
      return state;
  }
};

export const getCode = (trainingCode: SubCategoryType) =>
  ({ type: 'TRAINING/CODE-GOT', payload: trainingCode } as const);
export const setUserCodeText = (userCodeText: string) =>
  ({ type: 'TRAINING/USER-CODE-TEXT-CHANGED', payload: userCodeText } as const);
export const setSpeed = (speed: number) =>
  ({ type: 'TRAINING/SPEED-CHANGED', payload: speed } as const);
export const setMistakesCount = (mistakesCount: number) =>
  ({ type: 'TRAINING/MISTAKES-COUNT-CHANGED', payload: mistakesCount } as const);
export const updateStats = (speedTyping: number, mistakesCount: number) =>
  ({ type: 'TRAINING/STATS-UPDATED', payload: { speedTyping, mistakesCount } } as const);

type InitialState = typeof initialState;

export type TrainingReducerActions =
  | ReturnType<typeof getCode>
  | ReturnType<typeof setUserCodeText>
  | ReturnType<typeof setSpeed>
  | ReturnType<typeof setMistakesCount>
  | ReturnType<typeof updateStats>;
