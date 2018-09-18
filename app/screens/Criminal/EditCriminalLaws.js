import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles'
import { Container, Header, Content, Textarea, Form } from "native-base";
import {civilLawAdd} from '../../configs/Firebase'

class EditCriminalLaws extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={
            obj : props.navigation.state.params.obj,
            section_no : props.navigation.state.params.obj.section_no,
            offences : props.navigation.state.params.obj.offence,
            arrest_warrant : props.navigation.state.params.obj.arrest_warrant,
            bailable : props.navigation.state.params.obj.bailable,
            compoundable : props.navigation.state.params.obj.compoundable,
            punishment : props.navigation.state.params.obj.punishment,
            description : props.navigation.state.params.obj.description
        }
    }

    async updateCivilLaw(){
        //const {section_no, offences, arrest_warrant, bailable, compoundable, punishment, description } = this.state;
        //    try {
        //        let res = await civilLawAdd({section_no, offences, arrest_warrant, bailable, compoundable, punishment, description});
        //        this.setState({section_no: '',offences:'',arrest_warrant:'',bailable: '',compoundable:'',punishment: '', description : ''});
        //        Alert.alert('','Civil law updated sucessfully')
        //    } catch(e) {
        //        Alert.alert('','Error' + e);
        //    }
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
                        <View style={{flexDirection:'row', flexWrap : 'wrap'}}>
                            <Text style={Styles.headingText}>Edit Section # {obj.section_no}</Text>
                        </View>
                    </View>
                </View>
                <Container>
                    <Content padder>
                        <Form>
                            <Text>Section No</Text>
                            <Textarea value={this.state.section_no} onChangeText = {(text)=> this.setState({section_no: text})} rowSpan={2} bordered placeholder="Section No" />
                            <Text>Offence</Text>
                            <Textarea value={this.state.offences} onChangeText = {(text)=> this.setState({offences: text})} rowSpan={3} bordered placeholder="Offence" />
                            <Text>Arrest</Text>
                            <Textarea value={this.state.arrest_warrant} onChangeText = {(text)=> this.setState({arrest_warrant: text})} rowSpan={2} bordered placeholder="Arrest" />
                            <Text>Bailable</Text>
                            <Textarea value={this.state.bailable} onChangeText = {(text)=> this.setState({bailable: text})} rowSpan={2} bordered placeholder="Bailable" />
                            <Text>Compoundable</Text>
                            <Textarea value={this.state.compoundable} onChangeText = {(text)=> this.setState({compoundable: text})} rowSpan={2} bordered placeholder="Compoundable" />
                            <Text>Punishment</Text>
                            <Textarea value={this.state.punishment} onChangeText = {(text)=> this.setState({punishment : text})} rowSpan={3} bordered placeholder="Punishment" />
                            <Text>Description</Text>
                            <Textarea value={this.state.description} onChangeText = {(text)=> this.setState({description: text})} rowSpan={4} bordered placeholder="Description" />
                        </Form>
                        <TouchableOpacity style={Styles.addLaw}  onPress={()=>{this.updateCivilLaw()}}>
                            <Text style={Styles.addLawText}>update</Text>
                        </TouchableOpacity>
                    </Content>
                </Container>
            </View>
        )
    }
}

export default EditCriminalLaws