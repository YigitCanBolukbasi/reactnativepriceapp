import React from 'react'
import {View, Text} from 'react-native'
import Button from '../Button/Button'       
import styles from './badge.styles'

function Badge({setbuttonIncrease,DecreaseButton,dateButton}) {
 return (
    <View style={styles.buttons}>
        <Button onClick={() => setbuttonIncrease(true)} title={'Artan Fiyat'}/>  
        <Button onClick={() => DecreaseButton()} title={'Azalan Fiyat'}/> 
        <Button onClick={() => dateButton()} title={'Tarih'}/> 
    </View>    
)
}

export default Badge
