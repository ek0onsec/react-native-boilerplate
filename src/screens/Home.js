import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, Button, TextInput} from "react-native";
import {mainContext} from "../context";

export default function Home({ navigation }) {
	const {state: {example}} = useContext(mainContext);
	const [login, onChangeLogin] = useState('');
	
	return (
		<View style={styles.container}>
			<Text>Home here!</Text>
			<Text>Example in context: { example }</Text>
			<Text>Send this param to another screen :</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeLogin}
				value={login}
				placeholder="Login"
				keyboardType="default"
			/>
			<Button
				title="Go to AnotherScreen"
				onPress={() => navigation.navigate('AnotherScreen', {
					login: login,
				})}
			/>
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
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: 170,
	},
	
});
