import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

class Category extends Component {
  render() {
    console.log(`Categories PROPS = ${this.props}`)
    return (
      <div>
        <h5>{this.props.title}</h5>
          {
            <div className="container">
              {this.props.posts.map(post => (
                <p key={shortid.generate()} className="flat-text small">
                  Post Title: {post.title}
                </p>
              ))}
            </div>
          }
      </div>

    )
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default connect(mapStateToProps, null)(Category);
