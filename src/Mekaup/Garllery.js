import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Foot from './Foot';



const Garllery = () => {
  return (
    <div>
    <div className='garllery' >
    <div className="garllery1">
    <h1>Collention of Photos</h1>
    </div>
    <OwlCarousel className='owl-theme' loop margin={10} nav   autoplayTimeout={1000} autoplayHoverPause items={3}>
    <div class='item'>
    <img src="https://th.bing.com/th/id/OIP.bx-Link34IZbf4qlKnlQ-QHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    <div class='item'>
    <img src="https://th.bing.com/th/id/OIP.FawBURsmPomCwe23zi3VsAHaLH?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    <div class='item'>
    <img src="https://th.bing.com/th/id/OIP.VtxvsAKyXWlR6OGbzj0ONAHaL5?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    <div class='item'>
    <img src="https://th.bing.com/th/id/OIP.0mZcRbIfHHkptcDpqrJLcwHaGR?w=186&h=158&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    <div class='item'>
    <img src="https://th.bing.com/th/id/OIP.-4VJrGlDg9avoIA1Q-aG4wHaJ9?w=186&h=251&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    <div class='item'>
    <img src="https://th.bing.com/th/id/OIP.O5YQDuv0JzE5CYj9nQis9wHaJQ?w=186&h=233&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div> <div class='item'>
    <img src="https://th.bing.com/th/id/OIP.UzcJrjagYNZRXWg3Pdi17gHaEK?w=186&h=104&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    </OwlCarousel>
    </div>
    <div style={{marginTop:290}}><Foot/></div>
   </div>
  )
}

export default Garllery