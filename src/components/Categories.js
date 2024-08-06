import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants";
import { TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Categories(activeCategory, setActiveCategory) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((cat, index) => {
            let isActive =cat.name==activeCategory;
            let activeButtonClass = isActive? 'bg-amber-400': 'bg-black/10';
          return (
            <TouchableOpacity
              key={index}
              onPress={()=>setActiveCategory(cat.name)}
              className="flex items-center space-y-1" style={{height:hp(14)}}
            >
              <View style={{ borderRadius: 50,paddingRight:-15,  }} className={"rounded-full p-[6px]" +activeButtonClass} >
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: hp(6), height: hp(6), borderRadius: 50 }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.3), paddingRight:5, left:4, top:5, width:hp(10.5), }}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
