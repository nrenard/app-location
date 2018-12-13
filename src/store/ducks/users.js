export const Types = {
  ADD_REQUEST: "users/ADD_REQUEST",
  ADD_SUCCESS: "users/ADD_SUCCESS",
  REMOVE: "users/REMOVE"
};

const INITIAL_STATE = {
  users: []
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [action.payload.data, ...state.users]
      };
    case Types.REMOVE:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (user, lngLat) => ({
    type: Types.ADD_REQUEST,
    payload: { user, lngLat }
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  removeUser: id => ({
    type: Types.REMOVE,
    payload: { id }
  })
};
