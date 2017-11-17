import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queries } from '../styled/helpers'
import Row from './Row';
import Col from './Col';
import ProductList from './Product/ProductList';
import FilterList from './Filter/FilterList';
import { loadProducts } from '../actions/products';

const AppContainer = Row.extend`
  font-family: ${props => props.theme.mainFontFamily};
  font-weight: ${props => props.theme.mainNormalFontWeight};
  font-size: ${props => props.theme.mainFontSize};
  color: ${props => props.theme.mainColor};

  * {
    box-sizing: border-box;
  }
`

const PaddedCol = Col.extend`
  ${queries.tablet`
    padding-left: 1.5rem;
  `}
`

class App extends Component {
  componentDidMount() {
    const { selectedCount, dispatch } = this.props;

    if (selectedCount > 0) {
      dispatch()
    } else {
      dispatch(loadProducts());
    }
  }

  render() {
    const { filters } = this.props;

    const singleColumn = (
      <Row>
        <Col phone="100">
          <ProductList />
        </Col>
      </Row>
    );

    const multiColumn = (
      <Row>
        <Col phone="100" tablet="25" desktop="15">
          <FilterList />
        </Col>
        <PaddedCol phone="100" tablet="75" desktop="85">
          <ProductList />
        </PaddedCol>
      </Row>
    );

    return (
      <AppContainer>
        {
          filters.length
          ? multiColumn
          : singleColumn
        }
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { filters, products } = state;

  return {
    selectedCount: filters.selectedCount,
    filters: filters.groups,
    isFetching: products.isFetching,
    products: products.items,
    error: products.error,
  };
};

export default connect(mapStateToProps)(App);
