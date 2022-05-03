import ActionTypes from "./../actions";
const initialState = {
  info: {},
};
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_INFO:
      return {
        ...state,
        info: action.info,
      };
    default:
      return { ...state };
  }
};
export default infoReducer;
