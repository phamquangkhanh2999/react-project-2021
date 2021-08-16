import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actRemoveProductInCart, actUpdateProductInCart } from '../actions';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Message from '../constants/Message';
import { actChangeMessage } from '../actions/index';

class CartContainer extends Component {
  render() {
    var { cart } = this.props;

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    var { onUpdateProduct, onChangeMessage, onDeleteProductInCart } =
      this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProduct={onUpdateProduct}
          />
        );
      });
    }
    return result;
  };
  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProduct: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
