import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from 'styled-components';

const FilterGroup = style.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

class FilterList extends Component {
  render() {
    const { filters } = this.props;

    return (
      <div>
      {
        filters.map(filter => (
          <div>{filter.title}</div>
        ))
      }
      </div>
    );
  }
}

export default connect(({filters}) => ({filters}))(FilterList);
