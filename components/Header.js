import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component{
    render() {
        return (
            <View style= { styles.header }>
                <Text style= { styles.text }>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headbar: {
        color: '#FFF',
        fontSize: 30,

    },
    headpic: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 7.5,
        borderRadius: 5
        

    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        //borderRadius: 5,
        borderColor: '#222',
        backgroundColor: '#000',
        shadowColor: '#C5C',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        elevation: 10,
        position: 'relative' 
    }
    
});

export default Header;
