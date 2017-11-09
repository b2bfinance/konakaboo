import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/products';
import Product from './Product';

class ProductList extends Component {
  componentDidMount() {
    const { hasFiltered, dispatch } = this.props;

    if (hasFiltered) {
      dispatch()
    } else {
      dispatch(loadProducts());
    }
  }

  render() {
    const { products } = this.props;

    if (!products) {
      return (
        <div>Loading...</div>
      );
    }

    if (!products.length === 0) {
      return (
        <div>Products</div>
      );
    }

    return (
      <div>
        {
          products.map(product => (
            <Product key={product.id} product={product}></Product>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { filters, products } = state;

  return {
    hasFiltered: filters.hasFiltered,
    isFetching: products.isFetching,
    products: products.items,
  };
};

export default connect(mapStateToProps)(ProductList);
