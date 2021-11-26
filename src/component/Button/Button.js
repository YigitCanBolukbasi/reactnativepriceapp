import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'
import styles from './Button.styles'

function Button({title, onClick}) {
    
    return (
      <View>
       <TouchableOpacity
        style={styles.button}
        onPress={onClick}> 
        <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
      </View>
    )
}



export default Button
