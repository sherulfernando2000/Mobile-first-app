import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {  useRouter, useSegments } from 'expo-router';




const FooterNav = () => {

    const tabs = [
        {label:"Home",path:"/"},
        {label:"Project",path:"/project"},
        {label:"User",path:"/user"},
    ] as const

    const segment = useSegments() // ["project"]
    const activeRouter = "/"+ (segment[0] || "")
    console.log("active router",activeRouter)
    const router = useRouter();

  return (
    <View className="flex-row w-full items-center gap-2 px-2">
            {tabs.map(
                (tab,index)=>(
            <Pressable key={index}
              //tab.path === activeRouter
              className={`w-1/3 px-2 py-2  rounded-lg flex justify-center ${tab.path === activeRouter ? "bg-slate-500":"bg-blue-700"}`}
              onPress={() => {
                router.push(tab?.path);
              }}
            >
              <Text className="text-center">{tab.label}</Text>
            </Pressable>
            )
            )}
    </View>
  )
}

export default FooterNav