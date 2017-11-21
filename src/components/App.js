import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queries } from '../styled/helpers'
import Row from './Row';
import Col from './Col';
import ProductList from './Product/ProductList';
import FilterGroupList from './Filter/FilterGroupList';
import { loadProducts } from '../actions/products';

const AppContainer = Row.extend`
  font-family: ${props => props.theme.mainFontFamily};
  font-weight: ${props => props.theme.mainNormalFontWeight};
  font-size: ${props => props.theme.mainFontSize};
  color: ${props => props.theme.mainColor};

  * {
    box-sizing: border-box;
  }

  svg {
    height: 1.125rem;
    width: 1.125rem;
  }
`

const PaddedCol = Col.extend`
  ${queries.tablet`
    padding-left: 1.5rem;
  `}
`

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadProducts());
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
          <FilterGroupList />
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
    filters: filters.available,
    products: products.items,
  };
};

export default connect(mapStateToProps)(App);
