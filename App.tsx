import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageScreen from './src/screens/MessageScreen'
import Login from './src/screens/Login'
import AgreementPage from './src/screens/AgreementPage'
import OTPScreen from './src/screens/OTPScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChattingScreen from './src/screens/ChattingScreen'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <View style={{
    //   flex:1
    // }}>
    //   {/* statusbar  */}
    //   

    // <OTPScreen />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AgreementPage'
      screenOptions={{
        headerShown : false
      }}
      >
        <Stack.Screen name='AgreementPage' component={AgreementPage} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='OTPScreen' component={OTPScreen} />
        <Stack.Screen name='MessageScreen' component={MessageScreen} />
        <Stack.Screen name='ChattingScreen' component={ChattingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})