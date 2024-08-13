import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';



export default function WelcomeScreen({ navigation}) {

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="light" />

      <Image
        source={require("../../assets/images/welcomeImage.png")}
        style={{
          width: hp(50),
          height: hp(60),
          top: 70,
        }}
      />
      <View className="flex items-center space-y-2">
        <Text
          style={{
            fontWeight: "700",
            fontSize: hp(8),
            top: 70,
            color: "#FB773C",
          }}
        >
          Yummy Quest
        </Text>
      </View>

      <View>
        <Text style={{ fontWeight: "100", fontSize: hp(2), top: 70 }}>
         
          Your Culinary Adventure Begins Here!
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={() =>navigation.navigate("Home")} style={{backgroundColor:"#FB773C",borderRadius:18, paddingVertical:18, width:140,  alignItems:"center",top:70,}}>
            <Text style={{fontSize:18, color: "#F8EDED", fontWeight:"700"}}>Let's Cook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

