import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';
import Input from '../../components/UI/Input/Input';
import Headline from '../../components/Headline/Headline';
import style from './EmployeeCreate.module.css';
import Button from '../../components/UI/Button/Button';
import NoContent from '../../components/NoContent/NoContent';
import Aux from '../../hoc/Aux/aux';
import { formObject } from './formObject';
import { checkValidity, updateObject, setInputValue } from '../../utils/utils';
import commonStyle from '../../styles/common.module.css';

const employeeCreate = (props) => {
  const {
    onCreateEmployee, match, onFetchEmployees, employees, onEditEmployee
  } = props;

  const { params } = match;

  const [employeeForm, setEmployeeForm] = useState(formObject);

  const [formIsValid, setFormIsValid] = useState(false);

  const [noContent, setNoContent] = useState(false);

  const [employee, setEmployee] = useState(undefined);

  const formElementsArray = [];

  const title = params && params.id ? 'Edit employee' : 'Add a new employee';

  const subtitle = params && params.id ? 'Edit the information of your employee' : 'Fill out information of your new employe';

  useEffect(() => {
    if (params && params.id) {
      onFetchEmployees();
    }
  }, [onFetchEmployees]);

  useEffect(() => {
    const updatedForm = {};
    if (params?.id && employees?.length > 0 && !employee) {
      const employeeToSet = employees.find((empl) => empl.id.toString() === params.id.toString());
      if (employeeToSet?.id) {
        Object.keys(employeeForm).forEach((key) => {
          const inputValue = employeeToSet[key] || employeeForm[key].value;
          const updatedFormElement = updateObject(employeeForm[key], {
            value: setInputValue(employeeForm[key].elementConfig.type, inputValue),
            valid: checkValidity(
              employeeToSet[key],
              employeeForm[key].validation
            ),
            touched: true
          });
          updatedForm[key] = updatedFormElement;
        });
        setFormIsValid(true);
        setEmployeeForm(updatedForm);
        setEmployee(employeeToSet);
      } else {
        setNoContent(true);
      }
    }
  }, [employees]);

  Object.keys(employeeForm).forEach((key) => {
    formElementsArray.push({
      id: key,
      config: employeeForm[key]
    });
  });

  /**
   * This will update the element
   * by doing a deep cloning of the object (Avoid mutations)
   */
  const updateFormElement = () => {
    const updatedForm = {};
    Object.keys(employeeForm).forEach((key) => {
      const updatedFormElement = updateObject(employeeForm[key], {
        value: employeeForm[key].value,
        valid: checkValidity(
          employeeForm[key].value,
          employeeForm[key].validation
        ),
        touched: true
      });
      updatedForm[key] = updatedFormElement;
    });

    setEmployeeForm(updatedForm);
  };

  /**
   * Input onChange event handler
   * @param {*} event
   * @param {*} inputIdentifier
   */
  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(employeeForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        employeeForm[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedemployeeForm = updateObject(employeeForm, {
      [inputIdentifier]: updatedFormElement
    });

    let isValid = true;
    Object.keys(updatedemployeeForm).forEach((key) => {
      isValid = updatedemployeeForm[key].valid && isValid;
    });

    setEmployeeForm(updatedemployeeForm);
    setFormIsValid(isValid);
  };

  /**
   * This will submit the new employee
   * @param {*} event
   */
  const onFormSubmit = (event) => {
    event.preventDefault();
    // Check if form is valid
    if (!formIsValid) {
      updateFormElement();
      return;
    }
    const formData = {};

    Object.keys(employeeForm).forEach((key) => {
      formData[key] = employeeForm[key].value;
    });

    formData.salary = parseInt(formData.salary, 10);

    formData.dateOfBirth = moment(formData.dateOfBirth, 'YYYY-MM-DD').format('MM/DD/YYYY');

    if (employee) {
      formData.id = employee.id;
      onEditEmployee(formData);
    } else {
      formData.id = formData.id || Math.floor(Math.random() * 100);
      onCreateEmployee(formData);
    }
    props.history.push('/');
  };

  /**
   * This returns the form generated from the @formObject
   */
  const formContent = () => (
    <form onSubmit={onFormSubmit} className={style.form}>
      {formElementsArray.map((formElement) => (
        <div className={style.input} key={formElement.id}>
          <Input
            hint={formElement.config.hint}
            name={formElement.config.name}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
          />
        </div>
      ))}
      <div className={style.formFooter}>
        <Link
          to="/"
          className={[commonStyle.secondaryBtn, style.cancelBtn].join(' ')}
        >

          <span data-testid="cancel-btn">
            Cancel
          </span>
        </Link>

        <Button classType="primaryBtn" btnType="submit">
          <span data-testid="save-btn">
            {params.id ? 'Save' : 'Add Employee'}
          </span>
        </Button>
      </div>
    </form>
  );

  return (
    <div className={style.main}>
      { noContent
        ? (<NoContent />)
        : (
          <Aux>
            <Headline
              title={title}
              subtitle={subtitle}
            />
            <div className={style.formContainer} data-testid="form-content">
              {formContent()}
            </div>
          </Aux>
        )}

    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  onCreateEmployee: (employee) => dispatch(actions.createEmployees(employee)),
  onFetchEmployees: () => dispatch(actions.fetchEmployees()),
  onEditEmployee: (employee) => dispatch(actions.editEmployee(employee))
});

const mapStateToProps = ({ employees }) => ({ employees });

export default connect(mapStateToProps, mapDispatchToProps)(employeeCreate);
