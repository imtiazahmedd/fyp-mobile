import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles'

class Home extends Component{

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
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity  style= {Styles.headerSubContent} onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('./../../images/menu.png')} style={Styles.menuImg}/>
                    </TouchableOpacity>
                     <Text style={Styles.departHeading}>Home</Text>
                </View>
            </View>
        )
    }
}

export default Home