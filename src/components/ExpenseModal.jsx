import {useState, useEffect} from 'react';
import Message from './Message';
import CloseModal from '../img/cerrar.svg'

const ExpenseModal = ({setExpenseModal, animateModal, setAnimateModal, saveExpense, editExpense, setEditExpense}) => {

    const [mensaje, SetMensaje] = useState('');

    const [nameExpense, setNameExpense] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('')

    // This will fillout form if you click on edit
    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setNameExpense(editExpense.nameExpense);
            setQuantity(editExpense.quantity);
            setCategory(editExpense.category);
            setId(editExpense.id)
            setDate(editExpense.date)
          }
    }, [])
    
    const closeModal = () => {
        setAnimateModal(false)
        setEditExpense({})
        setTimeout(() => {
            setExpenseModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nameExpense, quantity, category].includes('')) {
            SetMensaje('All fields are mandatory')

            setTimeout(() => {
                SetMensaje('')
            }, 5000);
            return;
        }

        saveExpense({nameExpense, quantity, category, id, date})
    }
    return (
        <div className='modal'>
            <div className='close-modal'>
                {/* <img 
                src={CloseModal} 
                alt="Close Modal" 
                /> */}
                <i 
                className='bx bx-x bx-lg'
                onClick={closeModal}
                >
                </i>
            </div>

            <form onSubmit={handleSubmit} className={`form ${animateModal ? "animar" : 'cerrar'}`}>
                <legend>{editExpense.nameExpense ? 'Edit Expense' : 'New Expense'}</legend>
                {mensaje && <Message type='error'>{mensaje}</Message>}
                <div className='camp'>
                    <label htmlFor="name">Expense Name</label>

                    <input
                    id='name' 
                    type="text"
                    placeholder='Add Expense Name'
                    value={nameExpense}
                    onChange={(e)=>setNameExpense(e.target.value)}
                    />
                </div>

                <div className='camp'>
                    <label htmlFor="quantity">Quantity</label>

                    <input
                    id='quantity' 
                    type="text"
                    placeholder='Add Expense Quantity'
                    value={quantity}
                    onChange={(e)=> setQuantity(Number(e.target.value))}
                    />
                </div>

                <div className='camp'>
                    <label htmlFor="category">Category</label>

                    <select
                    id="category"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="otherexpenses">Other Expenses</option>
                        <option value="hobbies">Hobbies</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>                    
                </div>

                <input
                type="submit"
                value={editExpense.nameExpense ? 'Edit Expense' : 'Add Expense'}
                />
            </form>
        </div>
    );
};

export default ExpenseModal;