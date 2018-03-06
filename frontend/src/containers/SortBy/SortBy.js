import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SortBy extends Component {
  render() {
    console.log("Posts from SORTBY: ", this.props.posts);
    return (
      <div>
        <Link className='dropdown-button btn' href='#' to="/" data-activates='dropdown2'>Sort By</Link>
        <ul id='dropdown2' className='dropdown-content'>
            <li><Link onClick={() => console.log("Sort by VoteScore")} to="/">
                Vote Score
            </Link></li>
            <li><Link onClick={() => console.log("Sort by Timestamp")} to="/">
                Timestamp
            </Link></li>
        </ul>
      </div>
    );
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     delete_post: (id) => dispatch(deletePost(id))
//   }
// }

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(SortBy);
