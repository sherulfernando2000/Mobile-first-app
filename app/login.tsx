import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
   const [username, setUsername] = useState(''); 
   const [password, setPassword] = useState(''); 

   const router = useRouter();

   const handleLogin = () => {
    if(username === 'admin' && password === '1234'){
        router.replace("/")
    }
   }


   const { isUser, login, logout, } =  useAuth()

  return (
     <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8">Welcome Back 👋</Text>

      <View className="w-full space-y-4">
        <TextInput
          className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-xl px-4 py-3 shadow-sm"
          placeholder="Username"
          placeholderTextColor="#6b7280"
          value={username}
          //onChange = {(e)=> setUsername(e.target.value) }
          onChangeText={setUsername}
        />

        <TextInput
          className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-xl px-4 py-3 shadow-sm"
          placeholder="Password"
          placeholderTextColor="#6b7280"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable className="w-full bg-blue-600 rounded-xl py-3 mt-2 shadow-md active:opacity-80" onPress={handleLogin}>
          <Text className="text-white text-center font-semibold text-base">Log In</Text>
        </Pressable>
      </View>

      <Text className="text-gray-500 mt-6">
        Don't have an account? <Text className="text-blue-600 font-semibold">Sign up</Text>
      </Text>
    </View>
  )
}

export default Login