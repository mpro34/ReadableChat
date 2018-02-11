import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className='form-group has-danger'>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  };

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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

export default reduxForm({
  validate,
  form: 'PostsNewForm' //Name of form to be created
})(PostsNew);
