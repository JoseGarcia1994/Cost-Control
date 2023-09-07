
const ResetModal = ({setBudget, setExpenses, setIsValidBudget, setResetModal}) => {

    const handleResetApp = () => {
        setBudget(0);
        setExpenses([]);
        setIsValidBudget(false)
        setResetModal(false)
    }

    return (
        <div className="reset__modal-container">
            <div className="reset__modal">
                <p className="reset__modal-title">Are you sure you want to reset app?</p>
                <button 
                className="reset__modal-btn-no"
                onClick={() => setResetModal(false)}
                >
                    No
                </button>
                <button 
                className="reset__modal-btn-yes"
                onClick={handleResetApp}
                >
                    Yes
                </button>
            </div>
        </div>
    );
};

export default ResetModal;