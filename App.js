import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from './src/screens/HomeScreen'
import TodoList from "./src/screens/TodoList"
import ExpenseTracker from "./src/screens/ExpenseTracker"
import DemoScreen from "./src/screens/DemoScreen"
const Stack = createStackNavigator()

const App = () =>{
  return(
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="To do" component={TodoList}/>
      <Stack.Screen name="Expense" component={ExpenseTracker}/>
      <Stack.Screen name="Demo" component={DemoScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App