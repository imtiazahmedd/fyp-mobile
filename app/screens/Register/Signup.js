import React, { Component } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert, ScrollView} from 'react-native';
const {width, height} = Dimensions.get('window');
import {register} from '../../configs/Firebase';
import {TextField} from 'react-native-material-textfield'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Styles from './Styles'

export default class Signup extends Component {

    static navigationOptions = {
        header : null
    };
    constructor(props){
        super(props);
        this.state={
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            retypePass : '',
            loader : false
        };
    }


    componentWillMount(){

    }

    validation(){
        const {firstName, lastName,email,password,retypePass} = this.state;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!firstName.length){
            Alert.alert('','Enter your first name');
            return false
        }
        else if(!lastName.length){
            Alert.alert('','Enter your last name');
            return false
        }
        else if(!re.test(email.toLowerCase())){
            Alert.alert('','Enter valid email');
            return false;
        }
        else if (password.length < 8) {
            Alert.alert('','Minimum length of password field is 8 characters');
            return false;
        } else if (password.length > 16) {
            Alert.alert('','Maximum length of password field is 16 characters');
            return false;
        }
        else if(password !== retypePass){
            Alert.alert('','password not matched');
            return false
        }
        return true;

    }

    async signup() {
        const {firstName, lastName, email, password} = this.state;
        if(this.validation()){
            try {
                this.setState({loader: true});
                let res = await register({firstName, lastName, email, password});
                this.setState({firstName: '',lastName:'',email:'',password: '',retypePass:'',loader: false});
                Alert.alert('','Successfully Registered')
            } catch(e) {
                this.setState({loader: false});
                Alert.alert('','Error' + e);
            }
        }
    }


    render() {
        return (
            <KeyboardAwareScrollView
                innerRef={ref => {
                 this.scroll = ref
                    }}>
            <View style={Styles.main}>
                <View style={Styles.header}>
                    <View style={Styles.headerSub}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image source={require('../../images/leftArrow.png')} style={Styles.headerImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.headingDiv}>
                        <Text style={Styles.headingText}>Create an Account</Text>
                    </View>
                </View>
                <View style={{height:height*0.8}}>

                    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
                        <View style={{height: height*0.1, marginHorizontal:45}}>
                            <TextField
                                label='First Name'
                                value={this.state.firstName}
                                onChangeText = {(text)=> this.setState({firstName: text})}
                            />
                        </View>
                        <View style={{height: height*0.1 ,marginHorizontal:45}}>
                            <TextField
                                label='Last Name'
                                value={this.state.lastName}
                                onChangeText = {(text)=> this.setState({lastName: text})}
                            />
                        </View>
                        <View style={{height: height*0.1 ,marginHorizontal:45}}>
                            <TextField
                                label='Email'
                                value={this.state.email}
                                onChangeText = {(text)=> this.setState({email: text})}
                            />
                        </View>
                        <View style={{height: height*0.1 ,marginHorizontal:45}}>
                            <TextField
                                label='Password'
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText = {(text)=> this.setState({password: text})}
                            />
                        </View>
                        <View style={{height: height*0.1 ,marginHorizontal:45}}>
                            <TextField
                                label='Re-type password'
                                secureTextEntry={true}
                                value={this.state.retypePass}
                                onChangeText = {(text)=> this.setState({retypePass: text})}
                            />
                        </View>
                        <View style={{height: height*0.15,marginHorizontal:45, alignItems:'center'}}>
                            <TouchableOpacity style={this.state.role ? Styles.btn1 : Styles.btn} onPress={()=>{this.signup()}}>
                                {this.state.loader ? <ActivityIndicator size="small" color="#0000ff" /> : (this.state.role ? <Text style={Styles.btnText}>Register User</Text> : <Text style={Styles.btnText}>Signup</Text>)}
                            </TouchableOpacity>
                        </View>
                        <View style={{height: height*0.03 ,marginHorizontal:45, alignItems:'center'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login", {screen: "Login"})}>
                                <Text style={Styles.footerText}>Back to login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </View>
            </KeyboardAwareScrollView>
        );
    }
}

