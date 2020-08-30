import { fork } from "redux-saga/effects";
import { uploadAvatarWatcher } from "./pages/Avatar/redux/saga";

// Собираем все саги (я знаю что он один, но на всякий случаи)

export default function* rootSaga() {
  yield fork(uploadAvatarWatcher);
}
