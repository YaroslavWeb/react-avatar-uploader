import { takeLatest, call, put } from "redux-saga/effects";

import { UPLOAD_AVATAR } from "./actionsTypes";
import { completedUpload } from "./actions";
import { uploadAvatarToServer } from "../../../utils/api";

export function* uploadAvatarWatcher() {
  yield takeLatest(UPLOAD_AVATAR, uploadAvatarFlow);
}

function* uploadAvatarFlow(action: any) {
  const res = yield call(uploadAvatarToServer, action.payload.file, action.payload.options);
  yield put(completedUpload(res.data.path, 0));
}
