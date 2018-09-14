import React from 'react';


const EditExpensePage = (props) => {
    console.log(props);
    {/* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params, so we can take that value and fetch data from database*/ }
    return (
        <div>
            Editing expense with the ID of {props.match.params.id}
        </div>
    );
};
export default EditExpensePage;