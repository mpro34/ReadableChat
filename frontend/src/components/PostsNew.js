import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions';

class PostsNew extends Component {
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
    this.props.addPost(values);
    //Redirect to Home page after form submission
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="row">
          <div className="col s12">
              <Field
                label="Title"
                name="title"
                component={this.renderField}
              />
              <Field
                label="Author"
                name="author"
                component={this.renderField}
              />
              <Field
                label="Content"
                name="content"
                entrySize="large"
                component={this.renderField}
              />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn red">Cancel</Link>
      </form>
    )
  };
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.author) {
    errors.author = "Enter the author(s)!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  //If errors is empty => all values are valid. Else there is an error in user input
  return errors;
}

// const mapDispatchToProps = (dispatch, values) => {
//   return {
//     add_post(): () => dispatch(addPost(values))
//   }
// }

export default reduxForm({
  validate,
  form: 'PostsNewForm' //Name of form to be created
})(
  connect(null, { addPost })(PostsNew)
);

//  connect(null, { addPost })(PostsNew)
