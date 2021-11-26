import  React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList, Dimensions,} from 'react-native';
import Card from './component/Card/Card'
import ProductInput from './component/PruductInput/ProductInput' 
import Badge from './component/Badge/Badge'


function App() {
/*inputların toplandığı state */
const [data, setData] = React.useState([]);
/* artan sıralama için state ve if condition*/  
const [buttonIncrease, setbuttonIncrease] = React.useState(false);
const [buttonDecrease, setButtonDecrease] = React.useState(false);
const [buttonDate,SetButtonDate] = React.useState(false);
/**Flatlist için array ve if condition */
let newArray = 
  buttonIncrease ? [...data].sort((a, b) => a.price - b.price)
  : buttonDecrease ? [...data].sort((b, a) => a.price - b.price)
  : buttonDate ?  [...data].sort((a, b) => a.date - b.date): data;
/** buton tetikleyen fonksiyonlar */
const DecreaseButton = () => {
  setbuttonIncrease(false)
  setButtonDecrease(true)
}
const dateButton = () => {
  setbuttonIncrease(false)
  setButtonDecrease(false)
  SetButtonDate(true)
}
/* buttona basıldığı zaman ekrana yazdıran fonksiyon */
const handleInput = (name, price ,setChangeName,setChangePrice) => {
  const pruductData = {
    name: name,
    price: parseInt(price),
    id: Math.random(),
    date: new Date()
    }
    setData(prevState => [...prevState, pruductData])
    setChangeName ('')
    setChangePrice ('')
   }
return (
<SafeAreaView>
  <View > 
   <Badge setbuttonIncrease={setbuttonIncrease} DecreaseButton={DecreaseButton} dateButton={dateButton}  />
  </View>

  <View style={styles.flatlist}>
   <FlatList
    data={newArray}
    renderItem={({item}) => ( <Card name_card={item.name} price_card={item.price} /> 
    )}
    keyExtractor={(item,index)=> item.id.toString()}/>
  </View>

  <View>
   <ProductInput  sendData={handleInput} />  
  </View>
</SafeAreaView>

)}




const styles = StyleSheet.create({
  container: {
    flex:1
  },
  flatlist: {
    height: 500,
    width:Dimensions.get('window').width
   
  },
})

export default App;

