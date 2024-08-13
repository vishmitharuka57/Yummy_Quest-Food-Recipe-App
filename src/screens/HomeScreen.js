import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { t } from "react-native-tailwindcss";
import Categories from "../components/Categories";
import FoodRecipes from "../components/FoodRecipes";
import axios from 'axios';


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
    //  console.log("got Categories: ", response.data);
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        <SafeAreaView className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{
              height: hp(6),
              width: hp(6),
              borderRadius: 50,
              top: 16,
              left: 15,
            }}
          />
          <Image
            source={require("../../assets/images/notification.png")}
            style={{ height: hp(3), width: hp(3), top: -25, right: -330 }}
          />

          <View className="mx-4 space-y-2 mb-2">
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: "500",
                color: "#6C5F5B",
                left: 10,
              }}
            >
              Hello, Vishmi!
            </Text>
            <View>
              <Text
                style={{
                  fontSize: hp(5),
                  fontWeight: "600",
                  color: "#6C5F5B",
                  left: 15,
                  top: 10,
                }}
              >
                Make Your Own Food,
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp(5),
                fontWeight: "600",
                color: "#6C5F5B",
                left: 15,
                top: 10,
              }}
            >
              stay at{" "}
              <Text
                style={{ fontSize: hp(6), fontWeight: "800", color: "#FF9209" }}
              >
                Home
              </Text>
            </Text>
          </View>
        </SafeAreaView>

        <View
          style={{
            flexDirection: "row",
            borderRadius: 32,
            backgroundColor: "white",
            width: hp(44),
            height: hp(6),
            left: 11,
            top: 25,
          }}
        >
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{ left: 20, fontSize: hp(2.1) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <Image
              source={require("../../assets/images/search.png")}
              style={{
                height: hp(3),
                width: hp(3),
                top: hp(1.5),
                left: hp(24),
              }}
            />
          </View>
        </View>
        <View>
          <View style={{ top: hp(7), height: hp(19) }}>
          {categories.length>0 &&  <Categories
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            /> }
          </View>
            <View>
             <FoodRecipes />
            </View>

        </View>
      </ScrollView>
    </View>
  );
}
