export const Types = {
  OPEN_MODAL: "modal/OPEN_MODAL",
  CLOSED_MODAL: "modal/CLOSED_MODAL"
};

const INITIAL_STATE = {
  modal: false
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return {
        ...state,
        modal: true
      };

    case Types.CLOSED_MODAL:
      return {
        ...state,
        modal: false
      };

    default:
      return state;
  }
}

export const Creators = {
  openModal: () => ({
    type: Types.OPEN_MODAL,
    payload: null
  }),
  closedModal: () => ({
    type: Types.CLOSED_MODAL,
    payload: null
  })
};
