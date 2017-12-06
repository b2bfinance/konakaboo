import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queries } from '../utils/media';
import { getChosenForGroup } from '../utils/filter';
import { setChosenFiltersForGroup } from '../actions/filter';
import styled, { css } from 'styled-components';
import Col from './Col';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

export const FilterWrapper = Col.extend`
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  position: relative;

  ${queries.tablet`
    padding-right: 1rem;

    &:last-child {
      padding-right: 0;
    }
  `};
`;

export const FilterFormControl = styled(FormControl)`
  width: 100%;
`;

export const FilterSelect = styled(Select)`
  &:hover {
    &:before {
      background-color: ${props => props.theme.filterHeaderBorder} !important;
    }
  }

  &:after {
    background-color: ${props => props.theme.filterHeaderBorder} !important;
  }
`;

export const FilterMenuItem = styled(MenuItem)`
  ${props =>
    props.selected &&
    css`
      background-color: ${props.theme.filterChosenBackground} !important;
      color: ${props.theme.filterChosenColor} !important;
    `};
`;

export class Filter extends Component {
  render() {
    const { filters, chosen, handleSelectChange } = this.props;

    return filters.map(({ title, multiChoice, choices, key }, i) => (
      <FilterWrapper key={key} phone="100" tablet="33.333" desktop="20">
        <FilterFormControl>
          <InputLabel htmlFor={key}>{title}</InputLabel>
          <FilterSelect
            multiple={multiChoice}
            value={getChosenForGroup(chosen, i)}
            onChange={e => handleSelectChange(i, e.target.value)}
            input={<Input id={key} />}
          >
            {choices.map(({ label, value }) => (
              <FilterMenuItem key={value} value={value}>
                {label}
              </FilterMenuItem>
            ))}
          </FilterSelect>
        </FilterFormControl>
      </FilterWrapper>
    ));
  }
}

export const mapDispatchToProps = {
  handleSelectChange: setChosenFiltersForGroup
};

export const mapStateToProps = ({ filters }) => ({
  chosen: filters.chosen,
  filters: filters.available
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
