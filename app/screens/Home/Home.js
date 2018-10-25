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

                <View style={{height:1500}}>

                        <View style={{flex: 1,flexDirection: 'column'}}>
                            <View style={{flex:0.15}}>
                                <ImageSlider
                                    loopBothSides
                                    autoPlayWithInterval={2000}
                                    images={images}
                                />
                            </View>
                            <View style={{flex:0.9}}>
                                <View style={{flex: 1,flexDirection: 'column'}}>
                                    <View style={{flex:1}}>
                                        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
                                            <View style={{flex:0.333}}>
                                                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
                                                    <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                                        <Text style={{fontSize:20, fontWeight:'bold'}}>
                                                            Welcome To Legal Justice
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity style={{flex:0.3,alignItems:'center', justifyContent:'center'}}>
                                                        <Image source={require('./../../images/seven.jpeg')} style={{width:200, height:120, borderRadius:10}}/>
                                                    </TouchableOpacity>
                                                    <View style={{flex:0.15,alignItems:'center', justifyContent:'center'}}>
                                                        <Text style={{fontSize:17}}>
                                                            Business Law
                                                        </Text>
                                                    </View>
                                                    <View style={{flex:0.4}}>
                                                        <Text style={{marginHorizontal:30}}>
                                                            Law is a system of rules that are created and enforced through social or governmental
                                                             institutions to regulate behavior.[2] Law is a system that regulates and ensures that
                                                              individuals or a community Law is a system of rules that are created and enforced
                                                              through social or governmental institutions to regulate behavior.
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{flex:0.333}}>
                                                <TouchableOpacity style={{flex:0.3,alignItems:'center', justifyContent:'center'}}>
                                                    <Image source={require('./../../images/four.jpg')} style={{width:200, height:120, borderRadius:10}}/>
                                                </TouchableOpacity>
                                                <View style={{flex:0.15,alignItems:'center', justifyContent:'center'}}>
                                                    <Text style={{fontSize:17}}>
                                                        Family Law
                                                    </Text>
                                                </View>
                                                <View style={{flex:0.55}}>
                                                    <Text style={{marginHorizontal:30}}>
                                                        Law is a system of rules that are created and enforced through social or governmental
                                                         institutions to regulate behavior.[2] Law is a system that regulates and ensures that
                                                          individuals or a community Law is a system of rules that are created and enforced
                                                          through social or governmental institutions to regulate behavior.
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{flex:0.333}}>
                                                <TouchableOpacity style={{flex:0.3,alignItems:'center', justifyContent:'center'}}>
                                                    <Image source={require('./../../images/image-2.jpg')} style={{width:200, height: 120, borderRadius:10}}/>
                                                </TouchableOpacity>
                                                <View style={{flex:0.15,alignItems:'center', justifyContent:'center'}}>
                                                    <Text style={{fontSize:17}}>
                                                        People Security
                                                    </Text>
                                                </View>
                                                <View style={{flex:0.55}}>
                                                    <Text style={{marginHorizontal:30}}>
                                                        Law is a system of rules that are created and enforced through social or governmental
                                                         institutions to regulate behavior.[2] Law is a system that regulates and ensures that
                                                          individuals or a community Law is a system of rules that are created and enforced
                                                          through social or governmental institutions to regulate behavior.
                                                          through social or governmental institutions to regulate behavior

                                                    </Text>
                                                </View>
                                                <View style={{color:'green', height:120}}>
                                                    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
                                                        <View style={{flex:0.6,alignItems:'center', justifyContent:'center'}}>
                                                            <Image source={require('./../../images/logo.png')} style={{width:100, height:30}}/>
                                                        </View>
                                                        <View style={{flex:0.4,alignItems:'center', justifyContent:'center'}}>
                                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                                <TouchableOpacity style={{flex:0.15,alignItems:'center', justifyContent:'center'}}>
                                                                    <Image source={require('./../../images/search.png')} style={{width:30, height:30}}/>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                                                    <Image source={require('./../../images/twitter.png')} style={{width:40, height:40}}/>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                                                    <Image source={require('./../../images/linkedin.png')} style={{width:40, height:40}}/>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                                                    <Image source={require('./../../images/facebook.png')} style={{width:40, height:40}}/>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
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