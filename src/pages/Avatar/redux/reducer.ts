import { IAction, IStateAvatar } from "../../../interfaces";
import * as actionType from "./actionsTypes";

const initialState = {
  avatar: "",
  progressUpload: 0,
};

export const avatarReducer = (
  state: IStateAvatar = initialState,
  action: IAction
): IStateAvatar => {
  switch (action.type) {
    case actionType.SET_AVATAR: {
      return {
        ...state,
        avatar: action.payload,
      };
    }
    case actionType.SET_PROGRESS: {
      return {
        ...state,
        progressUpload: action.payload,
      };
    }
    case actionType.COMPLETED_UPLOAD: {
      return {
        ...state,
        avatar: action.payload.url,
        progressUpload: action.payload.progress,
      };
    }
    default:
      return state;
  }
};
