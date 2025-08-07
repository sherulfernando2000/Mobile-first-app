import { View, Text, Pressable } from "react-native";
import React from "react";
import { Slot, usePathname, useRouter, useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FooterNav from "../components/FooterNav";


const _layout = () => {
  const router = useRouter();
  
  const segment = useSegments() // ["project"]
      const activeRouter = "/"+ (segment[0] || "")
      console.log("active router",activeRouter)
  

  const pathName = usePathname();
  console.log("pathname", pathName);

  const hideFooter = ["/login", "/signup"].includes(pathName);

  return (
    <SafeAreaView className="flex-1 p-10">
      {/* Like outlet */}
      <Slot />

      {hideFooter? null: (
        <FooterNav/>
      // <View className="flex-row w-full items-center gap-2 px-2">
      //   <Pressable
      //     className="w-1/3 px-2 py-2 bg-blue-700 rounded-lg flex justify-center"
      //     onPress={() => {
      //       router.push("/");
      //     }}
      //   >
      //     <Text className="text-center">Home</Text>
      //   </Pressable>
      //   <Pressable
      //     className="w-1/3 px-2 py-2 bg-blue-700 rounded-lg"
      //     onPress={() => {
      //       router.push("/project");
      //     }}
      //   >
      //     <Text className="text-center">Project</Text>
      //   </Pressable>
      //   <Pressable
      //     className="w-1/3 px-2 py-2 bg-blue-700 rounded-lg"
      //     onPress={() => {
      //       router.push("/user");
      //     }}
      //   >
      //     <Text className="text-center">User</Text>
      //   </Pressable>
      // </View>
      )}
     
    </SafeAreaView>
  );
};

export default _layout;
