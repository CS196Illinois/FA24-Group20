import React from 'react';
import classes from './HomeAboutPages.module.css'


function About() {
    return (
        <div>
            <h1 className={classes.aboutTitleStyle}>About Us</h1>
            <p className={classes.paragraphContent}>
                Our app lets you compare two articles and<br></br>
                highlight the differences between<br></br>
                them; this is denoted by a percentage<br></br>   
            </p>
            <h1 className={classes.ourMissionStyle}>Our Mission</h1>
            <p className={classes.textContent2}>
                News Companies tell the same story using<br></br>
                vastly different perspectives. Our app enables<br></br> 
                you to tell these differences apart from each<br></br> 
                other, AND highlight their bias. Bias Buster<br></br> 
                enables YOU to determine the real story.<br></br>
            </p>
        </div>
    );
}

export default About;