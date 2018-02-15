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
          {/* <label>{field.label}</label> */}
        {/* <div className="text-center margin-left:auto margin-right:auto width:40%"> */}
          <Row>
            <Input
              className="grid-example col s12 offset-s6"
              label={field.label}
              type="text"
              {...field.input}
            />
            <div className="text-help">
              {field.meta.touched ? field.meta.error : ''}
            </div>
          </Row>
        {/* </div> */}
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
