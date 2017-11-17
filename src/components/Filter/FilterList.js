import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';

class FilterList extends Component {
  render() {
    const { groups } = this.props;

    return (
      groups.map((filter, i) => (
        <Filter key={i} filter={filter} groupIndex={i}/>
      ))
    );
  }
}

const mapStateToProps = ({filters}) => ({
  groups: filters.groups,
});

export default connect(mapStateToProps)(FilterList);
