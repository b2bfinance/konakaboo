import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Col from './Col';
import { default as ProductList } from './Product/List';
import { default as FilterList } from './Filter/List';
import { loadProducts } from '../actions/products';

import {
  resetFiltersForGroup,
  resetAllChosenFilters,
  setChosenFiltersForGroup
} from '../actions/filter';

export const Wrapper = styled.div`
  font-family: ${props => props.theme.mainFontFamily};
  font-weight: ${props => props.theme.mainNormalFontWeight};
  font-size: ${props => props.theme.mainFontSize};
  color: ${props => props.theme.mainColor};
  line-height: ${props => props.theme.mainLineHeight};

  * {
    box-sizing: border-box;
  }
`;

export class AppContainer extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const {
      filtersChosen,
      filtersAvailable,
      filterCount,
      products,
      cta,
      hasFetched,
      isFetching,
      error,
      handleResetFiltersForGroup,
      handleResetFilters,
      handleSetChosenForGroup
    } = this.props;

    return (
      <Wrapper>
        {filterCount > 0 && (
          <FilterList
            filtersChosen={filtersChosen}
            filtersAvailable={filtersAvailable}
            handleResetFiltersForGroup={handleResetFiltersForGroup}
            handleResetFilters={handleResetFilters}
            handleSetChosenForGroup={handleSetChosenForGroup}
          />
        )}
        <Grid>
          <Col phone="100">
            <ProductList
              cta={cta}
              products={products}
              hasFetched={hasFetched}
              isFetching={isFetching}
              error={error}
            />
          </Col>
        </Grid>
      </Wrapper>
    );
  }
}

export const mapDispatchToProps = {
  handleResetFiltersForGroup: resetFiltersForGroup,
  handleResetFilters: resetAllChosenFilters,
  handleSetChosenForGroup: setChosenFiltersForGroup,
  loadProducts
};

export const mapStateToProps = ({ config, filters, products }) => ({
  cta: config.cta,
  filtersChosen: filters.chosen,
  filtersAvailable: filters.available,
  filterCount: filters.available.length,
  isFetching: products.isFetching,
  hasFetched: !!products.items,
  products: products.items,
  error: products.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
