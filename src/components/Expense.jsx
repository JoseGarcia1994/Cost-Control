import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from "../helpers";

import IconSavings from '../img/icono_ahorro.svg';
import IconHouse from '../img/icono_casa.svg';
import IconFood from '../img/icono_comida.svg';
import IconOtherExpenses from '../img/icono_gastos.svg';
import IconHobbies from '../img/icono_ocio.svg';
import IconHealth from '../img/icono_salud.svg';
import IconSubscriptions from '../img/icono_suscripciones.svg';

const Expense = ({ expense, setEditExpense, eliminateExpense }) => {

    const dicIcons = {
        saving: IconSavings,
        food: IconFood,
        house: IconHouse,
        otherexpenses: IconOtherExpenses,
        hobbies: IconHobbies,
        health: IconHealth,
        subscriptions: IconSubscriptions
}

const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => setEditExpense(expense)}>
            Edit
        </SwipeAction>
    </LeadingActions>
)

const trailingActions = () => (
    <TrailingActions>
        <SwipeAction
        destructive={true} 
        onClick={() => eliminateExpense(expense.id)}
        >
            Delete
        </SwipeAction>
    </TrailingActions>
)
return (
    <SwipeableList>
        <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        >
            <div className='expense shadow'>
                <div className='content-expense'>
                    <img 
                    src={dicIcons[expense.category]} 
                    alt=""
                    />
                    <div className='description-expense'>
                        <p className='category'>{expense.category}</p>
                        <p className='name-expense'>{expense.nameExpense}</p>
                        <p className='date-expense'>
                            Added: {''}
                            <span>{formatDate(expense.date)}</span>
                        </p>
                    </div>
                </div>

                <p className='quantity-expense'>${expense.quantity}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
);
};

export default Expense;