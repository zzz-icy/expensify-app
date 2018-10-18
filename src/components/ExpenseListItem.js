import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
    // const expenses = props.expenses;
    // console.log(props);
    return (
        //  make everywhere clickable 
        <Link
            className="list-item"
            to={`/edit/${props.data.id}`}
        >
            <div>
                <h3 className="list-item__title"> {props.data.description} </h3>
                <span className="list-item__subtitle">
                    {moment(props.data.createdAt).format('MMMM Do, YYYY')}
                </span>
            </div>
            <h3 className="list-item__data">
                {numeral(props.data.amount / 100).format('$0,0.00')}
            </h3>
        </Link>
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