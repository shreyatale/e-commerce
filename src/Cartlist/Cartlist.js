import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import './Cartlist.css'
import { add, dec, remove } from '../Redux/Actions/Actions'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Cartlist = () => {
  const [data, setdata]=useState([])

  console.log(data)
  const dispatch=useDispatch()
  const getdata=useSelector((state)=>state.Reducers.cart)
  const {id} =useParams()
  console.log(id)
const navigator=useNavigate()
  function compare(){
    const camparedata = getdata.filter((val)=>{return val.id == id})
    setdata(camparedata)
  }
  useEffect(()=>{
    compare()
  },[id])

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
  
  return (
    <div className='cartlist'>
   
    {
      data.map(function (val){
        return(
          <div className="cartlist1">
          <div className="cartlist2" key={val.id}>
          <TransformWrapper>
          <TransformComponent>
          <img src={val.pimge} alt="" />
          </TransformComponent>
          </TransformWrapper>
          </div>
          <div className="cartlist3">
          <p>{val.productname}</p>
          <p>MRP {val.price}</p>
          <p>Quantity:-{val.quantity}</p>
          <h5>Total {val.price * val.quantity}</h5>
          <div className="quantity">
          <button onClick={val.quantity <=1 ? ()=> del(val.id) :()=> desc(val)}>-</button>
          <span>{val.quantity}</span>
          <button onClick={()=>send(val)}>+</button>
          </div>
          <button onclick={buy}>Buy</button>
          </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default Cartlist