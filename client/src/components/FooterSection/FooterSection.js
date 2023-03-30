import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import classes from './FooterSection.module.css';

const footerSection = props => {
    return (
        <div className={classes.FooterSection}>
            Built with {" "}
            <FontAwesomeIcon icon={faCoffee} />
            {" "} by <span><a href="https:github.com/satvikchachra">Satvik Chachra</a></span>
        </div>
    )
}

export default footerSection;