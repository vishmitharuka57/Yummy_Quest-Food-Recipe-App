import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


export default function HomeScreen(){
    return(
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
        </View>
    )
}

const styles = StyleSheet.create({})