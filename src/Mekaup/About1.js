import React from 'react'
import Hot from './Hot'

const About1 = () => {
  return (
    <div>
    <div className="about">
    <div className="about1">
    <div className="photo">
    <img src="https://th.bing.com/th/id/OIP.uq8OmI9Jux8xxT5ma6rZ5QHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    <div>
    <h3>Discover your next favorite lipstick</h3>
    <p>You'll be falling in love with shades every monthe with <span style={{color:'palevioletred'}}>3 exclusive lippie colors!</span></p>
    <button>SUBSCRIBE</button>
    </div>
    </div>
    <div className="about1">
    <img src="https://th.bing.com/th/id/OIP.kRr4ArjSoeeN4mslEDg-2gHaEt?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
    </div>
    
    <div>
  <Hot/>
    </div>
    </div>
  )
}

export default About1