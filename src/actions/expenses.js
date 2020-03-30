import { getNewGuid } from "../utils/utils";

//Add Income
export const addIncome = (income) => ({
  type: 'ADD_INCOME',
  income
})

// ADD_EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
};

export const thunkAddIncome = (incomeData) => {
  return (dispatch, getState) => {
    const {
      description = '',
      type = "income",
      amount = 0,
      createdAt = 0
    } = incomeData;

    const income = {
      description,
      type,
      amount,
      createdAt
    };
    const incomes = JSON.parse(localStorage.getItem("income") || "[]");
    const incomeItem = {
      id: getNewGuid(),
      ...income
    };
    incomes.push(incomeItem);
    localStorage.setItem("income", JSON.stringify(incomes));
    dispatch(addIncome(incomeItem));
  }
}

export const thunkAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = {
      description,
      note,
      amount,
      createdAt,
      type: "expense"
    };
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const expenseItem = {
      id: getNewGuid(),
      ...expense
    };
    expenses.push(expenseItem);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    dispatch(addExpense(expenseItem));
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// REMOVE_INCOME
export const removeIncome = ({ id } = {}) => ({
  type: 'REMOVE_INCOME',
  id
});

export const thunkRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const curId = id;
    if (curId) {
      const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
      const exp = expenses.filter(({ id }) => id === curId);
      if (exp.length > 0) {
        const updatedExp = expenses.filter(({ id }) => id !== curId);
        localStorage.setItem("expenses", JSON.stringify(updatedExp));
        dispatch(removeExpense({ id }));
      }
      else{
        const incomes = JSON.parse(localStorage.getItem("income") || "[]");
        const updatedInc = incomes.filter(({ id }) => id !== curId);
        localStorage.setItem("income", JSON.stringify(updatedInc));
        dispatch(removeIncome({ id }));
      }
    }
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const thunkEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    dispatch(editExpense(id, updates));
  }
}

//SET_EXPENSES
export const setExpenseData = (expenseData) => ({
  type: 'SET_EXPENSE_DATA',
  expenses: expenseData.expenses,
  income: expenseData.income
})

export const thunkGetExpensesData = () => {
  return (dispatch, getState) => {
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const income = JSON.parse(localStorage.getItem("income") || "[]");
    return dispatch(setExpenseData({ expenses: expenses, income: income }));
  }
}

