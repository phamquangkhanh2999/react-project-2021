import React from 'react';

export default function NotFoundPage() {
  return (
    <>
      <div className='container'>
        <div className='alert alert-warning'>
          <button
            type='button'
            class='close'
            data-dismiss='alert'
            aria-hidden='true'
          >
            &times;
          </button>
          <strong>Khong tim thay trang </strong>
        </div>
      </div>
    </>
  );
}
