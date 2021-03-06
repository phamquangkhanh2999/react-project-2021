import * as Types from '../constants/ActionTypes';

var initialState = {};

const itemEditting = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default itemEditting;
