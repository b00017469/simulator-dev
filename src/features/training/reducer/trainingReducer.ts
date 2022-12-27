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
    linesWithMistakes: [] as number[],
  },
  stats: {
    bestUserSpeed: 0,
    minCountMistakes: null as Nullable<number>,
    countAttempts: 0,
  },
  mode: 'instant check mode' as ModeTyping,
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
    case 'TRAINING/CURRENT-CHARS-CHANGED': {
      return {
        ...state,
        userCode: {
          ...state.userCode,
          currentUserChar: action.payload.currentUserChar,
          currentRightChar: action.payload.currentRightChar,
        },
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
    case 'TRAINING/USER-CODE-CLEARED': {
      return { ...state, userCode: { ...initialState.userCode } };
    }
    case 'TRAINING/ALL-CLEARED': {
      return {
        ...state,
        userCode: { ...initialState.userCode },
        trainingCode: { ...initialState.trainingCode },
        stats: { ...initialState.stats },
      };
    }
    case 'TRAINING/MODE-CHANGED': {
      return { ...state, mode: action.payload };
    }
    case 'TRAINING/LINES-WITH-MISTAKES-CHANGED': {
      return {
        ...state,
        userCode: { ...state.userCode, linesWithMistakes: action.payload },
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
export const setCurrentChars = (currentUserChar: string, currentRightChar: string) =>
  ({
    type: 'TRAINING/CURRENT-CHARS-CHANGED',
    payload: { currentUserChar, currentRightChar },
  } as const);
export const updateStats = (speedTyping: number, mistakesCount: number) =>
  ({ type: 'TRAINING/STATS-UPDATED', payload: { speedTyping, mistakesCount } } as const);
export const clearUserCode = () => ({ type: 'TRAINING/USER-CODE-CLEARED' } as const);
export const clearAll = () => ({ type: 'TRAINING/ALL-CLEARED' } as const);
export const changeMode = (mode: ModeTyping) =>
  ({ type: 'TRAINING/MODE-CHANGED', payload: mode } as const);
export const setLinesWithMistakes = (linesWithMistakes: number[]) =>
  ({ type: 'TRAINING/LINES-WITH-MISTAKES-CHANGED', payload: linesWithMistakes } as const);

type InitialState = typeof initialState;

export type TrainingReducerActions =
  | ReturnType<typeof getCode>
  | ReturnType<typeof setUserCodeText>
  | ReturnType<typeof setSpeed>
  | ReturnType<typeof setMistakesCount>
  | ReturnType<typeof setCurrentChars>
  | ReturnType<typeof updateStats>
  | ReturnType<typeof clearUserCode>
  | ReturnType<typeof clearAll>
  | ReturnType<typeof setLinesWithMistakes>
  | ReturnType<typeof changeMode>;

export type ModeTyping = 'instant check mode' | 'hacker mode' | 'end check mode';
