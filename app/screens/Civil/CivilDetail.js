import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import { Container,Button, Header, Content, Card, CardItem, Body } from "native-base";
import { connect } from 'react-redux'
import Styles from './Styles'

class CivilDetail extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={
            obj : props.navigation.state.params.obj,
            user : this.props.user.user
        }
    }

    render(){
        const {obj, user} = this.state;
        return(
            <View style={Styles.main}>
                <View style={Styles.header}>
                    <View style={Styles.headerSub}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image source={require('../../images/leftArrow.png')} style={Styles.headerImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.headingDiv}>
                        <Text style={Styles.headingText}>Civil Detail page</Text>
                    </View>
                </View>
                <Container>
                    <Content padder>
                        <Card>
                            <CardItem bordered>
                                <Body>
                                    <CardItem header bordered>
                                        <Text><Text style={{fontWeight:'bold',fontSize:16}}>Section No</Text> : {obj.section_no}</Text>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Text><Text style = {{fontWeight:'bold', fontSize:16}}>Offence</Text> : {obj.offences}</Text>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Text> <Text style = {{fontWeight:'bold', fontSize:16}} >Arrest</Text>  : {obj.arrest_warrant}</Text>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Text><Text style = {{fontWeight:'bold', fontSize:16}}>Bailable</Text>  : {obj.bailable}</Text>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Text><Text style = {{fontWeight:'bold', fontSize:16}}>Compoundable</Text> : {obj.compoundable}</Text>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Text> <Text style = {{fontWeight:'bold', fontSize:16}}>Punishment</Text> : {obj.punishment}</Text>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Text><Text style = {{fontWeight:'bold', fontSize:16}}>Description</Text>  : {obj.description}</Text>
                                    </CardItem>
                                </Body>
                            </CardItem>
                            {user.isAdmin && <View style={{flex: 1, flexDirection:'row' ,height:height*0.15,width:width}}>
                               <View style={{width: width*0.5, height: height*0.1,alignItems:'center',justifyContent:'center'}}>
                                   <Button onPress={()=>{ this.props.navigation.navigate("EditCivilLaws",{obj : obj})}} style={{marginLeft:width*0.15,borderRadius:5}} primary><Text style={{paddingHorizontal:25,paddingVertical : 10,color:'#fff'}}> Edit </Text></Button>
                               </View>
                               <View style={{width: width*0.5, height: height*0.1,alignItems:'center',justifyContent:'center'}} >
                                   <Button onPress={()=> this.props.navigation.goBack()} style={{marginLeft:width*0.12,borderRadius:5}} success><Text style={{paddingHorizontal:15,paddingVertical : 10,color:'#fff'}}> Delete </Text></Button>
                               </View>
                           </View>}
                        </Card>
                    </Content>
                </Container>
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
)(CivilDetail)



