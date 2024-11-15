import React from 'react';
import classes from './HomeAboutPages.module.css'

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add(".active");
        } else {
            reveals[i].classList.remove(".active");
        }
    }
}

window.addEventListener("scroll", reveal, {passive: true});

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
            <h1 className={classes.meetCreatorsTitle}>Meet the Creators</h1>
            <p className={classes.authorsRightSide}>Eshita</p>
            <p className={classes.textContent3R}>
                Hi there! I'm Eshita Kulai. I'm a freshman at<br></br>  
                UIUC studying Computer Science and Linguistics.<br></br> 
                My favorite part about Computer Science is the<br></br> 
                 fact that you can make anything to you heart's<br></br>
                desire! A part of why I got into Computer<br></br>  
                Science was learning how Computer Science was<br></br> 
                integrated into the current technology and how<br></br> 
                 its used in many programs and softwares. In<br></br> 
                the future, I see myself doing data analysis<br></br>  
                at a tech company. I also see myself creating<br></br> 
                video games in the future as well.<br></br> 
            </p>
            <p className={classes.authorsLeftSide}>Lei</p>
            <p className={classes.textContent3L}>
                I'm Lei, a freshman studying CS + Music. My<br></br> 
                favorite part about CS is building projects<br></br> 
                that have real-world applications. I first was<br></br> 
                introduced to CS through developing silly video<br></br> 
                games on Scratch in middle school, helping me<br></br> 
                realize my love for building tangible and<br></br> 
                interactive experiences. In the future, I<br></br> 
                hope to expand upon this and combine it with<br></br> 
                my interest in music to create new experiences<br></br> 
                centered around sound, music, and AI.<br></br>
            </p>
            <p className={classes.authorsRightSide}>Michaela</p>
            <p className={classes.textContent3R}>
                Hello, I’m Michaela, and I am a freshman majoring in<br></br>  
                Computer Science. In high school, I enjoyed math and<br></br>  
                playing in orchestra, but in my AP Comp Sci classes,<br></br>  
                I got to use the perfect combination of problem solving<br></br>  
                and logical and creative thinking skills while building<br></br>  
                projects, which is my favorite part of CS. In the future,<br></br> 
                I plan on going into cybersecurity and working for<br></br>  
                the government.<br></br> 
            </p>
            <p className={classes.authorsLeftSide}>Rachel</p>
            <p className={classes.textContent3L}>
                Hi, I'm Rachel Chen, a freshman studying Computer<br></br>  
                Science with a minor in Mathematics. Growing up,<br></br>  
                I always enjoyed math because of the way that it<br></br>  
                worked my brain and challenged me. Through<br></br>  
                learning how to program, I found that CS did the<br></br>  
                same for me. I decided to study CS after competing<br></br>  
                in SkillsUSA for Computer Programming which piqued<br></br>  
                my interest in coding. In the future, I hope to<br></br>  
                work in cybersecurity or AI.<br></br>
            </p>
            <p className={classes.authorsRightSide}>Shrest</p>
            <p className={classes.textContent3R}>
                Hey! I’m Shrest, and I am a freshman studying<br></br>  
                Computer Science at the University of Illinois<br></br>  
                Urbana-Champaign. My interest in computer science<br></br>  
                stemmed from robotics, where I experienced a new<br></br>  
                world combining my passion for mathematics and<br></br>  
                problem solving through complex control theory,<br></br>  
                vision processing, and algorithmic optimization.<br></br>  
                As I explored the field further, I fell in love<br></br>  
                with the sheer versatility of its applications,<br></br>  
                priming me to continue my journey in the field.<br></br>  
                In the future, I hope to be more involved in<br></br>  
                the area of artificial intelligence, harnessing<br></br>  
                machine learning to create new solutions in any<br></br>  
                of the continuously emerging fields.<br></br> 
            </p>
            <p className={classes.authorsLeftSide}>Ted</p>
            <p className={classes.textContent3L}>
                Hi, my name is Ted Roh, and I am a freshman studying<br></br> 
                Information Science + Data Science. I began programming<br></br>
                in ninth grade, motivated by a desire to customize<br></br> 
                Minecraft through mod development in Java. This early<br></br> 
                experience introduced me to data manipulation and<br></br> 
                complex logic structures, laying the foundation for<br></br> 
                my interest in data engineering and data science.<br></br> 
                In the future. I want to be more involved in the<br></br> 
                field of data engineering and data science.<br></br>
            </p>
            <p className={classes.authorsRightSide}>Lahari</p>
            <p className={classes.textContent3R}>
                Hi, my name is Lahari Anantha and I am a freshman<br></br> 
                studying Information Science + Data Science. I<br></br> 
                became interested in computer science after doing<br></br> 
                VEX Robotics in middle school and becoming interested<br></br> 
                in how tangible actions could be expressed in a<br></br> 
                logical way. From there, I got involved in programs<br></br> 
                like Kode with Klossy and realized that I was<br></br> 
                interested in using computer science and data<br></br> 
                analysis in order to extract insights. I want to be<br></br>
                more involved in data engineering and ML/AI in the<br></br> 
                future.<br></br>
            </p>
            
        </div>
    );
}

export default About;