import React from 'react';
import classes from './Container.module.css';
import Background from '../source/bg__main.jpg';

export default props => {
    return (
        <main>
            <div className={classes.MainContainer}> {props.children} </div>
        </main>
    )
}