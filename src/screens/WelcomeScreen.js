import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  const ring1padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value=0;
    setTimeout(() => ring1padding.value = withSpring(padding.value + hp(50)),100);
  },[]);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="light" />

      <Animated.Image
        source={require("../../assets/images/welcomeImage.png")}
        style={{
          width: hp(30),
          height: hp(60),
          top: 110,
          padding: ring1padding,
        }}
      />
      <View className="flex items-center space-y-2">
        <Text
          style={{
            fontWeight: "700",
            fontSize: hp(8),
            top: 110,
            color: "#FB773C",
          }}
        >
          Yummy Quest
        </Text>
      </View>

      <View>
        <Text style={{ fontWeight: "100", fontSize: hp(2), top: 110 }}>
          {" "}
          Your Culinary Adventure Begins Here!
        </Text>
      </View>
    </View>
  );
}
