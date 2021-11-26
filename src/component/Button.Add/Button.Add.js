import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'
import styles from './ButtonAdd.styles'


/* add buttonu için title propu kullanıldı.
 başka bir komponentten tetiklenmek üzere
 handleadd     fonksiyonu     çağırıldı*/

function Buttonadd({title, handleAdd}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Buttonadd;
