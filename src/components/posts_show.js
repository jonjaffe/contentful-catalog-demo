import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { Link } from 'react-router';

import { fetchProduct } from '../actions/index';
import Asset from './asset';

class PostsShow extends Component {

  componentWillMount() {
    console.log(this.props);
    this.props.fetchProduct(this.props.params.id);
  }
  renderMarkdown(content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div className="content">
          <h1>{post.fields.productName}</h1>
          <div className="major" dangerouslySetInnerHTML={this.renderMarkdown(post.fields.description)} />
          <br />
          <div className="major" dangerouslySetInnerHTML={this.renderMarkdown(post.fields.website)} />
          <br />
          <Link to={"/"} className="button big wide">Back</Link>
        </div>
        <div className="image">
          <Asset assetId={post.fields.image[0].sys.id} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchProduct })(PostsShow);
