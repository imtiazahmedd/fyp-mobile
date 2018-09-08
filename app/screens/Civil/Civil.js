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
            civilArr : [],
            loader : false
        }
    }

    componentWillMount(){
        this.getCivilLaws()
    }
    async getCivilLaws(){
        this.setState({loader: true});
        let res = await getCivil();
        this.setState({loader: false});
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
                <View style={{height:height*0.1,backgroundColor:'grey'}}>

                </View>
                <View style={{height:height*0.8,alignItems:'center', justifyContent:'center'}}>
                {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : <View>
                    <ScrollView>
                    {this.state.civilArr.map((el)=>{
                        return (
                            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("CivilDetail", {obj:el})}} style={{borderWidth:1,borderColor:'grey',height:height*0.15, justifyContent:'center'}}>
                                <Text style={{margin:10}}>{el.offences}</Text>
                            </TouchableOpacity>
                        )
                    })}
                        </ScrollView>
                </View>}
                </View>
            </View>
                )
            }
}

export default Civil