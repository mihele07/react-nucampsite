import * as ActionsTypes from "./ActionTypes";

export const Campsites = (
  state = {
    isLoading: true,
    errMess: null,
    campsites: [],
  },
  action
) => {
  switch (action.type) {
    case ActionsTypes.ADD_CAMPSITES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        campsites: action.payload,
      };
    case ActionsTypes.CAMSITESS_LOADING:
      return { ...state, isLoading: true, errMess: null, campsites: [] };
    case ActionsTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
