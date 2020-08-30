import * as actionType from "./actionsTypes";
import { IAction } from "../../../interfaces";

export const setAvatar = (url: string): IAction => ({
  type: actionType.SET_AVATAR,
  payload: url,
});

export const setProgress = (progress: number): IAction => ({
  type: actionType.SET_PROGRESS,
  payload: progress
});

export const completedUpload = (url: string, progress: number): IAction => ({
  type: actionType.COMPLETED_UPLOAD,
  payload: {url, progress}
})

export const uploadAvatar = (file:any, options: any): IAction => ({
  type: actionType.UPLOAD_AVATAR,
  payload: {file, options}
})
