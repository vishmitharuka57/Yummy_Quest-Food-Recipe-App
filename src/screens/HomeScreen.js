import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <SafeAreaView style={{flex:1}}>
      <Header headerText={"Hi, Vishmi Tharuka"} headerIcon={"bell-0 "} />
      </SafeAreaView>
     
    </View>
  );
}

const styles = StyleSheet.create({});
