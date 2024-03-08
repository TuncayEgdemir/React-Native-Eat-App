import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal  = useSelector(selectCartTotal)
    if(!cartItems.length) return ;
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center  p-4 py-3 rounded-full shadow-2xl mx-5"
      >
        <View className="rounded-full p-2 px-4 bg-orange-300">
          <Text className="text-white font-extrabold text-lg">{cartItems.length}</Text>
        </View>

        <Text className="text-white font-bold text-lg">View Cart</Text>
        <Text className="text-white font-bold text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
