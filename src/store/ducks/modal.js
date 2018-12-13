export const Types = {
  OPEN_MODAL: "modal/OPEN_MODAL",
  CLOSED_MODAL: "modal/CLOSED_MODAL"
};

const INITIAL_STATE = {
  modal: false,
  lngLat: null
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return {
        ...state,
        modal: true,
        lngLat: action.payload.lngLat
      };

    case Types.CLOSED_MODAL:
      return {
        ...state,
        modal: false,
        lngLat: null
      };

    default:
      return state;
  }
}

export const Creators = {
  openModal: lngLat => ({
    type: Types.OPEN_MODAL,
    payload: { lngLat }
  }),
  closedModal: () => ({
    type: Types.CLOSED_MODAL,
    payload: null
  })
};
