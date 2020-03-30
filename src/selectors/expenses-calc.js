export function calExpenseTotal(expenses) {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};

export function calIncomeBalance(expenses, income) {
    const totalExp = expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
    return income - totalExp;
};