import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {mainContext} from "../context";
import {incrementCount} from "../actions";

export default function AnotherScreen({ route }) {
	const {state: {count}, dispatch} = useContext(mainContext);
	const navigation = useNavigation();
	const {login} = route.params;
	
	// Dès qu'on reçoit le login, on modifie la top bar pour rajouter ce que l'on veut
	useEffect(() => {
		if(login) {
			navigation.setOptions({ title: login })
		}
	}, [login])
	
	return (
		<View style={styles.container}>
			<Text>AnotherScreen here!</Text>
			<Button
				title="Back to Home"
				onPress={() => navigation.navigate('Home')}
			/>
			<Button
				title="Increment count"
				onPress={() => dispatch(incrementCount())}
			/>
			<Text>Count: {count}</Text>
			<Text>Login from home: {login}</Text>
		</View>
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
