import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Please Conform your entries</h5>
      <div>
        {
          formFields.map(({ label, name }) => (
            <div key={name}>
              <label>{label}</label>
              <div>{formValues[name]}</div>
            </div>
          ))
        }
      </div>
      <button
        className="red darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="teal darken-3 right btn-flat white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps({ form: { surveyForm }}) {
  return { formValues: surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
