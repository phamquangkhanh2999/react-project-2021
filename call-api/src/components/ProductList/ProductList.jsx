import React from 'react';

export default function ProductList(props) {
  return (
    <>
      <div className='panel panel-primary'>
        <div className='panel-heading '>
          <h3 className='panel-title'>Danh Sach San Pham</h3>
        </div>
        <div className='panel-body'>
          <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Ma</th>
                <th>Ten</th>
                <th>Gia</th>
                <th>Trang Thai</th>
                <th>Hanh Dong</th>
              </tr>
            </thead>
            <tbody>
              {/* Product item */}
              {props.children}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
