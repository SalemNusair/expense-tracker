import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
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
            date: new Date("2021-02-19"),
        },
        {
            id: "e10",
            description: "Table",
            amount: 18.59,
            date: new Date("2021-02-18"),
        },
    ];
    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
};
export default ExpensesOutput;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});
