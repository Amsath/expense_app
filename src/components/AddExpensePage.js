import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './Expense';
import { thunkAddExpense } from '../actions/expenses';
import '../styles/summary.css';

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    
    <div className="content-container">
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(thunkAddExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpensePage);
