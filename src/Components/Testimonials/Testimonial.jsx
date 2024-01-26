import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'
import Portfolio1 from '../../img/portfolio.png'
import Notepage from '../../img/notepage.png'
import NewsApp from '../../img/newsapp.png'
import LMS from '../../img/LMS.png'
import Textutils from '../../img/text.png'
import WhatsappClone from '../../img/WhatsappClone.png'
import Clapingo from '../../img/Clapingo.png'
import Snakegame from '../../img/Snakegame.png'
import Drawing from '../../img/drawing.png'
function Testimonials() {
  const clients = [{
    title: "Learning Management System",
  img: LMS,
  review:
  `1. Empowered trainers to create lectures, add courses, and generate detailed PDF notes for specific lectures.
  2. Implemented a seamless backend API for efficient uploading of trainer-created notes.
  3. Designed an approver page to facilitate thorough review and approval of notes before student access.
  4. Introduced a user-friendly lecture section, enabling trainers to create and manage lectures across multiple courses.
` ,
  
  
},{
  title: "PORTFOLIO WEBSITE",
img: Portfolio1,
review:
"This website is developed using HTML , CSS, javascript and React ,which includes functionalities like DarkMode,sliding cards (using swiper library),framer-motion library for animation and emailjs for contact form" ,


}
,
{
  title: "DSA Draw",
  img: Drawing,
  review:"DSA problem-solving web app! Visualize DSA concepts with drawing tools: rectangles, lines, text, circles, arrays,pencil and magical pencil. Undo/redo actions, real-time canvas rendering. ReactJS, JS, CSS. Boost your problem-solving skills!",
},
{
  title: "iNotebook",
  img: Notepage,
  review:"This website  is developed using HTML , Bootstrap, javascript and React and MongoDB as a database which is useful for creating,deleting ,updating personal notes , which includes all CRUED functionalities and also Sign up , Log in and Log out option  for authentication...   ",
},
{
  title: "Newsapp",
  img: NewsApp ,
  review:" This webapp is developed using HTML , Bootstrap, javascript ,React and news api for fetching news of different categories like entertainment , Science , General and Sports which includes functionalities like infinite-scroll ,loading bar etc",
},
{
  title: "TextUtils",
  img: Textutils,
  review:" This Webapp is developed using HTML , Bootstrap, javascript and React. This website is useful for converting para in uppercase or lowercase , copying ,caculating number of words and characters and also has functionality of DarkMode ",
},
{
  title: "Whatsapp Clone",
  img: WhatsappClone,
  review:" This impressive web application leverages frontend technologies such as ReactJs, Material-UI, and JavaScript, along with powerful backend technologies including NodeJs, MongoDB, and ExpressJs. It seamlessly incorporates real-time chatting capabilities through Socket.IO, enabling users to communicate, share files, images, and view online/offline status and profile details.",
}
,
{
  title: "Clapingo company",
  img: Clapingo,
  review:"This website was assigned to me by Clapingo company in the form of a Figma design, which I transformed into a fully functional website using technologies such as ReactJS, CSS, Bootstrap, JavaScript, etc., completing the task in just three days.",
}
,
{
  title: "Snake Game",
  img: Snakegame,
  review:"This web gives me an idea of how we can create a game using JavaScript functionalities like event listeners, the window.requestAnimationFrame(main) function, assigning different game variables, and adding sound to the game.",
}



]
  return (
    <div className="t-wrapper" id='Testimonitals'>
      <div className="t-heading">
        <span>Personal projects </span>
        
        <span>Description </span>
       
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
<div className="blur t-blur2" style={{bakground: "skyblue"}}></div>
      </div> 
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination = {{clickable:true}}
      >
      {clients.map((client,index)=>{
        return(
         < SwiperSlide key={index}>
          <div className="testimonial">
          <h3>{client.title}</h3>
          <img src={client.img} alt="" />
          <span>{client.review}</span>
          </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </div>
    // slider
   
  )
}

export default Testimonials