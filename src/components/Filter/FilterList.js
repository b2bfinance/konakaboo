import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import CheckBoxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import RadioButtonUnchecked from 'material-ui-icons/RadioButtonUnchecked';
import CheckBox from 'material-ui-icons/CheckBox';
import RadioButtonChecked from 'material-ui-icons/RadioButtonChecked';
import { toggleFilters } from '../../actions/filter';

const FilterChoice = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: .35rem .45rem;

  ${props => props.chosen && css`
    background-color: ${props.theme.filterChosenBackground};
    color: ${props.theme.filterChosenColor};

    svg {
      fill: ${props.theme.filterChosenIconColor};
    }
  `}

  &:hover {
    background-color: ${props => props.theme.filterChosenBackground};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const isChosen = (chosen, group, filter) => chosen.indexOf(`${group}.${filter}`) !== -1;

function renderCheckPoint(selected, multi) {
  if (selected) {
    return (
      multi
        ? <CheckBox />
        : <RadioButtonChecked />
    )
  }

  return (
    multi
      ? <CheckBoxOutlineBlank />
      : <RadioButtonUnchecked />
  )
}

const FilterList = ({
  group,
  multi,
  choices,
  chosen,
  onChoiceClick
}) => choices.map((choice, i) => (
  <FilterChoice
    onClick={() => onChoiceClick(group, i)}
    key={choice.value}
    chosen={isChosen(chosen, group, i)}
  >
    {choice.label}
    {renderCheckPoint(isChosen(chosen, group, i), multi)}
  </FilterChoice>
));

const mapDispatchToProps = {
  onChoiceClick: toggleFilters
};

const mapStateToProps = ({filters}) => ({
  chosen: filters.chosen,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
