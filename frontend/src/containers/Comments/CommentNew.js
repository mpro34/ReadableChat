import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addComment } from '../../actions';

class CommentNew extends Component {
  renderField(field) {
    let myClass = "";
    if (field.entrySize === "large") {
      myClass = "input-field col s12";
    } else {
      myClass = "input-field col s6";
    }
    return (
      <div>
        <div className={myClass}>
          <label>{field.label}</label>
          <input
            id={field.label}
            type="text"
            className="validate"
            {...field.input}
          />
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  };

  onSubmit(values) {
    console.log("Submitting form: ", values);
    this.props.addComment(values, this.props.parentId); //(values, parentId)
    //Redirect to Home page after form submission
    this.props.history.goBack();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="row">
          <div className="col s12">
              <Field
                label="Author"
                name="author"
                component={this.renderField}
              />
              <Field
                label="Content"
                name="body"
                entrySize="large"
                component={this.renderField}
              />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <button onClick={() => this.props.history.goBack()} className="btn red">Cancel</button>
      </form>
    )
  };
};

function validate(values) {
  const errors = {};
  if (!values.author) {
    errors.author = "Enter the author(s)!";
  }
  if (!values.body) {
    errors.body = "Enter some content!";
  }

  //If errors is empty => all values are valid. Else there is an error in user input
  return errors;
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     get_all_posts: () => dispatch(getAllPosts()),
//     delete_post: (id) => dispatch(deletePost(id))
//   }
// }

export default reduxForm({
  validate,
  form: 'CommentsNewForm' //Name of form to be created
})(
  connect(null, { addComment })(CommentNew)
);
