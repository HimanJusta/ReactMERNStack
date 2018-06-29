import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../lib/validateEmail';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return (
      formFields.map(({ label, name }) => (
        <Field
          key={name}
          type="text"
          name={name}
          component={SurveyField}
          label={label}
        />
      ))
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button
          type="submit"
          className="teal btn-flat right white-text"
        >
          Submit
          <i className="material-icons right">done</i>
        </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmail(values.recipients || '');

  formFields.forEach(({ label, name }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
