export const add= (Item)=>{
    return{
        type:"Add-to-Cart",
        payload:Item
    }
}

export const remove =(id)=>{
return{
    type:"Remove-To-cart",
    payload:id
}
}

export const dec =(Item)=>{
    return{
        type:"Decrement-To-cart",
        payload:Item
    }
}