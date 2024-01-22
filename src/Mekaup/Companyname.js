import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

const Companyname = () => {
    return (
        <div>
        <div className='company'>
        <OwlCarousel className='owl-theme ' loop margin={5} nav autoplay  autoplayTimeout={500} autoplayHoverPause items={4} >
        <div class='item'><h1>REVOLUTION</h1></div>
        <div class='item'><h1>MILANI</h1></div>
        <div class='item'> <h1>L.A.GIRL</h1></div>
        <div class='item'><h1>LVMEL</h1></div>
        <div class='item'><h1>pigment play</h1></div>
        <div class='item'><h1>OW</h1></div>
        <div class='item'><h1>LOS ANGELES</h1></div>
        <div class='item'><h1>KORIC</h1></div>
        <div class='item'><h1>MAKEUP *</h1></div>
        </OwlCarousel>
        </div>
        </div>
    )
}

export default Companyname