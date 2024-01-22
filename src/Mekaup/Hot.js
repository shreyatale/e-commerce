import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 
const Hot = () => {
  return (
    <div className='superhot' >
    <div className='hot' >
    <h2>HOT RIGHT NOW</h2>
    </div>
    <div className="hot1">
    <AwesomeSlider >
    <div className="Item"><img src="https://www.hokmakeup.com/cdn/shop/files/Hot_Right_Now_-_Milani.jpg?v=1703570683" alt="" /></div>
    <div className="Item"><img src="https://www.hokmakeup.com/cdn/shop/files/Hot_Right_Now_-_MUR.jpg?v=1703570720" alt="" /></div>
    <div className="Item"><img src="https://www.hokmakeup.com/cdn/shop/files/Hot_Right_Now_-_Lamel.jpg?v=1703570645" alt="" /></div>
    <div className="Item"><img src="https://www.hokmakeup.com/cdn/shop/files/Hot_Right_Now_-_LA_Girl.jpg?v=1703570574" alt="" /></div>
    </AwesomeSlider>
    </div>
    </div>
  )
}

export default Hot