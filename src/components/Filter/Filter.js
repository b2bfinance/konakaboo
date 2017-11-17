import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Button from '../Button';
import Clear from 'material-ui-icons/Clear';
import CheckBoxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import RadioButtonUnchecked from 'material-ui-icons/RadioButtonUnchecked';
import CheckBox from 'material-ui-icons/CheckBox';
import RadioButtonChecked from 'material-ui-icons/RadioButtonChecked';
import { toggleFilter } from '../../actions/filter';

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
  padding: .2rem .3rem;
`

const FilterClearButton = Button.extend`
  padding: 0;
  width: inherit;
`

const FilterBody = styled.div`
  background-color: ${props => props.theme.filterBodyColor};
`

const FilterChoice = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: .3rem;

  svg {
    height: 1.125rem;
    margin: 0 .185rem;
    width: 1.125rem;
  }

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

class Filter extends Component {
  handleChoiceClick = (choiceIndex) => {
    const { dispatch, groupIndex } = this.props;
    dispatch(toggleFilter(groupIndex, choiceIndex));
  }

  renderCheckPoint(chosen) {
    const { multiChoice } = this.props.filter;

    if (chosen) {
      return (
        multiChoice
          ? <CheckBox />
          : <RadioButtonChecked />
      )
    }

    return (
      multiChoice
        ? <CheckBoxOutlineBlank />
        : <RadioButtonUnchecked />
    )
  }

  render() {
    const { title, choices } = this.props.filter;

    return (
      <FilterWrapper>
        <FilterHeader>
          <span>{title}</span>
          <FilterClearButton title={`Clear All ${title} Filters`}>
            <Clear />
          </FilterClearButton>
        </FilterHeader>
        <FilterBody>
          {
            choices.map((choice, i) => (
              <FilterChoice
                onClick={() => this.handleChoiceClick(i)}
                key={choice.value}
                chosen={choice.chosen}
              >
                {choice.label}
                {this.renderCheckPoint(choice.chosen)}
              </FilterChoice>
            ))
          }
        </FilterBody>
      </FilterWrapper>
    );
  }
}

const mapStateToProps = ({filters}) => ({
  selectedCount: filters.selectedCount,
});

export default connect(mapStateToProps)(Filter);
