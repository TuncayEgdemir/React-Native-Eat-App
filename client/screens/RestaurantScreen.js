import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
import { urlFor } from "../sanity";


export default function RestaurantScreen({ navigation }) {
  const { params } = useRoute();
  let item = params;
  const dispatch = useDispatch();
  useEffect(() => {
    if(item && item._id) {
      dispatch(setRestaurant({...item}));
    }
  }, []);
  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image source={{uri : urlFor(item.image).url()}} className="h-72 w-full" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute bg-gray-50 top-14 left-4 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white pt-6 -mt-12"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.jpg")}
                  className="h-6 w-6"
                />
                <Text className="text-xs">
                  <Text className="text-gray-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) ·{" "}
                    <Text className="font-semibold">{item.type.name}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" stroke="gray" />
                <Text className="text-gray-600 text-xs">
                  Nearby · {item.adress}
                </Text>
              </View>
            </View>
            <Text className="text-lg font-semibold">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={{...dish}} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
