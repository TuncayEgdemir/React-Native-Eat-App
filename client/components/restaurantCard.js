import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { urlFor } from "../sanity";

export default function RestaurantCard({ item }) {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback 
        onPress={() =>navigation.navigate("Restaurant", {...item})}
    >
      <View style={{
        shadowColor :  themeColors.bgColor(0.3),
        shadowRadius : 7,
      }}  className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={{uri : urlFor(item.image).url()}} />
        <View className="px-3 pb-4 space-y-2">
           <Text className="text-lg font-bold pt-2">{item.name}</Text>
           <View className="flex-row items-center space-x-1">
                <Image source={require("../assets/images/fullStar.jpg")} className="h-6 w-6" />
                <Text className="text-xs">
                    <Text className="text-gray-700">{item.stars}</Text>
                    <Text className="text-gray-700"> 
                        ({item.reviews} review)  · <Text className="font-semibold">{item.y}</Text>
                    </Text>
                </Text>
           </View>
           <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" stroke="gray" />
                <Text className="text-gray-600 text-xs">
                  Nearby ·s  {item.adress}
                </Text>
           </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
