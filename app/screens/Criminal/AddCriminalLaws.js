import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles'
import { Container, Header, Content, Textarea, Form } from "native-base";
import {crimainlLawAdd} from '../../configs/Firebase'

class AddCriminalLaws extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={
            section_no : '',
            offence : '',
            arrest_warrant : '',
            bailable : '',
            compoundable : '',
            punishment : '',
            description : ''
        }
    }

    validation(){
        const {section_no, offence, arrest_warrant, bailable, compoundable, punishment, description } = this.state;
        if(!section_no.length){
            Alert.alert('','Enter section no');
            return false
        }
        else if(!offence.length){
            Alert.alert('','Enter offence');
            return false
        }
        else if(!arrest_warrant.length){
            Alert.alert('','Enter arrest');
            return false
        }else if(!bailable.length){
            Alert.alert('','Enter bailable');
            return false
        }
        else if(!compoundable.length){
            Alert.alert('','Enter compoundable');
            return false
        }
        else if(!punishment.length){
            Alert.alert('','Enter punishment');
            return false
        }
        else if(!description.length){
            Alert.alert('','Enter description');
            return false
        }
        return true;

    }


    async addCriminalLaw(){
        const {section_no, offence, arrest_warrant, bailable, compoundable, punishment, description } = this.state;
        if(this.validation()){
            try {
                let res = await crimainlLawAdd({section_no, offence, arrest_warrant, bailable, compoundable, punishment, description});
                this.setState({section_no: '',offence:'',arrest_warrant:'',bailable: '',compoundable:'',punishment: '', description : ''});
                Alert.alert('','Criminal law updated sucessfully')
            } catch(e) {
                Alert.alert('','Error' + e);
            }
        }
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
                        <View style={{flexDirection:'row', flexWrap : 'wrap'}}>
                            <Text style={Styles.headingText}>Add Civil laws</Text>
                        </View>
                    </View>
                </View>
                <Container>
                    <Content padder>
                        <Form>
                            <Text>Section No</Text>
                            <Textarea onChangeText = {(text)=> this.setState({section_no: text})} rowSpan={2} bordered placeholder="Section No" />
                            <Text>Offence</Text>
                            <Textarea onChangeText = {(text)=> this.setState({offence: text})} rowSpan={3} bordered placeholder="Offence" />
                            <Text>Arrest</Text>
                            <Textarea onChangeText = {(text)=> this.setState({arrest_warrant: text})} rowSpan={2} bordered placeholder="Arrest" />
                            <Text>Bailable</Text>
                            <Textarea onChangeText = {(text)=> this.setState({bailable: text})} rowSpan={2} bordered placeholder="Bailable" />
                            <Text>Compoundable</Text>
                            <Textarea onChangeText = {(text)=> this.setState({compoundable: text})} rowSpan={2} bordered placeholder="Compoundable" />
                            <Text>Punishment</Text>
                            <Textarea onChangeText = {(text)=> this.setState({punishment : text})} rowSpan={3} bordered placeholder="Punishment" />
                            <Text>Description</Text>
                            <Textarea onChangeText = {(text)=> this.setState({description: text})} rowSpan={4} bordered placeholder="Description" />
                        </Form>
                        <TouchableOpacity style={Styles.addLaw}  onPress={()=>{this.addCriminalLaw()}}>
                            <Text style={Styles.addLawText}>Add</Text>
                        </TouchableOpacity>
                    </Content>
                </Container>
            </View>
        )
    }
}

export default AddCriminalLaws