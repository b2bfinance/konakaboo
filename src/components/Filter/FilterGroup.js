import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../Button';
import Clear from 'material-ui-icons/Clear';
import FilterList from './FilterList';
import { removeGroupFilters } from '../../actions/filter';

const FilterWrapper = styled.div`
  border-radius: .2rem;
  margin-bottom: 1rem;
`

const FilterHeader = styled.div`
  align-items: center;
  background-color: ${props => props.theme.filterHeaderBackground};
  color: ${props => props.theme.filterHeaderColor};
  display: flex;
  justify-content: space-between;
  padding: .35rem .45rem;
`

const FilterClearButton = Button.extend`
  padding: 0;
  width: inherit;
`

const FilterBody = styled.div`
  background-color: ${props => props.theme.filterBodyColor};
`

const FilterGroup = ({
  filter,
  group,
  onClearFilters,
}) => (
  <FilterWrapper>
    <FilterHeader>
      <span>{filter.title}</span>
      <FilterClearButton
        onClick={() => onClearFilters(group)}
        title={`Clear All ${filter.title} Filters`}>
        <Clear />
      </FilterClearButton>
    </FilterHeader>
    <FilterBody>
      <FilterList
        multi={filter.multiChoice}
        choices={filter.choices}
        group={group}
       />
    </FilterBody>
  </FilterWrapper>
);

const mapDispatchToProps = {
  onClearFilters: removeGroupFilters,
};

export default connect(() => ({}), mapDispatchToProps)(FilterGroup);
