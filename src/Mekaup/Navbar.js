import React, { useEffect, useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import { useNavigate} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import {  useDispatch, useSelector } from 'react-redux'
import { remove,dec,add } from '../Redux/Actions/Actions';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { event } from 'jquery';
const Navbar = ({search, setsearch,cheak,change}) => {
  const getdata=useSelector((state)=>state.Reducers.cart)
  console.log(getdata) 
  const dispatch=useDispatch()
  const navigator=useNavigate()
const [price, setprice]=useState(0)

function trash(id){
  dispatch(remove(id))
}

function total(){
  let price=0
  getdata.map(function(val){
    price= val.price * val.quantity + price
  })
  setprice(price)
}
  useEffect(()=>{
    total()
  },[total])


  function send(a){
    dispatch(add(a))
    
  }
  function desc(b){
    dispatch(dec(b))
      }
      function del(id){
        dispatch(remove(id))
        navigator("/")
      }
      function buy(){
        navigator("/buy")
      }
 
      const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [click, setclick]=useState(false)
  const handleClicks = ()=> setclick(!click)

  

  return (
    <div className='navbar'>
    <div className="navbar1">
    <Link to="/"><h1>LAYRA</h1></Link>
    </div>
    <ul className={click ? "navbar2 active" : "navbar2"}>
    
    <div className= "nav ">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/product">Product</NavLink></li>
    <li><NavLink to="/garllery">Gallery</NavLink></li>
    <li><NavLink to="/contant">Contant</NavLink></li> 


    <div className="search">
    <input type="search" placeholder='search' value={search} onChange={(e)=>setsearch(e.target.value)}/>
    </div>
    <div className='lightmood'>
    <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked checked={cheak} onChange={change} />}
         
          /> 
    </div>

    <div className='logo'>
    <Badge badgeContent={1} color="primary" className='no'>
    <i id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick} className="fa-solid fa-heart" ></i></Badge>

    
    <Badge badgeContent={getdata.length} color="primary" className='no'>
    <i id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick} className="fa-solid fa-cart-shopping" style={{paddingLeft:15}}></i>
    </Badge>
    </div>
    </div>
    </ul>
    <div className="humburger" onClick={handleClicks}>
    {click ? (<i className="fa-solid fa-xmark"></i>):(<i className="fa-solid fa-bars"></i>) }
    </div>
   <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >

    {
      getdata.length ?
      <div className="shop1">
      <h4>Your's Cart</h4>
      {
        getdata.map(function (val){
        return(
          <div>
        <div className="inform">
        <Link to={`/Cartlist/${val.id} ` } onClick={handleClose}>
        <div className="roimge">
        <img src={val.pimge} alt="" />
        </div></Link>
        <div className="roproduct">
        <p>{val.productname}</p>
        <p>price:-{val.price}</p>
        <p className='quantity'>Quantity:-
        <h4 onClick={val.quantity <=1 ? ()=> del(val.id) :()=> desc(val)}>-</h4>
        <p>{val.quantity}</p>
        <h4 onClick={()=>send(val)}>+</h4></p>
        <button onClick={buy} >Buy</button>
        </div>
        <div className='trash'>
        <i className="fa-solid fa-trash" onClick={ () =>trash(val.id)}></i>
        </div>
        </div>
        
       </div>
        )
       })

      }
      <div className="total" >
      <h5>Total {price}</h5>
      </div>
      </div>
      : 
      <div className="shop">
      <i class="fa-solid fa-xmark" onClick={handleClose}></i>
      <h4>Cart is empty</h4>
      <img src="https://th.bing.com/th/id/OIP.LLGWy0PWdxA78lrmne8GqAAAAA?w=220&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
      </div>
      
      
    }
   
   </Menu>
</div>
  )
}

export default Navbar