import React from 'react';
import { connect } from 'react-redux';
import IncomeForm from './IncomeForm';
import { thunkAddIncome } from '../actions/expenses';
import '../styles/summary.css';

const AddIncomePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Income</h1>
      </div>
    </div>
    
    <div className="content-container">
      <IncomeForm
        onSubmit={(income) => {
          props.dispatch(thunkAddIncome(income));
          props.history.push('/');
        }}
      />
    </div>
  </div>
);

export default connect()(AddIncomePage);