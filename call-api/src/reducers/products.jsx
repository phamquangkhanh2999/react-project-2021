import * as Types from '../constants/ActionTypes';

var initialState = [];
const findIndex = (products, id) => {
  let result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

const products = (state = initialState, action) => {
  var index = -1;
  const { id } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];

    case Types.DELETE_PRODUCTS:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];

    case Types.ADD_PRODUCTS:
      state.push(action.products);
      return [...state];

    default:
      return [...state];
  }
};
export default products;
