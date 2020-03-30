import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';
import { selectExpenses } from '../selectors/expenses';
import { thunkGetExpensesData } from '../actions/expenses';
import '../styles/visibility.css';
import '../styles/list.css';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(thunkGetExpensesData());
  }

  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Description</div>
          <div className="show-for-desktop"></div>
        </div>
        {this.props.expenses.length === 0 && <p>No expense!</p>}
        {
          this.props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
          })
        }
        <div className="">
          <Link className="income_button button" to="/AddIncome">Add Income</Link>
          <Link className="spending_button button" to="/AddExpense">Add Expense</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const expenses = state.expenseData.expenses
  return {
    expenses: selectExpenses(state.expenseData.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
