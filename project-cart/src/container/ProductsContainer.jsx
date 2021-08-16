import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../actions/index';

class ProductsContainer extends Component {
  render() {
    var { products, onAddToCart, onChangeMessage } = this.props;
    return (
      <Products>
        {products.map((product, index) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          />
        ))}
      </Products>
    );
  }
}
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imgae: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
