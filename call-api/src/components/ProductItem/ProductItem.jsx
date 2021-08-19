import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  const { product, index } = props;
  const statusName = product.status ? 'Con Hang' : 'Het Hang';
  const statusClass = product.status ? 'warning' : 'default';
  const onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Ban chac chan muon xoa ?')) {
      props.onDelete(id);
    }
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className='btn btn-success mr-10'
          >
            Sua
          </Link>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => onDelete(product.id)}
          >
            Xoa
          </button>
        </td>
      </tr>
    </>
  );
}
