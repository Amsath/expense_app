import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { thunkRemoveExpense } from '../actions/expenses';
import { MdDelete } from 'react-icons/md';

const ExpenseListItem = ({ id, description, amount, createdAt, type, dispatch }) => {
  const expenseTypeClass = (type === "expense") ? "list-item_title list-item_title_expense_color" : "list-item_title list-item_title_income_color";
  return (
    <div className="list-item">
      <div>
        <span className="list-item_sub-title">{moment(createdAt).format('Do MMMM YYYY')}</span>
        <div className={expenseTypeClass}>{numeral(amount).format('$0,0.00')}</div>
      </div>
      <div className="list-item_desc">{description}</div>
      <MdDelete className="list-item_delete" size={24} onClick={() => dispatch(thunkRemoveExpense({ id }))}> </MdDelete>
    </div>
  );
}

export default connect()(ExpenseListItem)
