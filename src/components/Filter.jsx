import {useState, useEffect} from 'react';

const Filter = ({filter, setFilter}) => {
    return (
        <div className='filters shadow container'>
            <form>
                <div className='camp'>
                    <label>Filter Expenses</label>
                    <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">-- All Categories --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="otherexpenses">Other Expenses</option>
                        <option value="hobbies">Hobbies</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Filter;