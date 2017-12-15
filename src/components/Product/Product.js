import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { queries } from '../../utils/media';
import Row from '../Row';
import Col from '../Col';
import Button from '../Button';
import Label from '../Label';
import ProductConfirm from './Confirm';
import CheckCircle from 'material-ui-icons/CheckCircle';
import Star from 'material-ui-icons/Star';

export const Container = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.productOutlineBackground};
  margin-bottom: 1.5rem;

  ${props =>
    props.highlight &&
    css`
      border-color: ${props.theme.productHighlightOutlineBackground};
    `};
`;

export const HeadingRow = Row.extend`
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

export const StyledProductLabels = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${queries.phone`
    div {
      margin: .5rem .5rem 0 0;
    }
  `};

  ${queries.tablet`
    margin-left: auto;

    div {
      margin: 0 .5rem 0 0;
    }
  `};
`;

export const ProductCol = Col.extend`
  align-items: center;
  background-color: ${props =>
    props.background ? props.theme.productColBackground : ''};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.25rem;
  text-align: center;

  img {
    flex-shrink: 0;
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
    font-weight: ${props => props.theme.mainNormalFontWeight};
  }
`;

export const MoreInfoRow = Row.extend`
  border-top: 2px solid ${props => props.theme.productOutlineBackground};
  padding: 1rem;

  ${props =>
    !props.visible &&
    css`
      display: none;
    `};
`;

export const ApplyButton = Button.extend`
  ${props =>
    props.margin &&
    css`
      margin-bottom: 0.5rem;
    `};
`;

export const InfoList = styled.ul`
  list-style: none;
  margin-bottom: 0;
  margin-top: 1rem;
  padding: 0;
`;

export const HighlightPoint = styled.li`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.mainBoldFontWeight};

  ${queries.desktop`
    padding-right: 1rem;
  `};
`;

export const TechnicalPoint = styled.li`
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

export const ProductLabels = ({ labels }) => {
  return (
    <StyledProductLabels>
      {labels.map((label, i) => <Label key={i}>{label}</Label>)}
    </StyledProductLabels>
  );
};

export const ProductColumns = ({ columns }) =>
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

export const ProductHighlightPoints = ({ points }) =>
  points.map((point, i) => <HighlightPoint key={i}>{point}</HighlightPoint>);

export const ProductTechnicalPoints = ({ points }) =>
  points.map((point, i) => (
    <TechnicalPoint key={i}>
      <CheckCircle />
      {point}
    </TechnicalPoint>
  ));

export default class Product extends Component {
  state = {
    isShowingMoreInfo: false,
    isShowingConfirmation: false
  };

  handleToggleMoreInfo = () =>
    this.setState({
      isShowingMoreInfo: !this.state.isShowingMoreInfo
    });

  handleApplyClick = e => {
    if (this.hasConfirmationDialoig()) {
      e.preventDefault();
      this.toggleDialogState();
    }
  };

  toggleDialogState = () =>
    this.setState({
      isShowingConfirmation: !this.state.isShowingConfirmation
    });

  hasMoreInfo() {
    const {
      description,
      technical_points,
      highlighted_points
    } = this.props.product;

    return [description, technical_points, highlighted_points].some(
      v => v.length > 0
    );
  }

  hasConfirmationDialoig() {
    const { meta } = this.props.product;
    return !!meta.confirm;
  }

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
      highlighted_points,
      meta
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
            <ApplyButton
              onClick={this.handleApplyClick}
              primary
              margin={this.hasMoreInfo()}
              href={links.apply}
            >
              Get Deal
            </ApplyButton>
            {this.hasConfirmationDialoig() && (
              <ProductConfirm
                open={this.state.isShowingConfirmation}
                handleRequestClose={this.toggleDialogState}
                title={meta.confirm.heading}
                description={meta.confirm.description}
                forwardUrl={links.apply}
              />
            )}
            {this.hasMoreInfo() && (
              <Button secondary slim onClick={this.handleToggleMoreInfo}>
                {isShowingMoreInfo ? 'less info' : 'more info'}
              </Button>
            )}
          </ProductCol>
        </Row>
        {this.hasMoreInfo() && (
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
        )}
      </Container>
    );
  }
}
