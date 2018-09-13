// will only be in charge of bootstrap things tha live elsewhere

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
// makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>

//         </div>
//     );
// };

ReactDOM.render(<p> This is my boilerplate!</p>, document.getElementById('app'));
