import { all, takeLast } from "redux-saga/effects";

import addUser from "./user.js";

import { Types } from "../ducks/users";

export default function* rootSaga() {
  yield all([takeLast(Types.ADD_REQUEST, addUser)]);
}
