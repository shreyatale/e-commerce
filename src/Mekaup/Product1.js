import React, { useState } from 'react'
import Cartdata from '../Cartdata'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Redux/Actions/Actions'


const Product1 = ({ search }) => {
    const [data, setdata] = useState(Cartdata)
    console.log(data)
    const getdata = useSelector((state) => state.Reducers.cart)
    console.log(getdata)
    const dispatch = useDispatch()



    function send(a) {
        dispatch(add(a))
    }

   
    const [hide, sethide] = useState(6)
    const slice = data.slice(0, hide)
    function visible() {
        sethide(hide + hide)
    } 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let filterdatas=slice.filter((ab)=>ab.productname.toLowerCase().includes(search))
    console.log(filterdatas)
    return (
        <div>
        <div>
            <div className="productmain">
                <h3>Your Product</h3>
            </div>
            <div className="product">

                {
                    filterdatas.map(function (val) {
                        return (
                            <div className='product1'>
                                <img src={val.pimge} alt="" />
                                <h2>{val.productname}</h2>
                                <h3>MRP:- {val.price}</h3>
                                <i className="fa-solid fa-heart"></i>
                                <button onClick={() => send(val)}>Buy</button>
                            </div>
                        )

                    })

                }

            </div>
            <button className='view' onClick={visible} >View More <span onClick={handleClick}> <i class="fa-solid fa-xmark" onClick={handleClose}></i></span></button><br />
        </div>
        
        
        </div>

    )
}

export default Product1