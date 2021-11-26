import React from 'react'
import {Text, View, TextInput} from 'react-native'
import styles from './Inputcard.styles'


function Inputcard({textname, valuee, onchange, placeholder ,type}) {
    return (
    <View>
      <Text style={styles.text_name}>{textname}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onchange}
        value={valuee}
        placeholder = {placeholder}
        type= {type}
      />
      </View>
    )
}

export default Inputcard;