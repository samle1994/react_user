import ActionTypes from "./../actions";
const initialState = {
  info: {},
  product_list: [],
};
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_INFO:
      return {
        ...state,
        info: action.info,
      };
    case ActionTypes.PRODUCT_LIST:
      return {
        ...state,
        product_list: action.product_list,
      };
    default:
      return { ...state };
  }
};
export default infoReducer;
