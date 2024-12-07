import React from "react";
import classes from "./HomeAboutPages.module.css";

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

window.addEventListener("scroll", reveal, { passive: true });

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
			<div className={classes.gridLayout}>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Eshita"/>
				<div>
					<p className={classes.authorsLeftSide}>Eshita</p>
					<p className={classes.textContent3R}>
						Hi there! I'm Eshita Kulai. I'm a freshman at
						UIUC studying Computer Science and Linguistics.
						My favorite part about Computer Science is the
						fact that you can make anything to you heart's
						desire! A part of why I got into Computer
						Science was learning how Computer Science was
						integrated into the current technology and how
						its used in many programs and softwares. In
						the future, I see myself doing data analysis
						at a tech company. I also see myself creating
						video games in the future as well.
					</p>
				</div>
			</div>
			<div className={classes.gridLayout}>
				<div>
					<p className={classes.authorsRightSide}>Lei</p>
					<p className={classes.textContent3L}>
						I'm Lei, a freshman studying CS + Music. My
						favorite part about CS is building projects
						that have real-world applications. I first was
						introduced to CS through developing silly video
						games on Scratch in middle school, helping me
						realize my love for building tangible and
						interactive experiences. In the future, I
						hope to expand upon this and combine it with
						my interest in music to create new experiences
						centered around sound, music, and AI.
					</p>
				</div>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Lei"/>
			</div>
			<div className={classes.gridLayout}>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Michaela"/>
				<div>
					<p className={classes.authorsLeftSide}>Michaela</p>
					<p className={classes.textContent3R}>
						Hello, I’m Michaela, and I am a freshman majoring in
						Computer Science. In high school, I enjoyed math and
						playing in orchestra, but in my AP Comp Sci classes,
						I got to use the perfect combination of problem
						solving
						and logical and creative thinking skills while building
						projects, which is my favorite part of CS. In the
						future,I plan on going into cybersecurity and
						working for
						the government.
					</p>
				</div>
			</div>
			<div className={classes.gridLayout}>
				<div>
					<p className={classes.authorsRightSide}>Rachel</p>
					<p className={classes.textContent3L}>
						Hi, I'm Rachel Chen, a freshman studying Computer
						
						Science with a minor in Mathematics. Growing up,
						I always enjoyed math because of the way that
						it
						worked my brain and challenged me. Through
						learning how to program, I found that CS did the
						
						same for me. I decided to study CS after competing
						
						in SkillsUSA for Computer Programming which piqued
						
						my interest in coding. In the future, I hope to
						work in cybersecurity or AI.
					</p>
				</div>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Rachel"/>
			</div>
			<div className={classes.gridLayout}>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Shrest"/>
				<div>
					<p className={classes.authorsLeftSide}>Shrest</p>
					<p className={classes.textContent3R}>
						Hey! I’m Shrest, and I am a freshman studying
						Computer Science at the University of Illinois
						Urbana-Champaign. My interest in computer science
						
						stemmed from robotics, where I experienced a new
						
						world combining my passion for mathematics and
						problem solving through complex control theory,
						vision processing, and algorithmic optimization.
						
						As I explored the field further, I fell in love
						with the sheer versatility of its applications,
						priming me to continue my journey in the field.
						In the future, I hope to be more involved in
						the area of artificial intelligence, harnessing
						machine learning to create new solutions in any
						of the continuously emerging fields.
					</p>
				</div>
			</div>
			<div className={classes.gridLayout}>
				<div>
					<p className={classes.authorsRightSide}>Ted</p>
					<p className={classes.textContent3L}>
						Hi, my name is Ted Roh, and I am a freshman
						studying Information Science + Data Science. I
						began programming in ninth grade, motivated bya
						desire to customize Minecraft through mod
						development in Java. This early experience
						introduced me to data manipulation and complex
						logic structures, laying the foundation for my
						interest in data engineering and data science.
						In the future. I want to be more involved in
						the field of data engineering and data science.
					</p>
				</div>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Ted"/>
			</div>
			<div className={classes.gridLayout}>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Lahari"/>
				<div>
					<p className={classes.authorsLeftSide}>Lahari</p>
					<p className={classes.textContent3R}>
						Hi, my name is Lahari Anantha and I am a freshman
						
						studying Information Science + Data Science. I
						became interested in computer science after doing
						
						VEX Robotics in middle school and becoming interested
						
						in how tangible actions could be expressed in a
						logical way. From there, I got involved in programs
						
						like Kode with Klossy and realized that I was
						interested in using computer science and data
						analysis in order to extract insights. I want to be
						
						more involved in data engineering and ML/AI in the
						
						future.
					</p>
				</div>
			</div>
			<div className={classes.gridLayout}>
				<div>
					<p className={classes.authorsRightSide}>Maryana</p>
					<p className={classes.textContent3L}>
						Hey, my name is Maryana Cholach and I am currently
						
						an undeclared major, but I'm hoping to get into
						Gies for Supply Managment with a minor in CS.
						My interest in Computer Science began towards
						the end in high school with my high school's
						classes on Computer Science and Girls Who Code
						club. From there, I continued to explore
						different aspects of CS and Data Analysis to
						see if this could be a possible area I could get
						
						involved in. I want to be more involved with AI
						and its algorithm to help in other areas in
						the future.
					</p>
				</div>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Maryana"/>
			</div>
			<div className={classes.gridLayout}>
				<img className={classes.aboutImg} src='https://tinyurl.com/634zx6z8' alt="Dhanish"/>
				<div>
					<p className={classes.authorsLeftSide}>Dhanish</p>
					<p className={classes.textContent3R}>
						Hi! My name is Dhanish Natarajan, and I'm currently
						a Sophomore, majoring in Statistics and CS. I
						am so
						grateful to be a PM for such an amazing & motivated
						
						team! I initially fell in love with CS by getting into
						
						game development. I also love the inter-disciplinary
						
						aspect of CS & data science, particularly in relation
						
						with environmental sustainability. Over the years, I
						
						realized that I simply love creating things that make
						
						an impact and working with others, which is my
						favorite part of CS. I hope to gain more work
						experience with CS, build cool projects, and join the
						
						startup space at UIUC.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
