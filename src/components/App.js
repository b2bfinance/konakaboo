import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import Col from './Col';
import Product from './Product';
import Filter from './Filter';
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
`;

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadProducts());
  }

  render() {
    const { filters } = this.props;

    return (
      <AppContainer>
        {filters.length && (
          <Row>
            <Filter />
          </Row>
        )}
        <Row>
          <Col phone="100">
            <Product />
          </Col>
        </Row>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  const { filters, products } = state;

  return {
    filters: filters.available,
    products: products.items
  };
};

export default connect(mapStateToProps)(App);
