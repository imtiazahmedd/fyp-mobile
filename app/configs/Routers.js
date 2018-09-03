import React, {Component} from 'react';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import Signup from '../screens/Register/Signup'
import Login from '../screens/Login/Login'
import Civil from '../screens/Civil/Civil'
import Criminal from '../screens/Criminal/Criminal'
import Profile from '../screens/Profile/Profile'
import UpdatePassword from '../screens/Profile/UpdatePassword'
import { connect } from 'react-redux'
import {signOut} from './../configs/Firebase'
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput,ScrollView, StyleSheet,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
class DrawerDisplay extends Component{
    static navigationOptions = {
        header : null
    };
    constructor(props){
        super(props);
        this.state = {
            userId: ''
        }
    }


    componentWillMount(){

        // const currentUser = firebase.auth().currentUser;
        // console.log(currentUser,'&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        // const userId = currentUser.uid;
        // this.setState({userId: userId})
    }


    render(){
        return(
            <View style={{flex: 1,flexDirection: 'column'}}>
                <View style={{height: height*0.25,borderWidth:0.5,borderBottomColor:'grey',borderLeftColor:'transparent',borderRightColor:'transparent',borderTopColor:'transparent'}}>
                    <View style={{height : height*0.15,alignItems:'center',justifyContent:'center'}}>
                        <View style={{height:height*0.12, width:height*0.12,borderRadius:100,alignItems:'center',justifyContent:'center', borderWidth:1,borderColor:'grey'}}>
                                {/*<Image source={{uri: this.props.user.profile_picture}} style={{width:60,height:60,borderRadius : 100}} /> */}
                        </View>
                    </View>
                    <View style={{height:height*0.03,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:16}}>Name</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile", {screen: "Profile"})}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'grey',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/profile.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15, fontFamily: 'gt-walsheim-regular'}}>Profile</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity onPress={() => this.props.navigation.navigate("Civil", {screen: "Civil"})}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'grey',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/civil.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,fontFamily: 'gt-walsheim-regular'}}>Civil laws</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate("Criminal", {screen: "Criminal"})}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'grey',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/criminal.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,fontFamily: 'gt-walsheim-regular'}}>Criminal laws</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'grey',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/logout.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,fontFamily: 'gt-walsheim-regular'}}>Logout</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

const ContentComponent = connect(mapStateToProps)(DrawerDisplay);

const DrawerNavigatorConfig =  {
    drawerWidth: 280,
    drawerPosition: 'Left',
    contentComponent: ContentComponent
    // props =>
    ,

    contentOptions: {
        activeBackgroundColor: 'white',
        activeTintColor: 'white',
        inactiveTintColor: '#032456',
        inactiveBackgroundColor: 'transparent'
    }

};

const DrawerNav = DrawerNavigator({
    Home: {
        screen: Home
    }
}, DrawerNavigatorConfig);



const Route = createStackNavigator({
    Login : {screen : Login},
    DrawerNav: {screen: DrawerNav},
    Signup: { screen: Signup },
    Home: { screen: Home},
    Criminal: { screen: Criminal},
    Civil: { screen: Civil},
    Profile: {screen: Profile},
    UpdatePassword: {screen: UpdatePassword}
}, {
    headerMode: 'none'
});


export default Route
