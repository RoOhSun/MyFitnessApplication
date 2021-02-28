import abs from './screens/abs'
import * as api from './src/api'
import {store} from './src/store'
import back from './screens/back'
import login from './screens/login'
import legs from './screens/legs'
import chest from './screens/chest'
import signup from './screens/signup'
import biceps from './screens/biceps'
import {Provider} from 'react-redux'
import React, { Component } from 'react'
import payment from './screens/payment'
import triceps from './screens/triceps'
import shoulder from './screens/shoulder'
import dashboard from './screens/dashboard'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{View,Text} from  'react-native'


const Stack = createStackNavigator();

export default function App() {
  
  
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [loading, setLoading] = React.useState(true);



 React.useEffect(() => {
  setLoading(true);

  AsyncStorage.getItem('user').then(response => {
    if(response) {
      console.log('my value ', response);
      setIsLoggedin(true);
    }
   
  }).finally(() => {
    setLoading(false)
  })
  async function fetchData() {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // value previously stored
        console.log('my value ', value);
        setIsLoggedin(true);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
  return () => fetchData;

}, []);

if (loading) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Loading...</Text>
    </View>
  );
}

  React.useEffect(() => {
    api
      .getAllPosts()
      .then((response) => {
        console.log('response', response);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  
    return (
      <Provider store ={store}>
      <NavigationContainer>
      <Stack.Navigator headerMode={null}>
        {!isLoggedin ? (
          <>
            <Stack.Screen name="login" component={login} />
            </>
        ):(
        <>
        <Stack.Screen name="dashboard" component={dashboard} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="payment" component={payment} />
        <Stack.Screen name="back" component={back} />
        <Stack.Screen name="chest" component={chest} />
        <Stack.Screen name="shoulder" component={shoulder} />
        <Stack.Screen name="biceps" component={biceps} />
        <Stack.Screen name="legs" component={legs} />
        <Stack.Screen name="triceps" component={triceps} />
        <Stack.Screen name="abs" component={abs} />
      </>  
        )}
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
    )
  
}

