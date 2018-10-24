import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity,ScrollView, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import {Content, Card, CardItem, Container, Header, Item, Input, Icon, Button } from 'native-base'
import { connect } from 'react-redux'
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
            loader : false,
            search : '',
            searchArr : [],
            user : this.props.user.user
        };
        this.lawAdded = this.lawAdded.bind(this);
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


    checkSearch(text){
         this.setState({search : text});
         let filterText = this.state.civilArr.filter((el)=>{
             if(el.offences){
                 return el.offences.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
             }
         });
        this.setState({searchArr : filterText})
    }
    lawAdded(){
        this.getCivilLaws()
    }
    render(){
        console.log(this.state.lawAdded,'chalta he render state update pr')
        const {user} = this.state;
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
                            <Text style={Styles.headingText}>Civil laws</Text>
                            {user.isAdmin && <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("AddCivilLaws", {lawAdded : this.lawAdded})}}>
                                <Image source={require('../../images/add.png')} style={Styles.headerImg2}/>
                            </TouchableOpacity>}
                        </View>
                    </View>
                </View>
                <View style={{height:height*0.1}}>
                    <Container>
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input onChangeText = {(text)=>{this.checkSearch(text)}} placeholder="Search" />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                        </Header>
                    </Container>
                </View>
                <View style={{height:height*0.8,alignItems:'center', justifyContent:'center'}}>
                {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : <View>
                    <ScrollView>
                    {this.state[this.state.search ? 'searchArr' : 'civilArr'].map((el)=>{
                        return (
                            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("CivilDetail", {obj:el})}}>
                                <Content>
                                    <Card>
                                        <CardItem>
                                            <Text style={{margin:10}}>{el.offences}</Text>
                                        </CardItem>
                                    </Card>
                                </Content>
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

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};

export default connect(
    mapStateToProps
)(Civil)

