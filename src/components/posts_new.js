import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `from-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className="form-group has-danger">
        <label>
          {field.label}
        </label>
        <input type="text" className="form-control" {...field.input} />
        <div>
          {meta.touched ? meta.error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          label="Title for post"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field name="content" component={this.renderField} label="Content" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "PostNewForm"
})(PostsNew);
