const currentstate={
    cart:[]
}

const Reducers= (state=currentstate , action) => {
    switch (action.type) {
        case "Add-to-Cart":
         let cart = state.cart.findIndex((Item)=> Item.id === action.payload.id)

          if(cart >=0){
            state.cart[cart].quantity +=1
          }
          else{
            let payment ={...action.payload, quantity:1}
            return{
                ...state,
                cart:[...state.cart, payment]
            }
        }
        
       case "Remove-To-cart":
        let datas = state.cart.filter((val)=> val.id != action.payload) 

    return{
        ...state,
        cart:datas
    }

    case "Decrement-To-cart":
        let cartindex =state.cart.findIndex((Item)=> Item.id === action.payload.id)
        if (state.cart[cartindex].quantity >=1){
            state.cart[cartindex].quantity -= 1

            return{
                ...state,
                cart:[...state.cart] 
            }
        }
        else if(state.cart[cartindex].quantity ===1){
            let datas =state.cart.filter((val)=> val.id != action.payload)
            return{
                ...state,
                cart:datas
            }
        }
        default:
           return state
    }
}
export default Reducers