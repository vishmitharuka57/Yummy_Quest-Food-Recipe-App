import { View, Text, Pressable,Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import MasonryList from '@react-native-seoul/masonry-list'
import { mealData } from '../constants';



export default function FoodRecipes() {
  return (
    <View className="mx-4 space-y-3">
      <Text style={{fontSize: hp(3)}} className="text-neutral-600 font-semibold">Recipes</Text>
      <View>
        <MasonryList 
        data={mealData} 
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item,i}) => <RecipeCard item={item} index={i} />}
        //refreshing={isLoadingNext}
        //onRefresh={() => refetch({first: ITEM_CNT})}
        onEndReachedThreshold={0.1}
        //onEndReached={() => loadNext(ITEM_CNT)}
        />
      </View>
    </View>
  )
}

const RecipeCard = ({item,index}) =>{
  let isEven = index % 2==0;
  return(
    <View style={{}}>
     <Pressable
     style={{width: '100%', paddingLeft: isEven ? 0 : 10}}
     className= " flex "
     >
      <Image source={{uri: item.image}}
            style={{width: '100%', height: hp(35),backgroundColor:"black",margin:hp(1), borderRadius: 25, }}
           
            />
     </Pressable>
    </View>
  )
}