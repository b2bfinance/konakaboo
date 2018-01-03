import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import Col from './Col';
import ProductList from './Product';
import Filter from './Filter';
import { loadProducts } from '../actions/products';

export const StyledAppContainer = Row.extend`
  font-family: ${props => props.theme.mainFontFamily};
  font-weight: ${props => props.theme.mainNormalFontWeight};
  font-size: ${props => props.theme.mainFontSize};
  color: ${props => props.theme.mainColor};

  * {
    box-sizing: border-box;
  }
`;

export class AppContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadProducts());
  }

  render() {
    const { filterCount, products, hasFetched, isFetching, error } = this.props;

    return (
      <StyledAppContainer>
        {filterCount > 0 && <Filter />}
        <Row>
          <Col phone="100">
            <ProductList
              products={products}
              hasFetched={hasFetched}
              isFetching={isFetching}
              error={error}
            />
          </Col>
        </Row>
      </StyledAppContainer>
    );
  }
}

export const mapStateToProps = state => {
  const { filters, products } = state;

  return {
    filterCount: filters.available.length,
    isFetching: products.isFetching,
    hasFetched: !!products.items,
    products: products.items,
    error: products.error
  };
};

export default connect(mapStateToProps)(AppContainer);
