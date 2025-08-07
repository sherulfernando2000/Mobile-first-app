import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import '../global.css'

const index = () => {
  return (
    // div -> View
    // p -> Text
     <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!!!!
      </Text>
      <Link href={'/login'} className='text-xl bg-green-800 px-4 py-2 rounded-full'>Go to Login</Link>
      <Link href={'/project'} className='text-xl'>project</Link>
      <Link href={'/user'} className='text-xl'>User</Link>
      {/* <Link href={'/test/[1234]'} className='text-xl'>Item</Link> */}
      <Link href={{
        pathname: "/test/[id]",
        params: {
          id: "1234",
          name: "sherul",
        }
      }} className='text-xl'>Item</Link>
    </View>
  )
}

export default index