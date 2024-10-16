import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
const ManageExpense = ({ route, navigation }) => {
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    // the two !! to convert to bolean
    const isEditing = !!editedExpenseId;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);
    const deleteExpenseHandler = () => {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    };
    const cancelHandler = () => {
        navigation.goBack();
    };
    const confirmHandler = () => {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, {
                description: "test!!!",
                amount: 29.2,
                date: new Date("2024-10-08"),
            });
        } else {
            expensesCtx.addExpense({
                description: "test",
                amount: 19.99,
                date: new Date("2024-10-08"),
            });
        }
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button
                    style={styles.button}
                    mode="flat"
                    onPress={cancelHandler}
                >
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                    {isEditing ? "Update" : "Add"}
                </Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
};
export default ManageExpense;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    },
});
