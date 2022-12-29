import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'
import Portfolio1 from '../../img/portfolio.png'
import Notepage from '../../img/notepage.png'
import NewsApp from '../../img/newsapp.png'
import Textutils from '../../img/text.png'
function Testimonials() {
  const clients = [{
    title: "PORTFOLIO WEBSITE",
  img: Portfolio1,
   review:
   "This website is developed using HTML , CSS, javascript and React ,which includes functionalities like DarkMode,sliding cards (using swiper library),framer-motion library for animation and emailjs for contact form" ,


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