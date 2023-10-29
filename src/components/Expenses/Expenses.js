import './Expenses.css';    
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filterdYear, setFileterdYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFileterdYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filterdYear;
    });

    

    return (
        <div> 
        <Card className="expenses">
            <ExpensesFilter 
            selected={filterdYear} 
            onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items = {filteredExpenses}/>
            
            {/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
            <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
            <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}></ExpenseItem> */}

        </Card>
        </div>
    );
}

export default Expenses;