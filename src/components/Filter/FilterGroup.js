import React from 'react';
import { connect } from 'react-redux';
import { removeGroupFilters } from '../../actions/filter';
import { queries } from '../../utils/media';
import styled from 'styled-components';
import Button from '../Button';
import Clear from 'material-ui-icons/Clear';
import FilterList from './FilterList';
import Col from '../Col';

const FilterWrapper = Col.extend`
  border-radius: .2rem;
  margin-bottom: 1rem;

  ${queries.tablet`
    padding-right: 1rem;

    &:last-child {
      padding-right: 0;
    }
  `}
`

const FilterHeader = styled.div`
  align-items: center;
  background-color: ${props => props.theme.filterHeaderBackground};
  color: ${props => props.theme.filterHeaderColor};
  display: flex;
  justify-content: space-between;
  padding: .45rem .65rem;
`

const FilterBody = styled.div`
  background-color: ${props => props.theme.filterBodyColor};
`

const FilterFooter = FilterBody.extend`
  cursor: pointer;
  border-top: 1px solid ${props => props.theme.filterFooterBorderColor};
  padding: .35rem;
  text-decoration: underline;
  text-align: center;
`

const FilterGroup = ({
  filter,
  group,
  onClearFilters,
}) => (
  <FilterWrapper phone="100" tablet="50" desktop="25">
    <FilterHeader>
      <span>{filter.title}</span>
    </FilterHeader>
    <FilterBody>
      <FilterList
        multi={filter.multiChoice}
        choices={filter.choices}
        group={group}
       />
    </FilterBody>
    <FilterFooter onClick={() => onClearFilters(group)}>
      Clear Filters
    </FilterFooter>
  </FilterWrapper>
);

const mapDispatchToProps = {
  onClearFilters: removeGroupFilters,
};

export default connect(() => ({}), mapDispatchToProps)(FilterGroup);
