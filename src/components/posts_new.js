import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>
          {field.label}
        </label>
        <input field="text" className="form-control" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderField}
          label="Title for post"
        />
        <Field
          name="catergories"
          component={this.renderField}
          label="Categories"
        />
        <Field name="content" component={this.renderField} label="Content" />
      </form>
    );
  }
}

export default reduxForm({
  form: "PostNewForm"
})(PostsNew);
