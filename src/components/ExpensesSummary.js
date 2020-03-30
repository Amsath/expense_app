import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { selectExpenses } from '../selectors/expenses';
import { calExpenseTotal, calIncomeBalance, calIncomeTotal } from '../selectors/expenses-calc';
import '../styles/summary.css';

class ExpensesSummary extends React.Component {
  render() {
    const formattedExpensesTotal = numeral(this.props.expensesTotal).format('$0,0.00');
    const formattedIncome = numeral(this.props.income).format('$0,0.00');
    const formattedBalance = numeral(this.props.incomeBalance).format('$0,0.00');

    return (
      <div className='page-header'>
        <div className="content-container">
          <div className="page-header__title">Balance </div>
          <div className="header_amount">{formattedBalance} </div>
          <div className="page-header__title__income">
            <span className="income_title"> Incomes: {formattedIncome}</span>
            <span>{"  "}</span>
            <span className="spendings_title">spendings: {formattedExpensesTotal}</span>
          </div>

          {/* <div className="page-header__actions">
            <Link className="income_button button" to="/AddIncome">Add Income</Link>
            <Link className="spending_button button" to="/AddExpense">Add Expense</Link>
          </div> */}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenseData.expenses, state.filters);  
  const income = calIncomeTotal(state.expenseData.income);
  return {
    income: income,
    expenseCount: visibleExpenses.length,
    expensesTotal: calExpenseTotal(visibleExpenses),
    incomeBalance: calIncomeBalance(state.expenseData.expenses, calIncomeTotal(state.expenseData.income))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
