import React, { Component } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert, ScrollView} from 'react-native';
const {width, height} = Dimensions.get('window');
import {register} from '../../configs/Firebase';
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


                    <View style={Styles.subDiv}>
                            <View style={{width: width, alignItems:'center', justifyContent: 'center'}}>
                                <View>
                                    <TextInput
                                        underlineColorAndroid = 'transparent'
                                        placeholder= 'First Name'
                                        value={this.state.firstName}
                                        style={Styles.inputField}
                                        onChangeText = {(text)=> this.setState({firstName: text})}
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        underlineColorAndroid = 'transparent'
                                        placeholder= 'Last Name'
                                        value={this.state.lastName}
                                        style={Styles.inputField}
                                        onChangeText = {(text)=> this.setState({lastName: text})}
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        underlineColorAndroid = 'transparent'
                                        placeholder= 'Email'
                                        value={this.state.email}
                                        style={Styles.inputField}
                                        onChangeText = {(text)=> this.setState({email: text})}
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        underlineColorAndroid = 'transparent'
                                        placeholder= 'Password'
                                        value={this.state.password}
                                        secureTextEntry={true}
                                        style={Styles.inputField}
                                        onChangeText = {(text)=> this.setState({password: text})}
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        underlineColorAndroid = 'transparent'
                                        placeholder= 'Re-type password'
                                        value={this.state.retypePass}
                                        secureTextEntry={true}
                                        style={Styles.inputField}
                                        onChangeText = {(text)=> this.setState({retypePass: text})}
                                    />
                                </View>
                            </View>
                        <View>
                            <TouchableOpacity style={this.state.role ? Styles.btn1 : Styles.btn} onPress={()=>{this.signup()}}>
                                {this.state.loader ? <ActivityIndicator size="small" color="#00ff00" /> : (this.state.role ? <Text style={Styles.btnText}>Register User</Text> : <Text style={Styles.btnText}>Signup</Text>)}
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.footerDiv}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login", {screen: "Login"})}>
                                <Text style={Styles.footerText}>Back to login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

            </View>
        );
    }
}
