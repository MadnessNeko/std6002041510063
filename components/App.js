import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <View>
                <Header title="Album"></Header>
                <Text>Somjade Wongriantong</Text>
            </View>
       );
    }
} 

export default App;
