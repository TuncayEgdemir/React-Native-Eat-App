import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { feautred } from "../constants/index";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { removeToCart, selectCartItems, selectCartTotal } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { urlFor } from "../sanity";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotals = useSelector(selectCartTotal) ;
  const deliveryFee = 2;
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState({}) ;
  const navigation = useNavigation();

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
          if(group[item.id]) {
            group[item.id].push(item);
          }else{
            group[item.id] = [item];
          }
          return group;
    }, {})
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="flex-1 bg-white">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 top-5 left-2 p-2 rounded-full shadow"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center text-xl font-bold">You Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4  items-center"
      >
        <Image
          source={require("../assets/images/kurye.png")}
          className="w-20 h-20 rounded-full "
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key,items])=> {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl shadow-md mx-2 mb-3"
            >
              <Text>{items.length}</Text>
              <Image source={{uri : urlFor(dish.image).url()}} className="w-14 h-14 rounded-3xl" />
              <Text className="flex-1">{dish.name}</Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                onPress={()=>dispatch(removeToCart({id: dish.id}))}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${cartTotals}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">${deliveryFee + cartTotals}</Text>
        </View>
        <View>
          <TouchableOpacity
           onPress={()=>navigation.navigate("OrderPrepairing")}
           className="p-3 rounded-full"
           style={{backgroundColor : themeColors.bgColor(2)}}
          >
            <Text className="text-white text-center text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
