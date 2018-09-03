import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity,ScrollView, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles';
import {getCivil} from '../../configs/Firebase'

class Civil extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={
            civilArr : []
        }
    }

    componentWillMount(){
        this.getCivilLaws()
    }
    async getCivilLaws(){
        let res = await getCivil();
        this.setState({civilArr : res})
    }


    render(){
        return(
            <View style={Styles.main}>
                <View style={Styles.header}>
                    <View style={Styles.headerSub}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image source={require('../../images/leftArrow.png')} style={Styles.headerImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.headingDiv}>
                        <Text style={Styles.headingText}>Civil laws</Text>
                    </View>
                </View>
                <View>
                    <ScrollView>
                    {this.state.civilArr.map((el)=>{
                        return (
                            <Text>{el.offences}</Text>
                        )
                    })}
                        </ScrollView>
                </View>
            </View>
                )
            }
}

export default Civil