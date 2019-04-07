import React, {Component} from 'react';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import Signup from '../screens/Register/Signup'
import Login from '../screens/Login/Login'
import Civil from '../screens/Civil/Civil'
import Criminal from '../screens/Criminal/Criminal'
import Profile from '../screens/Profile/Profile'
import CivilDetail from '../screens/Civil/CivilDetail'
import CriminalDetail from '../screens/Criminal/CriminalDetail'
import UpdatePassword from '../screens/Profile/UpdatePassword'
import AddCivilLaws from '../screens/Civil/AddCivilLaws'
import EditCivilLaws from '../screens/Civil/EditCivilLaws'
import AddCriminalLaws from '../screens/Criminal/AddCriminalLaws'
import EditCriminalLaws from '../screens/Criminal/EditCriminalLaws'
import { connect } from 'react-redux'
import {signOut} from './../configs/Firebase'
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput,ScrollView, StyleSheet,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
class DrawerDisplay extends Component{
    static navigationOptions = {
        header : null,
        headerStyle: {
            backgroundColor: '#f4511e',
        },
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

    signOut(){
        signOut();
        AsyncStorage.setItem('user', '');
        this.props.navigation.navigate("Login", {screen: "Login"})
    }

    render(){
        return(
            <View style={{flex: 1,flexDirection: 'column',backgroundColor: '#127c7e'}}>
                <View style={{height: height*0.25,borderWidth:0.5,borderBottomColor:'#fff',borderLeftColor:'transparent',borderRightColor:'transparent',borderTopColor:'transparent'}}>
                    <View style={{height : height*0.15,alignItems:'center',justifyContent:'center'}}>
                        <View style={{height:height*0.12, width:height*0.12,borderRadius:100,alignItems:'center',justifyContent:'center', borderWidth:1,borderColor:'#fff'}}>
                            <Image source={this.props.user && this.props.user.user.profile_picture ? {uri: this.props.user.user.profile_picture} : require('../images/profile.png')} style={{width : 60, height: 60, borderRadius : 100}} />
                        </View>
                    </View>
                    <View style={{height:height*0.03,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:16, fontWeight:'bold',color:'#fff'}}>{ this.props.user && this.props.user.user.first_name + " " + this.props.user && this.props.user.user.last_name}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile", {screen: "Profile"})}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'#fff',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/profile.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15, fontFamily: 'gt-walsheim-regular', fontWeight:'bold',color:'#fff'}}>Profile</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity onPress={() => this.props.navigation.navigate("Civil", {screen: "Civil"})}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'#fff',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/civil.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,fontFamily: 'gt-walsheim-regular', fontWeight:'bold',color:'#fff'}}>Civil laws</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate("Criminal", {screen: "Criminal"})}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'#fff',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/criminal.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,fontFamily: 'gt-walsheim-regular', fontWeight:'bold',color:'#fff'}}>Criminal laws</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.signOut()}}>
                    <View style={{height: height*0.1,borderWidth:0.5,borderBottomColor:'#fff',borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.15,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../images/logout.png')} style={{width:25,height:25}}/>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:15,fontFamily: 'gt-walsheim-regular', fontWeight:'bold',color:'#fff'}}>Logout</Text>
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
        user: state.auth.user
    };
};

const ContentComponent = connect(mapStateToProps)(DrawerDisplay);

const DrawerNavigatorConfig =  {
    drawerWidth: 300,
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
    UpdatePassword: {screen: UpdatePassword},
    CivilDetail: {screen : CivilDetail},
    CriminalDetail: {screen : CriminalDetail},
    AddCivilLaws: {screen : AddCivilLaws},
    AddCriminalLaws: {screen : AddCriminalLaws},
    EditCivilLaws: {screen : EditCivilLaws},
    EditCriminalLaws: {screen : EditCriminalLaws}
}, {
    headerMode: 'none'
});


export default Route
