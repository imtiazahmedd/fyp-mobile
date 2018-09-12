import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
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
        console.log(obj,'objjjjjjjjjjjjjjjjjjjjjjjjjjj');
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
                <View>
                    <Text>section no : {obj.section_no}</Text>
                    <Text>offence: {obj.offence}</Text>
                    <Text>arrest : {obj.arrest_warrant}</Text>
                    <Text>bailable : {obj.bailable}</Text>
                    <Text>compoundable : {obj.compoundable}</Text>
                    <Text>punishment : {obj.punishment}</Text>
                    <Text>description : {obj.description}</Text>

                </View>
            </View>
        )
    }
}

export default CivilDetail