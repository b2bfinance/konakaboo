import React from 'react';
import { connect } from 'react-redux';
import FilterGroup from './FilterGroup';

const FilterGroupList = ({filters}) => filters.available.map((filter, i) => (
  <FilterGroup key={i} filter={filter} group={i} />
));

export default connect(({filters}) => ({filters}))(FilterGroupList);
