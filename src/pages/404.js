import React from 'react';
import {Link} from 'gatsby';


const PageNotFound = () => {
    return ( 
        <React.Fragment>
            <h1>404 page not found</h1>
            <Link to="/">return to safety</Link>
        </React.Fragment>
     );
}
 
export default PageNotFound;