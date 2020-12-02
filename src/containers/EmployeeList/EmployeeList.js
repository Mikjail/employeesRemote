import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';
import style from './EmployeeList.module.css';
import commonStyle from '../../styles/common.module.css';
import List from '../../components/List/List';

const employeeList = (props) => {
  const { onFetchEmployees, employees } = props;

  useEffect(() => {
    onFetchEmployees();
  }, [onFetchEmployees]);

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
        <Link
          to="/create"
          className={[commonStyle.primaryBtn, style.addBtn].join(' ')}
          data-testid="add-btn"
        >
          <i className={style.icon} />
          Add employee
        </Link>
      </div>
      <div className={style.list}>
        <List items={employees} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ employees }) => ({ employees });

const mapDispatchToProps = (dispatch) => ({
  onFetchEmployees: () => dispatch(actions.fetchEmployees())
});
export default connect(mapStateToProps, mapDispatchToProps)(employeeList);
