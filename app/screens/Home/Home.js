import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableHighlight, TouchableOpacity, ScrollView, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles'
import {connect} from "react-redux";
import Signup from "../Register/Signup";
import ImageSlider from 'react-native-image-slider';

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

        const images = [
            'https://placeimg.com/640/640/nature',
            'https://placeimg.com/640/640/people',
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer'
        ];

        return(
            <View style={Styles.container}>

                <View style={Styles.header}>
                    <TouchableOpacity  style= {Styles.headerSubContent} onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('./../../images/menu.png')} style={Styles.menuImg}/>
                    </TouchableOpacity>
                     <Text style={Styles.departHeading}>Dashboard</Text>
                </View>
                <ScrollView>

                <View style={{backgroundColor:'red', height:height}}>

                        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
                            <View style={{flex:0.3, backgroundColor: 'skyblue'}}>
                                <ImageSlider
                                    loopBothSides
                                    autoPlayWithInterval={2000}
                                    images={images}
                                />
                            </View>
                            <View style={{flex:0.7, backgroundColor: 'steelblue'}}>
                                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
                                    <View style={{flex:0.5, backgroundColor: 'skyblue'}}>

                                    </View>
                                    <View style={{flex:0.3, backgroundColor: 'green'}}>

                                    </View>
                                    <View style={{flex:0.2, backgroundColor: 'blue'}}>

                                    </View>
                                </View>
                            </View>
                        </View>

                </View>
                </ScrollView>

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