import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
    // const expenses = props.expenses;
    // console.log(props);
    return (
        <div>
            <Link to={`/edit/${props.data.id}`}><h3> {props.data.description} </h3></Link>
            <p> {props.data.amount} - {props.data.createdAt}</p>

        </div>
    );
};

// deconstructure

//<ExpenseListItem data={item} {...item} />
// if the data is passed in like {...item}, in ExpenseListItem will can use the destructure version

// const ExpenseListItem = ({ description, amount, createdAt }) => {
//     // const expenses = props.expenses;
//     // console.log(props);
//     return (
//         <div>
//             <h3> {description} </h3>
//             <p> {amount} - {createdAt}</p>
//         </div>
//     );
// };

// we do not need the states in store, just want the dispatch, no arguments passed in 
export default ExpenseListItem;