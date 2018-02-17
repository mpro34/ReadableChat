import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import {Button, Icon, Row, Input} from 'react-materialize';


class PostsNew extends Component {
  renderField(field) {
    return (
      <div>
        <div className="input-field col s6">
          <input id={field.label} type="text" className="validate"/>
          <label for={field.label}>{field.label}</label>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  };

  onSubmit(values) {
    this.props.addPost(values);
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
            <div className="input-field col s12">
              <input id="Content" type="text" className="validate"/>
              <label for="Content">Content</label>
            </div>
          </div>
        </div>

        <Button type="submit" className="btn btn-primary">Submit</Button>
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

export default reduxForm({
  validate,
  form: 'PostsNewForm' //Name of form to be created
})(
  connect(null, { addPost })(PostsNew)
);
