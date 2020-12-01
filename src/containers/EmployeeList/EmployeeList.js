import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import style from './EmployeeList.module.css';
import commonStyle from '../../styles/common.module.css';

const employeeList = (props) => {
  const { onFetchEmployees, employees } = props;

  useEffect(() => {
    onFetchEmployees();
  }, [onFetchEmployees]);

  const addEmployee = () => {
    console.log('add employee clicked');
  };

  return (
    <div className={style.content} data-testid="employees-list">
      <div className={style.header} data-testid="headline">
        <div className={style.headline}>
          <h2 className={commonStyle.headline}>
            People
          </h2>
          <small>
            <span data-testid="counter">
              {employees.length}
            </span>
            {' '}
            employees
          </small>
        </div>
        <button type="button" className={commonStyle.primaryBtn} onClick={addEmployee} data-testid="add-btn">
          Add Employee
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ employees }) => ({ employees });

const mapDispatchToProps = (dispatch) => ({
  onFetchEmployees: () => dispatch(actions.fetchEmployees())
});
export default connect(mapStateToProps, mapDispatchToProps)(employeeList);
