import Expense from "./Expense";

const ExpenseList = ({expenses, setEditExpense, eliminateExpense, filter, filterExpenses}) => {
    return (
        <div className='expense-list container'>
            {
                filter ? (
                    <>
                        <h2>{filterExpenses.length ? "Expenses" : 'No expenses in this category'}</h2>
                        {filterExpenses.map(expense => (
                            <Expense 
                            key={expense.id}
                            expense={expense}
                            setEditExpense={setEditExpense}
                            eliminateExpense={eliminateExpense}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{expenses.length ? "Expenses" : 'No Expenses Yet'}</h2>
                        {expenses.map(expense => (
                            <Expense 
                            key={expense.id}
                            expense={expense}
                            setEditExpense={setEditExpense}
                            eliminateExpense={eliminateExpense}
                            />
                        ))}
                    </>
                )
            }
        </div>
    );
};

export default ExpenseList;