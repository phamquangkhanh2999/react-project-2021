import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi('products', 'GET', null).then((res) => {
      // setProducts(res.data);
      dispatch(actFetchProducts(res.data));
    });
  };
};
export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

// delete

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, 'DELETE', null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};
export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCTS,
    id,
  };
};

// add
export const actAddProductRequest = (products) => {
  return (dispatch) => {
    return callApi('products', 'POST', products).then((res) => {
      dispatch(actDeleteProduct(res.data));
    });
  };
};
export const actAddProduct = (products) => {
  return {
    type: Types.ADD_PRODUCTS,
    products,
  };
};

//edit
export const actEditProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, 'GET', id).then((res) => {
      dispatch(actEditProduct(res.data));
    });
  };
};
export const actEditProduct = (products) => {
  return {
    type: Types.ADD_PRODUCTS,
    products,
  };
};
