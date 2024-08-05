import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        top:50,
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
        <FontAwesome name={icon} size={20} color="#FC6736" />
      <TextInput style={{paddingLeft:8, fontSize:16, color:"#808080"}}>{placeholder}</TextInput>
    </View>
  );
};

export default SearchFilter;


