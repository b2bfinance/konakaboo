import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { queries } from '../../utils/media';
import Row from '../Row';
import Col from '../Col';
import Button from '../Button';
import Label from '../Label';
import CheckCircle from 'material-ui-icons/CheckCircle';
import Star from 'material-ui-icons/Star';

const Container = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.productOutlineBackground};
  margin-bottom: 1.5rem;

  ${props =>
    props.highlight &&
    css`
      border-color: ${props.theme.productHighlightOutlineBackground};
    `};
`;

const HeadingRow = Row.extend`
  align-items: center;
  background-color: ${props => props.theme.productOutlineBackground};
  padding: 0.5rem 0.75rem;

  ${props =>
    props.highlight &&
    css`
      background-color: ${props.theme.productHighlightOutlineBackground};
      color: ${props.theme.productHighlightOutlineColor};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-right: 0.25rem;
      }
    `};
`;

const StyledProductLabels = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${queries.phone`
    div {
      margin: .5rem .5rem 0 0;
    }
  `};

  ${queries.desktop`
    margin-left: auto;

    div {
      margin: 0 .5rem 0 0;
    }
  `};
`;

const ProductCol = Col.extend`
  align-items: center;
  background-color: ${props =>
    props.background ? props.theme.productColBackground : ''};
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
    margin-bottom: 0.5rem;
    line-height: 1.1;
  }

  small {
    font-size: 95%;
  }
`;

const MoreInfoRow = Row.extend`
  border-top: 2px solid ${props => props.theme.productOutlineBackground};
  padding: 1rem;

  ${props =>
    !props.visible &&
    css`
      display: none;
    `};
`;

const ApplyButton = Button.extend`
  margin-bottom: 0.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  margin-bottom: 0;
  margin-top: 1rem;
  padding: 0;
`;

const HighlightPoint = styled.li`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.mainBoldFontWeight};

  ${queries.desktop`
    padding-right: 1rem;
  `};
`;

const TechnicalPoint = styled.li`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  ${queries.desktop`
    margin-bottom: .5rem;
    padding-left: 1rem;
  `};

  svg {
    fill: ${props => props.theme.infoCheckColor};
    margin-right: 0.5rem;
  }
`;

const ProductLabels = ({ labels }) => {
  return (
    <StyledProductLabels>
      {labels.map((label, i) => <Label key={i}>{label}</Label>)}
    </StyledProductLabels>
  );
};

const ProductColumns = ({ columns }) =>
  columns.map((column, i) => (
    <ProductCol
      key={i}
      phone="100"
      desktop={60 / columns.length}
      background={(i + 1) % 2}
    >
      <small>{column.label}</small>
      <span>{column.value}</span>
    </ProductCol>
  ));

const ProductHighlightPoints = ({ points }) =>
  points.map((point, i) => <HighlightPoint key={i}>{point}</HighlightPoint>);

const ProductTechnicalPoints = ({ points }) =>
  points.map((point, i) => (
    <TechnicalPoint key={i}>
      <CheckCircle />
      {point}
    </TechnicalPoint>
  ));

export default class Product extends Component {
  state = {
    isShowingMoreInfo: false
  };

  handleToggleMoreInfo = () =>
    this.setState({
      isShowingMoreInfo: !this.state.isShowingMoreInfo
    });

  render() {
    const { isShowingMoreInfo } = this.state;
    const {
      highlighted,
      labels,
      title,
      links,
      brand,
      columns,
      description,
      technical_points,
      highlighted_points
    } = this.props.product;

    return (
      <Container highlight={highlighted}>
        <HeadingRow highlight={highlighted}>
          {highlighted && <Star />}
          {title}
          <ProductLabels labels={labels} />
        </HeadingRow>
        <Row>
          <ProductCol phone="100" desktop="20">
            <img src={links.logo} alt={brand} />
          </ProductCol>
          <ProductColumns columns={columns} />
          <ProductCol phone="100" desktop="20">
            <ApplyButton primary href={links.apply}>
              See Deal
            </ApplyButton>
            <Button secondary slim onClick={this.handleToggleMoreInfo}>
              more info
            </Button>
          </ProductCol>
        </Row>
        <MoreInfoRow visible={isShowingMoreInfo}>
          <span>{description}</span>
          <Row>
            <Col phone="100" desktop="50">
              <InfoList>
                <ProductHighlightPoints points={highlighted_points} />
              </InfoList>
            </Col>
            <Col phone="100" desktop="50">
              <InfoList>
                <ProductTechnicalPoints points={technical_points} />
              </InfoList>
            </Col>
          </Row>
        </MoreInfoRow>
      </Container>
    );
  }
}
