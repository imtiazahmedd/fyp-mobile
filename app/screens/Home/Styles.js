import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');
const Styles = {
    container: {
        flex: 1
    },
    header:{
        flex:0.1,
        flexDirection: 'row',
        backgroundColor: '#127c7e'

    },
    menuImg:{
        width: width* 0.07,
        height: height * 0.035,
        marginLeft:10
    },
    headerSubContent:{
        width: width* 0.1,
        height: height * 0.1,
        alignItems:'center',
        justifyContent:'center'
    },
    departHeading: {
        fontSize:18,
        marginLeft: width* 0.25,
        marginTop:height*0.03,
        color:'#fff'
    }

};

export default Styles;