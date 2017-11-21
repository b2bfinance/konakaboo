import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { queries } from '../../styled/helpers';
import Row from '../Row';
import Col  from '../Col';
import Button from '../Button';
import ArrowForward from 'material-ui-icons/ArrowForward';
import AddCircleOutline from 'material-ui-icons/AddCircleOutline';
import RemoveCircleOutline from 'material-ui-icons/RemoveCircleOutline';
import CheckCircle from 'material-ui-icons/CheckCircle';
import Star from 'material-ui-icons/Star';

const Container = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.productOutlineBackground};
  margin-bottom: 1.5rem;

  ${props => props.highlight && css`
    border-color: ${props.theme.productHighlightOutlineBackground};
  `}
`

const HeadingRow = Row.extend`
  align-items: center;
  background-color: ${props => props.theme.productOutlineBackground};
  padding: .5rem .75rem;

  ${props => props.highlight && css`
    background-color: ${props.theme.productHighlightOutlineBackground};
    color: ${props.theme.productHighlightOutlineColor};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      margin-right: .25rem;
    }
  `}
`

const ProductCol = Col.extend`
  align-items: center;
  background-color: ${props => props.background ? props.theme.productColBackground : ''};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.25rem;
  text-align: center;

  img {
    max-width: 100%;
  }

  span {
    font-size: 1.25rem;
    font-weight: ${props => props.theme.mainBoldFontWeight};
    margin-bottom: .5rem;
    line-height: 1.1;
  }

  small {
    font-size: 95%;
  }
`

const MoreInfoRow = Row.extend`
  border-top: 2px solid ${props => props.theme.productOutlineBackground};
  padding: 1rem;

  ${props => !props.visible && css`
    display: none;
  `}
`

const ApplyButton = Button.extend`
  margin-bottom: .5rem;
`

const InfoList = styled.ul`
  list-style: none;
  margin-bottom: 0;
  margin-top: 1rem;
  padding: 0;
`

const HighlightPoint = styled.li`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.mainBoldFontWeight};

  ${queries.desktop`
    padding-right: 1rem;
  `}
`

const TechnicalPoint = styled.li`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  ${queries.desktop`
    margin-bottom: .5rem;
    padding-left: 1rem;
  `}

  svg {
    fill: ${props => props.theme.infoCheckColor};
    margin-right: .5rem;
  }
`

export default class Product extends Component {
  state = {
    isShowingMoreInfo: false,
  }

  handleToggleMoreInfo = () => this.setState({
    isShowingMoreInfo: !this.state.isShowingMoreInfo,
  })

  renderColumns() {
    const { columns } = this.props.product;

    return columns.map((column, i) => (
      <ProductCol key={i} phone="100" desktop={50 / columns.length} background={(i+1) % 2}>
        <span>{column.label}</span>
        <small>{column.value}</small>
      </ProductCol>
    ));
  }

  renderInfoButtonIcon() {
    if (this.state.isShowingMoreInfo) {
      return (<RemoveCircleOutline />);
    }

    return (<AddCircleOutline />);
  }

  renderHighlightedPoints() {
    const points = this.props.product.highlighted_points;

    return points.map((point, i) => (
      <HighlightPoint key={i}>
        {point}
      </HighlightPoint>
    ));
  }

  renderTechnicalPoints() {
    const points = this.props.product.technical_points;

    return points.map((point, i) => (
      <TechnicalPoint key={i}>
        <CheckCircle />
        {point}
      </TechnicalPoint>
    ))
  }

  render() {
    const { isShowingMoreInfo } = this.state;
    const {
      highlighted,
      title,
      links,
      brand,
      description,
    } = this.props.product;

    return (
      <Container highlight={highlighted}>
        <HeadingRow highlight={highlighted}>
          { highlighted &&
          <Star />
          }
          {title}
        </HeadingRow>
        <Row>
          <ProductCol phone="100" desktop="25">
            <img src={links.logo} alt={brand} />
          </ProductCol>
          {this.renderColumns()}
          <ProductCol phone="100" desktop="25">
            <ApplyButton primary>
              View & Apply
              <ArrowForward />
            </ApplyButton>
            <Button secondary slim onClick={this.handleToggleMoreInfo}>
              more info
              {this.renderInfoButtonIcon()}
            </Button>
          </ProductCol>
        </Row>
        <MoreInfoRow visible={isShowingMoreInfo}>
          <span>{description}</span>
          <Row>
            <Col phone="100" desktop="50">
              <InfoList>
                {this.renderHighlightedPoints()}
              </InfoList>
            </Col>
            <Col phone="100" desktop="50">
              <InfoList>
                {this.renderTechnicalPoints()}
              </InfoList>
            </Col>
          </Row>
        </MoreInfoRow>
      </Container>
    )
  }
}
