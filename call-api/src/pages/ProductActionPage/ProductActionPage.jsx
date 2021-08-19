import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';
import { connect } from 'react-redux';
import {
  actAddProductRequest,
  actEditProductRequest,
} from '../../actions/index';

function ProductActionPage(props) {
  const [state, setState] = useState({
    id: '',
    txtName: '',
    txtPrice: '',
    chkbStatus: '',
  });

  useEffect(() => {
    var { match } = props;
    if (match) {
      const id = match.params.id;
      callApi(`products/${id}`, 'GET', null).then((res) => {
        const { id, name, price, status } = res.data;
        setState({
          id: id,
          txtName: name,
          txtPrice: price,
          chkbStatus: status,
        });
      });
    }
  }, []);

  const handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    const { txtName, txtPrice, chkbStatus, id } = state;
    var { history } = props;
    const product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    if (id) {
      callApi(`products/${id}`, 'PUT', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => {
        history.goBack();
      });
    } else {
      props.onAddProduct(product);
      history.goBack();
    }
  };
  return (
    <>
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
        <form onSubmit={onSave}>
          <legend>Them San Pham</legend>
          <div className='form-group'>
            <label>Ten San Pham</label>
            <input
              type='text'
              className='form-control'
              name='txtName'
              value={state.txtName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Gia</label>
            <input
              type='number'
              className='form-control'
              name='txtPrice'
              value={state.txtPrice}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Trang Thai</label>
          </div>
          <div className='checkbox'>
            <label>
              <input
                type='checkbox'
                name='chkbStatus'
                value={state.chkbStatus}
                onChange={handleChange}
                checked={state.chkbStatus}
              />
              Con Hang
            </label>
          </div>
          <button type='submit' className='btn btn-primary mr-10'>
            Luu Lai
          </button>
          <Link to='/product-list' className='btn btn-danger '>
            Huy Bo
          </Link>
        </form>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state.itemEditting);
  return {
    itemEditting: state.itemEditting,
  };
};
const mapDispathToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actEditProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ProductActionPage);
