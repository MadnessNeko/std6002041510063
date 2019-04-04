import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super()
        this.state ={
            email: '',
            password: ''
        }
        //this.onChangeEmail = this.onChangeEmail.bind()
    }
    onChangeEmail(e){
        console.log('onChangeEmail', e)
        this.setState({ email: e })
    }
    onChangePassword(e){
        this.setState({ password: e })
    }
    onPress(){
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response => {
                console.log('token', response).data.data.token
            })
    }
    render() {
        return (
            <View>
                <TextInput 
                    style={{ height: 60 , fontWeight: 'bold', fontSize: 20}} 
                    placeholder = "Email" 
                    value={this.state.email}
                    onChangeText = { this.onChangeEmail.bind(this) } />
                <TextInput 
                    secureTextEntry style={{ height: 60 , fontWeight: 'bold', fontSize: 20}} 
                    placeholder = "Password" 
                    value={this.state.password}
                    onChangeText = { this.onChangePassword.bind(this) } />   
                <Button
                    title="Login"
                    color="#1E90FF"
                    onPress={this.onPress.bind(this)}
                />
            </View>
       );
    }
} 

export default Login;
