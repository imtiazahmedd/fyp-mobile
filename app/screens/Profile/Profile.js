import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput,ScrollView, StyleSheet,ActivityIndicator,Alert} from 'react-native'
const {width, height} = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import { connect } from 'react-redux'
import Styles from './Styles'
import {login, uploadImage, updateProfile} from "../../configs/Firebase";
var ImagePicker = require('react-native-image-picker');

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstName : this.props.user.user.first_name,
            lastName : this.props.user.user.last_name,
            email : this.props.user.user.email,
            loader : false,
            mobile: this.props.user.user.mobile || '',
            profileImg : this.props.user.user.profile_picture || '',
            userId : this.props.user.user.id
        };
        this._onOpenActionSheet = this.onOpenActionSheet.bind(this);
        this.profileSubmit = this.profileSubmit.bind(this);

    }

    onOpenActionSheet = () => {
        this.ActionSheet.show()
    };


    async openCamera(get){
        let options  = {
            allowsEditing: true,
            aspect: [3, 3],
            noData : true
        };
        let result;
        if(get == 0){
            ImagePicker.launchImageLibrary(options, (response)  => {
                this.setState({profileImg : response.uri})
            });
        }else if(get == 1){
            ImagePicker.launchCamera(options, (response)  => {
                this.setState({profileImg : response.uri})
            });
        }


    }
    validate() {
        const {profileImg, firstName, lastName,email, mobile } = this.state;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!profileImg.length){
            Alert.alert('', 'Upload image');
            return false;
        }
        else if (firstName.length < 4) {
            Alert.alert('','Enter first name');
            return false;
        } else if (lastName.length < 4) {
            Alert.alert('','Enter last name');
            return false;
        }
        else if(!re.test(email.toLowerCase())){
            Alert.alert('','Enter valid email');
            return false;
        }
        else if (mobile.length < 11) {
            Alert.alert('','Enter mobile number');
            return false;
        }
        return true;
    }

    async profileSubmit(){
        const {profileImg, firstName, lastName,email, mobile, userId } = this.state;
        if (this.validate()) {
            try {
                this.setState({loader: true});
                const response = await fetch(profileImg);
                const blob = await response.blob();
                uploadImage(userId, blob);
               let res = await updateProfile(userId, {first_name: firstName, last_name: lastName,email : email, mobile: mobile});
               Alert.alert('','Profile updated sucessfully');
                this.setState({loader: false});
            } catch (e) {
                this.setState({loader: false});
                Alert.alert('', e.error)
            }
        }
    }


    render(){
        const {profileImg} = this.state;

        const options = [
            'Gallery',
            'Camera',
            'Cancel'

        ];

        return(
            <View style={Styles.main}>
                <View style={Styles.sub}>
                    <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}} enableOnAndroid={true} >

                        <View style={Styles.headerMain}>
                            <View style={Styles.headerSub}>
                                <View style={Styles.headerBack}>
                                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                                        <Image source={require('../../images/leftArrow.png')} style={Styles.headerImg}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={Styles.headerHeading}>
                                    <Text style={Styles.headerText}>Update Profile</Text>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.subMain}>
                            <View style={Styles.subSub}>
                                <View style={Styles.profilePicCont}>
                                    <TouchableOpacity style={Styles.picSub} onPress={this._onOpenActionSheet}>

                                        <Image source={profileImg ? {uri: profileImg} : require('./../../images/profile.png')} style={{width : 60, height: 60, borderRadius : 100}} />

                                    </TouchableOpacity>
                                </View>
                                <View style={Styles.formMain}>

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
                                                keyboardType = 'numeric'
                                                placeholder= 'Mobile no'
                                                value={this.state.mobile}
                                                style={Styles.inputField}
                                                maxLength={13}
                                                onChangeText = {(text)=> this.setState({mobile: text})}
                                            />
                                        </View>
                                    </View>


                                </View>
                                <View style={Styles.footerMain}>
                                    <TouchableOpacity onPress={()=>{this.profileSubmit()}} style={Styles.btn}>
                                        {this.state.loader ? <ActivityIndicator size="small" color="#0000ff" /> : <Text style={Styles.btnText}>Update Profile</Text>}
                                    </TouchableOpacity>
                                </View>
                                <View style={Styles.footerMain}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("UpdatePassword", {screen: "UpdatePassword"})} style={Styles.btn2}>
                                        <Text style={Styles.footerText}>For password update</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </KeyboardAwareScrollView>

                </View>
                <View>
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
                        options={options}
                        cancelButtonIndex={2}
                        destructiveButtonIndex={2}
                        onPress={(option) => {this.openCamera(option)}}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(
    mapStateToProps
)(Profile)

