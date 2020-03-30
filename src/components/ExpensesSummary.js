import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { selectExpenses, selectIncome } from '../selectors/expenses';
import { calExpenseTotal, calIncomeBalance } from '../selectors/expenses-calc';
import '../styles/summary.css';

class ExpensesSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const expenseWord = this.props.expenseCount === 1 ? 'expense' : 'expenses';
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
  const income = selectIncome(state.expenseData.expenses);
  return {
    income: income,
    expenseCount: visibleExpenses.length,
    expensesTotal: calExpenseTotal(visibleExpenses),
    incomeBalance: calIncomeBalance(state.expenseData.expenses, income.amount)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);