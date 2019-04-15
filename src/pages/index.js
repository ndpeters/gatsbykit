import React from 'react';
import Head from '../components/head';
import Button from 'react-bootstrap/Button';
import AnImage from '../images/gatsby-icon.png';
import {Link} from 'gatsby';

const IndexPage = (props) => {
    return(
        <React.Fragment>
            <Head />
            <h1>Something New</h1>
            <Button>Simple Button</Button>
            <img src={AnImage} alt="" />
            <Link to="test">Link To Test Page</Link>
        </React.Fragment>
    );
}

export default IndexPage;