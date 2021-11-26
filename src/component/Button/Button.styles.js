import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: Dimensions.get('screen').width*3/10,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor:'#bdbdbd',
       
        
      },
      text: {
      color:'black',
      fontSize: 18,
      fontWeight: 'bold',
  }
})