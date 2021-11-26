import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: Dimensions.get('window').width,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: '#0288d1'
      },
      text: {
      color:'white',
      fontSize: 18,
      fontWeight: 'bold',
  }
})