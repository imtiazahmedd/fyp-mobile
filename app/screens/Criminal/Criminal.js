import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity,ScrollView, TextInput, Alert, StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native'
const {width, height} = Dimensions.get('window');
import Styles from './Styles';
import { connect } from 'react-redux'
import {Content, Card, CardItem, Container, Header, Item, Input, Icon, Button } from 'native-base'
import {getCriminal} from '../../configs/Firebase'

class Criminal extends Component{

    static navigationOptions = {
        header : null
    };


    constructor(props){
        super(props);
        this.state={
            criminalArr : [],
            loader : false,
            search : '',
            searchArr : [],
            user : this.props.user.user
        };
        this.lawAdded = this.lawAdded.bind(this);
    }

    componentWillMount(){
        this.getCriminalLaws()
    }
    async getCriminalLaws(){
        this.setState({loader: true});
        let res = await getCriminal();
        this.setState({loader: false});
        this.setState({criminalArr : res})
    }



    checkSearch(text){
        this.setState({search : text});
        let filterText = this.state.criminalArr.filter((el)=>{
            if(el.offence){
                return el.offence.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        });
        this.setState({searchArr : filterText})
    }

    lawAdded(){
        this.getCriminalLaws()
    }
    render(){
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
                            <Text style={Styles.headingText}>Criminal laws</Text>
                            {user.isAdmin && <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("AddCriminalLaws", {lawAdded : this.lawAdded})}}>
                                <Image source={require('../../images/add.png')} style={Styles.headerImg2}/>
                            </TouchableOpacity>}
                        </View>
                    </View>

                </View>
                <View style={{height:height*0.1,backgroundColor:'grey'}}>
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
                        {this.state[this.state.search ? 'searchArr' : 'criminalArr'].map((el)=>{
                            return (
                                <TouchableOpacity  onPress={()=>{ this.props.navigation.navigate("CriminalDetail", {obj:el, lawAdded : this.lawAdded})}}>
                                    <Content>
                                        <Card>
                                            <CardItem>
                                                <Text style={{margin:10}}>{el.offence}</Text>

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
)(Criminal)

