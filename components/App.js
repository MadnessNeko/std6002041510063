import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';

class App extends React.Component {
    render() {
        return (
            <View>
                <Header title="Album"></Header>
                <Card></Card>
                <Text>Somjade Wongriantong</Text>
            </View>
       );
    }
} 

export default App;
