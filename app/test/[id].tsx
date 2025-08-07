import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Item = () => {
  const params = useLocalSearchParams();
  console.log(params?.id)

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>{params.id}</Text>
      <Text>{params.name}</Text>
    </View>
  )
}

export default Item