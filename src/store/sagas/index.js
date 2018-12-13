import { all, takeLatest } from "redux-saga/effects";

import { addUser, addUserSuccess } from "./user.js";

import { Types } from "../ducks/users";

export default function* rootSaga() {
  yield all([
    takeLatest(Types.ADD_REQUEST, addUser),
    takeLatest(Types.ADD_SUCCESS, addUserSuccess)
  ]);
}
