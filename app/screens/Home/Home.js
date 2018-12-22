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

        return(
            <View style={Styles.container}>

                <View style={Styles.header}>
                    <TouchableOpacity  style= {Styles.headerSubContent} onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('./../../images/menu.png')} style={Styles.menuImg}/>
                    </TouchableOpacity>
                     <Text style={Styles.departHeading}>Dashboard</Text>
                </View>
                <ScrollView>

                    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
                        <View style={{height: height*0.1, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:20, fontWeight:'bold',fontFamily: 'gt-walsheim-regular'}}>
                                Welcome To Legal Justice
                            </Text>
                        </View>
                        <View style={{height: height*0.3}}>
                            <TouchableOpacity >
                                <Image source={require('./../../images/seven.jpeg')} style={{width:width,height:height*0.3}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:height*0.1,alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:20, fontWeight:'bold',fontFamily: 'gt-walsheim-regular'}}>
                               Civil Laws
                            </Text>
                        </View>
                        <View style={{height:height*0.2,alignItems:'center', justifyContent:'center'}}>
                            <Text style={{marginHorizontal:20,fontSize:16,fontFamily: 'gt-walsheim-regular'}}>
                                A body of rules that delineate private rights and remedies, and govern disputes between individuals in such areas as contracts, property, and Family Law; distinct from criminal or public law
                            </Text>
                        </View>
                        <View style={{height: height*0.3}}>
                            <TouchableOpacity >
                                <Image source={require('./../../images/five.jpg')} style={{width:width,height:height*0.3}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:height*0.1,alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:20, fontWeight:'bold',fontFamily: 'gt-walsheim-regular'}}>
                                Criminal Laws
                            </Text>
                        </View>
                        <View style={{height:height*0.4,alignItems:'center', justifyContent:'center'}}>
                            <Text style={{marginHorizontal:20,fontSize:16,fontFamily: 'gt-walsheim-regular'}}>
                                Criminal law is the body of law that relates to crime. It proscribes conduct perceived as threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people inclusive of one's self. Most criminal law is established by statute, which is to say that the laws are enacted by a legislature. Criminal law includes the punishment and rehabilitation of people who violate such laws
                            </Text>
                        </View>
                        <View style={{height:height*0.1,alignItems:'center', justifyContent:'center'}}>
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