import React from 'react';
import classes from './HomeAboutPages.module.css'

function Home() {
    return (
        <div>
            <h1 className={classes.titleStyle}>Bias Buster</h1>
            <h2 className={classes.comingSoonRegular}>Debunking Politics One Article at a Time</h2>
            <a href="http://localhost:3000/Compare">
                <button className={`${classes.button_1} ${classes.left_button}`}>Let's Compare</button>
            </a>
            <a href="http://localhost:3000/About">
                <button className={`${classes.button_1} ${classes.right_button}`}>About Us</button>
            </a>
        </div>
    );
}

export default Home;