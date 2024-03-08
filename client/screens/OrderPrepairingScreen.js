import { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function OrderPrepairing() {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 3000)
    }, [])
  return (
    <View className="flex-1 bg-white justify-center items-center">
        <Image source={require("../assets/images/j.gif")} className="w-full h-44" />
    </View>
  )
}