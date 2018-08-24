import React from 'react';
import { findDOMNode } from 'react-dom';
import styled, { css } from 'styled-components';
import Row from '../Row';
import Button from '../Button';
import Confirm from './Confirm';
import Star from '@material-ui/icons/Star';
import MoreInfoRow from './MoreInfoRow';
import HeadingRow from './HeadingRow';
import Labels from './Labels';
import Col, { MultiCol } from './Col';
import ApplyButton from './ApplyButton';

export const Wrapper = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.productOutlineBackground};
  margin-bottom: 1.5rem;

  ${props =>
    props.highlight &&
    css`
      border-color: ${props.theme.productHighlightOutlineBackground};
    `};
`;

export default class Product extends React.Component {
  state = {
    isShowingMoreInfo: false,
    isShowingConfirmation: false
  };

  setContainerEl = el => {
    this.productContainer = findDOMNode(el);
  };

  handleToggleMoreInfo = e => {
    const { isShowingMoreInfo } = this.state;

    this.setState({
      isShowingMoreInfo: !isShowingMoreInfo
    });

    if (!isShowingMoreInfo) {
      this.productContainer.dispatchEvent(
        new CustomEvent('more', {
          detail: this.props.product
        })
      );
    }
  };

  handleApplyClick = e => {
    if (this.hasConfirmationDialoig()) {
      e.preventDefault();
      this.toggleDialogState();
    }

    this.productContainer.dispatchEvent(
      new CustomEvent('apply', {
        detail: this.props.product
      })
    );
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
      <Wrapper highlight={highlighted} ref={this.setContainerEl} data-product>
        <HeadingRow highlight={highlighted}>
          {highlighted && <Star />}
          {title}
          <Labels labels={labels} />
        </HeadingRow>
        <Row>
          <Col phone="100" desktop="20">
            <img src={links.logo} alt={brand} />
          </Col>
          <MultiCol columns={columns} />
          <Col phone="100" desktop="20">
            <ApplyButton
              onClick={this.handleApplyClick}
              primary
              margin={this.hasMoreInfo()}
              href={links.apply}
              target="_blank"
              rel="noopener"
            >
              Get Deal
            </ApplyButton>
            {this.hasConfirmationDialoig() && (
              <Confirm
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
          </Col>
        </Row>
        {this.hasMoreInfo() && (
          <MoreInfoRow
            visible={isShowingMoreInfo}
            description={description}
            highlights={highlighted_points}
            technical={technical_points}
          />
        )}
      </Wrapper>
    );
  }
}
