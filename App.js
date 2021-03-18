import abs from './screens/abs'
import * as api from './src/api'

import back from './screens/back'
import login from './screens/login'
import legs from './screens/legs'
import chest from './screens/chest'
import signup from './screens/signup'
import biceps from './screens/biceps'

import React, { Component } from 'react'
import payment from './screens/payment'
import triceps from './screens/triceps'
import shoulder from './screens/shoulder'
import dashboard from './screens/dashboard'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View,Text, SafeAreaView} from  'react-native'
import {useSelector} from 'react-redux'
import addPlan from './screens/addPlan'
import setPlan from './screens/setPlan'

const Stack = createStackNavigator();



export default function App() {

   const {login1} = useSelector(state => state.user)
  const [loading, setLoading] = React.useState(true);


  async function fetchData() {
    setLoading(true)
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // value previously stored
        console.log('my value ', value);
        //setIsLoggedin(true);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    } finally {
      setLoading(false);
    }
  }




React.useEffect(() => {

  fetchData();
},[])


 React.useEffect(() => {

  AsyncStorage.getItem('user').then(response => {
    if(response) {
      console.log('my username ', response);
     // setIsLoggedin(true);
    }
   
  })
 
}, []);

if (loading) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Loading...</Text>
    </View>
  );
}

 
  
    return (
     <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Stack.Navigator headerMode={()=>null}>
        {!login1 ? (
          <>
            <Stack.Screen name="login" component={login}/>
            <Stack.Screen name="signup" component={signup} />
            </>
        ):(
        <>
        <Stack.Screen name="MyFitness" component={dashboard} />
        <Stack.Screen name="payment" component={payment} />
        <Stack.Screen name="back" component={back} />
        <Stack.Screen name="chest" component={chest} />
        <Stack.Screen name="shoulder" component={shoulder} />
        <Stack.Screen name="biceps" component={biceps} />
        <Stack.Screen name="legs" component={legs} />
        <Stack.Screen name="triceps" component={triceps}  />
        <Stack.Screen name="abs" component={abs} />
        <Stack.Screen name="addPlan" component={addPlan} />
        <Stack.Screen name="setPlan" component={setPlan} />
      </>  
        )}
      </Stack.Navigator>
     
    </NavigationContainer>
    </SafeAreaView>
  
  
    )
  
}

