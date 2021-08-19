import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  actDeleteProductRequest,
  actFetchProductsRequest,
} from '../../actions/index';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';

function ProductListPage(props) {
  useEffect(() => {
    props.fetchAllProduct();
  }, []);

  const onDelete = (id) => {
    props.onDeleteProduct(id);
  };

  var showProducts = () => {
    var result = null;
    if (props.products.length > 0) {
      result = props.products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
          onDelete={onDelete}
        />
      ));
    }
    return result;
  };
  return (
    <>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <Link to='/product/add' className='btn  btn-info mb-10'>
          Them San Pham
        </Link>

        <ProductList>{showProducts(props.products)}</ProductList>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispathToProps = (dispatch, props) => {
  return {
    fetchAllProduct: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(ProductListPage);
