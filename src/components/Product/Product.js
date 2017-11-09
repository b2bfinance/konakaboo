import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Row from '../Row';
import Col  from '../Col';
import Button from '../Button';
import { connect } from 'react-redux';

const ProductContainer = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.gray100};
  margin-bottom: 1.5rem;

  * {
    box-sizing: border-box;
  }
`

const ProductHeadingRow = Row.extend`
  align-items: center;
  background-color: ${props => props.theme.gray100};
  padding: .5rem .75rem;
`

const ProductCol = Col.extend`
  align-items: center;
  background-color: ${props => props.background ? props.theme.gray50 : ''};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.25rem;
  text-align: center;

  img {
    max-width: 100%;
  }

  span {
    font-size: 1.5rem;
    margin-bottom: .5rem;
    line-height: 1.1;
  }

  small {
    font-size: 85%;
  }
`

const ProductMoreInfoRow = Row.extend`
  border-top: 2px solid ${props => props.theme.gray100};
  padding: 1rem;

  ${props => !props.visible && css`
    display: none;
  `}
`

export default class Product extends Component {
  state = {
    isShowingMoreInfo: true,
  }

  handleToggleMoreInfo = event => this.setState({
    isShowingMoreInfo: !this.state.isShowingMoreInfo,
  });

  renderColumns() {
    const { columns } = this.props.product;

    return columns.map((column, i) => (
      <ProductCol key={i} phone="100" desktop={50 / columns.length} background={(i+1) % 2}>
        <span>{column.label}</span>
        <small>{column.value}</small>
      </ProductCol>
    ));
  }

  render() {
    const { product } = this.props;
    const { isShowingMoreInfo } = this.state;

    return (
      <ProductContainer>
        <ProductHeadingRow>
          {product.title}
        </ProductHeadingRow>
        <Row>
          <ProductCol phone="100" desktop="25">
            <img src={product.links.logo} alt={product.brand} />
          </ProductCol>
          { this.renderColumns() }
          <ProductCol phone="100" desktop="25">
            <Button primary>
              View & Apply
            </Button>
            <Button secondary slim onClick={this.handleToggleMoreInfo}>
              more info
            </Button>
          </ProductCol>
        </Row>
        <ProductMoreInfoRow visible={isShowingMoreInfo}>
          <span>{product.description}</span>
          <Row>
            <Col phone="100" desktop="50">

            </Col>
            <Col phone="100" desktop="50">

            </Col>
          </Row>
        </ProductMoreInfoRow>
      </ProductContainer>
    )
  }
}
