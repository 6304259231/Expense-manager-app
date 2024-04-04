import moment from 'moment';
import { createStore } from 'redux';

let initialData = {
    expenses: [
        {
            id: '1',
            name: 'Example Expense',
            category: 'Health',
            dateOfExpense: '2 April 2024',
            amount: 'INR 5000',
            updatedAt: 'just now',
            createdBy: 'me'
        }
    ],
    nextId: '2'
}

const expenseReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            let { name, category, dateOfExpense, amount } = action.payload;
            let formatedDate = moment(dateOfExpense).format('DD MMMM YYYY ')
            let newExpense = {
                id: state.nextId,
                name: name,
                category: category,
                dateOfExpense: formatedDate,
                amount: `INR ${amount}`,
                updatedAt: 'just now',
                createdBy: 'me'
            };
            return {
                ...state,
                expenses: [...state.expenses, newExpense],
                nextId: state.nextId + 1
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            };
        case 'EDIT_EXPENSE':
            let editedExpenseId = action.payload.id;
            let editedExpenseData = action.payload.expense;
            let editedFormattedDate = moment(editedExpenseData.dateOfExpense , 'DD MMMM YYYY').format('YYYY-MM-DD');
            let editedExpense = {
                ...editedExpenseData,
                dateOfExpense: editedFormattedDate,
                amount: `INR ${editedExpenseData.amount}`
            };
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === editedExpenseId ? { ...expense, ...editedExpense } : expense
                )
            };
        default:
            return state;
    }
}
let store = createStore(expenseReducer);
export default store;

