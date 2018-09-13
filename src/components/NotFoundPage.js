import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! <Link to="/"> Go home</Link>
        {/*no whole page refresh, client side routing*/}
    </div>
);
export default NotFoundPage;