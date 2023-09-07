import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";
import ResetModal from "./ResetModal";

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses, resetModal, setResetModal}) => {
    return (
        <header>
            <h1>Financial Planning Tool</h1>
            
            {
                resetModal && 
                <ResetModal 
                setExpenses={setExpenses}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
                setResetModal={setResetModal}
                />
            }
            
            {isValidBudget ? (
                <BudgetControl 
                budget={budget}
                expenses={expenses}
                setResetModal={setResetModal}
                />
            ) : (
                <NewBudget 
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    );
};

export default Header;