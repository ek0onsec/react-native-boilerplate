import React, {useReducer} from "react";
import { StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {initialState, reducer} from "./src/reducer";
import {mainContext} from "./src/context";
import Home from "./src/screens/Home";
import AnotherScreen from "./src/screens/AnotherScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	const [state, dispatch] = useReducer(reducer,initialState);
	
	return (
	  <mainContext.Provider value={{state, dispatch}}>
		  <NavigationContainer>
			  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
				  <Stack.Screen name="Home" component={Home} options={{ title: 'Accueil' }}/>
				  <Stack.Screen name="AnotherScreen" component={AnotherScreen} options={{ title: 'Another Screen' }}/>
			  </Stack.Navigator>
		  </NavigationContainer>
	  </mainContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
