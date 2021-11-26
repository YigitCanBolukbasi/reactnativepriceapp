import React from 'react'
import { View ,Text } from 'react-native'
import styles from './Card.styles'

function Card({name_card,price_card}) {
 return (
  <View>
   <View style={styles.card}>
    <View>
     <Text style={styles.card_name}>{name_card}</Text>
    </View>
    <View> 
     <Text style={styles.card_price}>{price_card}</Text>
    </View>
   </View>
    <View style={styles.border}></View>
  </View>
    )
}

export default Card;
