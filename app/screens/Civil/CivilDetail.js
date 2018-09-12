import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Styles from './Styles'

class CivilDetail extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={
            obj : props.navigation.state.params.obj
        }
    }

    render(){
        const {obj} = this.state;
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
                                        <Text><Text style = {{fontWeight:'bold', fontSize:16}}>Offence</Text> : {obj.offence}</Text>
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
                        </Card>
                    </Content>
                </Container>
            </View>
        )
    }
}

export default CivilDetail