import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component{
    render() {
        return ( 
            <View>
                <CardSection>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <Image 
                            style={{ width: 100, height: 100, marginTop: 10, marginLeft: 10 }}
                            source={{ uri: 'http://cdn.albumoftheyear.org/album/139393-the-dream-chapter-star.jpg'}} 
                        />
                        <View style={{ marginTop: 10, marginLeft: 10 }}>
                            <Text>The Dream Chapter: Star</Text>
                            <Text>TOMORROW X TOGETHER</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                        style={{ width: 390, height: 400, marginTop: 10, marginLeft: 10, marginRight: 10  }}
                        source={{ uri: 'https://www.educatepark.com/wp-content/uploads/2019/03/TXT-1.jpg'}} 
                    />
                </CardSection>
                <CardSection>
                <View style={styles.button}>
                <View style={{ width: 100 }}>
                <Button
                    title="Buy it!"
                    color="#1E90FF"
                />
                </View>
                </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }
}

export default Card;