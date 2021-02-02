import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './login'
import dashboard from './dashboard'
import signup from './signup'
import Measurement from './Measurement'
import Exercise from'./Exercise'
import SetPlan from './SetPlan'
import HireTrainer from './HireTrainer'

const Stack = createStackNavigator();

const App=()=> {
  
    return (
      <NavigationContainer>
      <Stack.Navigator headerMode={null}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="dashboard" component={dashboard} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="Measurement" component={Measurement}/>
        <Stack.Screen name="Exercise" component={Exercise}/>
        <Stack.Screen name="SetPlan" component={SetPlan}/>
        <Stack.Screen name="HireTrainer" component={HireTrainer}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  
}
export default App;
