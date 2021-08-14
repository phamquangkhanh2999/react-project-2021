import React, { Component } from 'react';

class Sort extends Component {
  onClickSort = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };
  render() {
    var { sortBy, sortValue } = this.props;
    return (
      <>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          <div className='dropdown'>
            <button
              className='btn btn-primary dropdown-toggle'
              type='button'
              id='dropdownMenu1'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='true'
            >
              Sắp Xếp <span className='fa fa-caret-square-o-down ml-5'></span>
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
              <li onClick={() => this.onClickSort('name', 1)}>
                <a href='/' role='button'>
                  <span className='fas fa-sort-alpha-down pr-5'>
                    Tên A-Z
                    {sortBy === 'name' && sortValue === 1 ? (
                      <i class='fas fa-check ml-5'></i>
                    ) : (
                      ''
                    )}
                  </span>
                </a>
              </li>
              <li onClick={() => this.onClickSort('name', -1)}>
                <a href='/' role='button'>
                  <span className='fas fa-sort-alpha-down-alt pr-5'>
                    Tên Z-A
                    {sortBy === 'name' && sortValue === -1 ? (
                      <i class='fas fa-check ml-5'></i>
                    ) : (
                      ''
                    )}
                  </span>
                </a>
              </li>
              <li role='separator' className='divider'></li>
              <li onClick={() => this.onClickSort('status', 1)}>
                <a href='/' role='button'>
                  Trạng Thái Kích Hoạt
                  {sortBy === 'status' && sortValue === 1 ? (
                    <i class='fas fa-check ml-5'></i>
                  ) : (
                    ''
                  )}
                </a>
              </li>
              <li onClick={() => this.onClickSort('status', -1)}>
                <a href='/' role='button'>
                  Trạng Thái Ẩn
                  {sortBy === 'status' && sortValue === -1 ? (
                    <i class='fas fa-check ml-5'></i>
                  ) : (
                    ''
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Sort;
