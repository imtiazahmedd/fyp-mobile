import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles'

class Login extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View>
                <Text>file Structure</Text>
            </View>
        )
    }
}

export default Login