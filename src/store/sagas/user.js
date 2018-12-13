import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UsersCreators } from "../ducks/users";
import { Creators as ModalCreators } from "../ducks/modal";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/${action.payload.user}`);

    const isDuplicated = yield select(state =>
      state.users.users.find(user => user.id === data.id)
    );

    const user = {
      id: data.id,
      img: data.avatar_url,
      login: data.login,
      url: data.html_url,
      name: data.name,
      lngLat: action.payload.lngLat
    };

    if (!isDuplicated) {
      yield put(UsersCreators.addUserSuccess(user));
    }
  } catch (err) {}
}

export function* addUserSuccess() {
  yield put(ModalCreators.closedModal());
}
