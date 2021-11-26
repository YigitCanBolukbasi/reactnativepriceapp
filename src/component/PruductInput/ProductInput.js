import React from 'react'   
import {View,Text} from 'react-native'
import Inputcard from '../InputCard/Inputcard'
import Buttonadd from '../Button.Add/Button.Add'

function PruductInput ({sendData}) {

 /*name ve price için input state kodları*/
 const [name, setChangeName] = React.useState();
 const [price, setChangePrice] = React.useState();
 
 const OnInput = () => {
 sendData(name,price,setChangeName,setChangePrice)
 }
 
 return(
  <View>
    <Inputcard 
    onchange={setChangeName}
    valuee ={name}
    textname='Name'
    placeholder = 'write a text'
    />
    <Inputcard 
    onchange={setChangePrice}
    valuee ={price}
    textname='Price'
    placeholder = 'write a price'
    type= 'number'
    />
   <View>
    <Buttonadd title='Add'
     handleAdd={OnInput}/>  
   </View>
  </View>
)};

export default PruductInput ;