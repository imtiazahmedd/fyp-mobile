import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity,ScrollView, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles';
import {getCriminal} from '../../configs/Firebase'

class Criminal extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={
            criminalArr : []
        }
    }

    componentWillMount(){
        this.getCriminalLaws()
    }
    async getCriminalLaws(){
        let res = await getCriminal();
        this.setState({criminalArr : res})
    }


    render(){
        console.log(this.state.criminalArr,'crimiiiiiiiiiiiiiiiiiii')
        return(
            <View style={Styles.main}>
                <View style={Styles.header}>
                    <View style={Styles.headerSub}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image source={require('../../images/leftArrow.png')} style={Styles.headerImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.headingDiv}>
                        <Text style={Styles.headingText}>Criminal laws</Text>
                    </View>
                </View>
                <View>
                    <ScrollView>
                        {this.state.criminalArr.map((el)=>{
                            return (
                                <Text>{el.offence}</Text>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Criminal