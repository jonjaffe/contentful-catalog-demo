import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';

import { fetchProducts } from '../actions/index';
import Asset from './asset';

class ProductsIndex extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }
  renderProducts() {
    return this.props.products.map((product, index) => {
      return (
        <section key={product.sys.id} className={`spotlight style1 orient-${index%2 ? 'right':'left'} content-align-left image-position-center onscroll-image-fade-in`}>
          <div className="content">
            <h2>{product.fields.productName}</h2>
            <div className="major">
              <TextTruncate
                  line={2}
                  truncateText="…"
                  text={product.fields.description}
                  />
            </div>
            <br />
            <Link to={"products/" + product.sys.id} className="button big wide smooth-scroll-middle">See the {product.fields.productName}</Link>
          </div>
          <div className="image">
            <Asset assetId={product.fields.image[0].sys.id} />
          </div>
        </section>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderProducts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { products: state.products.all };
}
export default connect(mapStateToProps, { fetchProducts })(ProductsIndex);
