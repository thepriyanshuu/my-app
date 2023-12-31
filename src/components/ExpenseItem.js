import './ExpenseItem.css';

function ExpenseItem(props){
    const day = props.date.toLocaleString("en-US",{day: '2-digit'})
    const month = props.date.toLocaleString("en-US",{month: 'long'})
    const year = props.date.getFullYear();

    return (
<div className='expense-item'>
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
            <div className='expense-itme_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>$200</div>
            </div>
        </div>
    );
}
export default ExpenseItem;


sf