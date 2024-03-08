import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart, selectCartItemsById } from "../slices/cartSlice";
import { useSelector } from "react-redux";
import { urlFor } from "../sanity";

export default function DishRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCartItemsById(state, item._id));

  const handleIncrease = () => {
    dispatch(addToCart({...item}));
  }

  const handleDecrease = () => {
    dispatch(removeToCart({id : item._id}));
  }

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        source={{uri : urlFor(item.image).url()}}
        style={{ width: 100, height: 100 }}
        className="rounded-3xl"
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className=" flex-row justify-between pl-3 items-center">
          <Text className="text-lg text-gray-700 font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              disabled={!totalItems.length}
              onPress={handleDecrease}
              className="rounded-full p-1 "
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                stroke="white"
                height={20}
                width={20}
              />
            </TouchableOpacity>
            <Text className="px-2">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="rounded-full p-1 "
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                stroke="white"
                height={20}
                width={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
