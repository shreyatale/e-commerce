import React from 'react';
import Does from './Does';
import Product1 from './Product1';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import About1 from './About1';
import Foot from './Foot'
import Companyname from './Companyname';



const Home = ({search}) => {

  return (
    <div className='home'>
    <OwlCarousel className='owl-theme' loop margin={10} nav  autoplay autoplayTimeout={1000} autoplayHoverPause items={1} dots>
    <div class='item'>
    <img src="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    <div class='item'>
    <img src="https://images.pexels.com/photos/6954212/pexels-photo-6954212.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />  
    </div>
   <div class='item'>
    <img src="https://images.pexels.com/photos/10522808/pexels-photo-10522808.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> 
    </div>
   </OwlCarousel>

   <div>
    <Does/>
    </div>
    <div>
   <About1/>
    </div>
   <div>
    <Product1 search={search}/>
    </div>
   <div><Companyname/></div>
    <div style={{margin:50}}>
   <Foot/>
    </div>
    </div>
  )
}

export default Home