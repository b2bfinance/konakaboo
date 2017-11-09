import React, { Component } from 'react';
import styled from 'styled-components';
import Row from './Row';
import Col from './Col';
import ProductList from './Product/ProductList';
import FilterList from './Filter/FilterList';

const AppContainer = Row.extend`
  * {
    box-sizing: border-box;
  }
`

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Col phone="100" tablet="25" desktop="15">
          <FilterList />
        </Col>
        <Col phone="100" tablet="75" desktop="85">
          <ProductList />
        </Col>
      </AppContainer>
    );
  }
}
