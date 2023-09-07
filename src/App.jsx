import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpenseModal from './components/ExpenseModal'
import ExpenseList from './components/ExpenseList'
import Filter from './components/Filter'
import { generateId } from './helpers'

function App() {
  
  const [expenses, setExpenses] = useState([
    ...(JSON.parse(localStorage.getItem("expenses")) ?? [])
  ]);

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [expenseModal, setExpenseModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpense, setEditExpense] = useState({});

  const [filter, setFilter] = useState('');
  const [filterExpenses, setFilterExpenses] = useState([]);

  const [resetModal, setResetModal] = useState(false)

  // Once expense is edit will open form to update expense
  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setExpenseModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editExpense])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    if (filter) {
      const filterExpenses = expenses.filter( expense => expense.category === filter)
      setFilterExpenses(filterExpenses);
    }
  }, [filter])
  

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, [])
  
  const handleNewExpense = () => {
    setExpenseModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveExpense = expense => {
    if (expense.id) {
      // Update Expense
      const updatedExpense = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState);
      setExpenses(updatedExpense)
      setEditExpense({})
    } else {
      // New Expense
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false)
    setTimeout(() => {
      setExpenseModal(false)
    }, 500);
  }

  const eliminateExpense = (id) => {
    const updatedExpense = expenses.filter( expense => expense.id !== id);
    setExpenses(updatedExpense);
  }

  return (
    <div className={expenseModal ? 'pin' : ''}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        resetModal={resetModal}
        setResetModal={setResetModal}
      />

      {isValidBudget && (
        <>
          <main>
            <Filter 
            filter={filter}
            setFilter={setFilter}
            />
            <ExpenseList
              expenses={expenses}
              setEditExpense={setEditExpense}
              eliminateExpense={eliminateExpense}
              filter={filter}
              filterExpenses={filterExpenses}
            />
          </main>
          <div className='new-expense'>
            <i
              className='bx bxs-plus-circle bx-lg bx-burst-hover'
              onClick={handleNewExpense}
            >
            </i>
          </div>
        </>
      )}

      {expenseModal &&
        <ExpenseModal
          setExpenseModal={setExpenseModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />}
    </div>
  )
}

export default App
