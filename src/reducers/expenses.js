// Expenses Reducer

const expensesReducerDefaultState = {
  expenses: [],
  income: []
};

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        income: [...state.income, action.income]
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.expense]
      };
    case 'REMOVE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(({ id }) => id !== action.id)
      };
    case 'REMOVE_INCOME':
      return {
        ...state,
        income: state.income.filter(({ id }) => id !== action.id)
      };
    case 'SET_EXPENSE_DATA':
      return {
        ...state,
        expenses: action.expenses,
        income: action.income
      };
    default:
      return state;
  }
};
