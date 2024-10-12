import { createContext, useReducer } from "react";
const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A Pair of shoes",
        amount: 59.99,
        date: new Date("2021-12-19"),
    },
    {
        id: "e2",
        description: "A Pair of trousers",
        amount: 89.29,
        date: new Date("2022-01-05"),
    },
    {
        id: "e3",
        description: "Some Bananas",
        amount: 5.99,
        date: new Date("2021-12-01"),
    },
    {
        id: "e4",
        description: "A Book",
        amount: 14.99,
        date: new Date("2021-02-19"),
    },
    {
        id: "e5",
        description: "Another Book",
        amount: 18.59,
        date: new Date("2021-02-18"),
    },
    {
        id: "e6",
        description: "Iphone 15 pro max",
        amount: 59.99,
        date: new Date("2021-12-19"),
    },
    {
        id: "e7",
        description: "New book",
        amount: 89.29,
        date: new Date("2022-01-05"),
    },
    {
        id: "e8",
        description: "Laptop Apple",
        amount: 5.99,
        date: new Date("2021-12-01"),
    },
    {
        id: "e9",
        description: "Desk",
        amount: 14.99,
        date: new Date("2021-10-08"),
    },
    {
        id: "e10",
        description: "Table",
        amount: 18.59,
        date: new Date("2021-10-10"),
    },
];
export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
});
const expensesReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case "UPDATE":
            const updatedExpenseIndex = state.findIndex(
                ({ id }) => id === action.payload.id
            );
            const updatableExpense = state[updatedExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatedExpenseIndex] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            return state.filter(({ id }) => id !== action.payload.id);
        default:
            return state;
    }
};
const ExpensesContextProvider = ({ children }) => {
    const [expensesState, dispatch] = useReducer(
        expensesReducer,
        DUMMY_EXPENSES
    );
    const addExpense = (expenseData) => {
        dispatch({ type: "ADD", payload: expenseData });
    };
    const deleteExpense = (id) => {
        dispatch({ type: "DELETE", payload: { id: id } });
    };
    const updateExpense = (id, expenseData) => {
        dispatch({
            type: "UPDATE",
            payload: { id: id, data: expenseData },
        });
    };
    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
};
export default ExpensesContextProvider;
