import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
      <>
        <Search onSearh={this.props.onSearh} />

        <Sort
          onSort={this.props.onSort}
          sortBy={this.props.sortBy}
          sortValue={this.props.sortValue}
        />
      </>
    );
  }
}
export default Control;
