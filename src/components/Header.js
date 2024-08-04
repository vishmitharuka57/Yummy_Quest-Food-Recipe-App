import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Header = ({headerText, headerIcon}) => {
  return (
    <View>
      <Text style={{color:"#FC6736"}}>{headerText }</Text>
      <FontAwesome icon={headerIcon}  size={24} color="#FC6736"/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})