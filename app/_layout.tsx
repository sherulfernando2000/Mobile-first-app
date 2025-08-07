import { View, Text, Pressable } from "react-native";
import React from "react";
import { Slot, usePathname, useRouter, useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FooterNav from "../components/FooterNav";
import { AuthProvider } from "@/context/AuthContext";


const _layout = () => {
  const router = useRouter();
  
  const segment = useSegments() // ["project"]
      const activeRouter = "/"+ (segment[0] || "")
      console.log("active router",activeRouter)
  

  const pathName = usePathname();
  console.log("pathname", pathName);

  const hideFooter = ["/login", "/signup"].includes(pathName);

  return (
    <AuthProvider>
        <SafeAreaView className="flex-1 p-10">
          {/* Like outlet */}
          <Slot />

          {hideFooter? null: (
            <FooterNav/>
          )}
        
        </SafeAreaView>
    </AuthProvider>
    
  );
};

export default _layout;
