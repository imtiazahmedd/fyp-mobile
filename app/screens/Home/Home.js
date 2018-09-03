import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles'
import {connect} from "react-redux";
import Signup from "../Register/Signup";

class Home extends Component{

    static navigationOptions = {
        drawerLabel: 'Signup',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../../images/logout.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
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


const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};
export default connect(
    mapStateToProps
)(Home)