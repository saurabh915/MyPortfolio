import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from  './Saurabh_Patil(1).pdf'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
function Services() {
        const transition = {duration:1,type:'spring'}
        const theme = useContext(themeContext);
        const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome" id='s-awesome'>
<span style={{color: darkMode?'white':""}}>My awesome</span>
<span>services</span>
<span>
I am a skilled MERN stack developer with a passion for creating web applications using MongoDB, Express.js, React.js, and Node.js.
    <br />
    Additionally, I am an enthusiastic AI and ML enthusiast, exploring the latest trends and technologies in artificial intelligence and machine learning. Whether you need a robust web application or want to integrate AI-driven features into your projects, I can provide innovative solutions tailored to your specific needs.
</span>
<a href={Resume} download>
<button className="button s-button">Download CV</button>
</a>
        </div>
<div className="blur s-blur1" style={{background: '#ABF1FF94' }}></div>
        {/* right side */}
        <div className="cards">
 <motion.div
className='pls'
 whileInView={{left:'15rem',bottom:"0rem"}}
initial={{left:'15rem'}}
transition={transition}
style={{left: '15rem',bottom:"0rem"}}>
        <a href="https://drive.google.com/drive/folders/1hlUXrNBNj-Pyaq7W2cRXaLCbSco8vSB2?usp=drive_link">
<Card 

emoji = {HeartEmoji}
heading = {'Machine Learning And Artificial Intelligence'}
detail = {`Certifications:
         Deep Learning Specialization by Andrew Ng`}
/></a>
</motion.div>
 <motion.div
className='fwd'
 whileInView={{left:'0rem'}}
initial={{left:'0rem'}}
transition={transition}
style={{left: '15rem'}}>
<Card 

emoji = {HeartEmoji}
heading = {'Frontend Web Development'}
detail = {"HTML , CSS , JS , ReactJs , Bootstrap , Material UI "}
/>
</motion.div>
<motion.div
className='fwd'
 whileInView={{top:'16rem',left:'0rem'}}
initial={{left:'0rem'}}
transition={transition}
style={{top: '0rem' ,left:'15rem',width:'30px'}}>

<div className='bwd' style={{top: '12rem' ,left:'-4rem'}}>
<Card 

emoji = {Glasses}
heading = {'Backend Development'}
detail = {"NodeJs,Mongodb,ExpressJs"}
/>
</div>
</motion.div>
<div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
<motion.div 
className='cc'
 whileInView={{top:'16rem',left:'15rem'}}
 initial={{left:'0rem'}}
 transition={transition}
style={{top: '0rem' ,left:'15rem',width:'30px'}}>
<Card 
emoji = {Humble}
heading = {'Competative Coder'}
detail = {` 1. Practiced 250+ unique problems on leetcode , GeekforGeeks ,HackerRank...
                  
                     2. Secured rank 121 in Codechef's Long Challange in
                      month of September among 27367 participants
                      across globe         `}
/>
</motion.div>
<div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services