import {useState, useEffect} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({budget, expenses, setResetModal}) => {

    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce( (total, expense) => expense.quantity + total, 0);
        const totalAvailable = budget - totalSpent

        // Calculate percentage spent
        const newPercentage = (((budget - totalAvailable) / budget ) * 100).toFixed(2);
        
        setSpent(totalSpent);
        setAvailable(totalAvailable);

        setTimeout(() => {
            setPercentage(newPercentage);    
        }, 1000);
    }, [expenses])
    

    const formatBudgetCurrency = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    /* const handleResetApp = () => {
        setBudget(0);
        setExpenses([]);
        setIsValidBudget(false)
    } */

    return (
        <div className='container-budget container shadow two-columns'>
         <div>
            <CircularProgressbar
            styles={buildStyles({
                pathColor: percentage > 100 ? '#DC2626' : '#3b82F6',
                trailColor: '#f5f5f5',
                textColor: percentage > 100 ? '#DC2626' : '#3b82F6'
            })} 
            value={percentage}
            text={`${percentage}% Spent`}
            >
            </CircularProgressbar>
         </div>

        <div className='content-budget'>
            <button 
            className='reset-app' 
            type='button'
            onClick={() => setResetModal(true)}
            >
                Reset App
            </button>
            <p>
                <span>Budget:</span> {formatBudgetCurrency(budget)}
            </p>
            <p className={`${available < 0 ? 'negative' : ''}`}>
                <span>Available:</span> {formatBudgetCurrency(available)}
            </p>
            <p>
                <span>Spent:</span> {formatBudgetCurrency(spent)}
            </p>
        </div>
        </div>
    );
};

export default BudgetControl;