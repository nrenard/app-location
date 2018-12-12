import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators } from "../ducks/users";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/${action.payload.user}`);

    const isDuplicated = yield select(state =>
      state.users.users.find(user => user.id === data.id)
    );

    if (!isDuplicated) {
      yield put(Creators.addUserSuccess(data));
    }
  } catch (err) {}
}
