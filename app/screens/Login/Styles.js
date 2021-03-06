import { Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');


const Styles = {
    main:{
        width: '100%',
        height: '100%'
    },
    header:{
        width: '100%',
        height: height* 0.1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#127c7e'
    },
    headerText:{
        fontSize:18,
        color:'#fff',
        fontFamily: 'gt-walsheim-regular'
    },
    sub:{
        width: '100%',
        height: height* 0.5,
        alignItems:'center',
        justifyContent : 'center'
    },
    inputStyle:{
        width: width* 0.7,
        height: height*0.1,
        borderWidth:0.5,
        borderBottomColor:'grey',
        fontSize:16,
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
        borderTopColor:'transparent',
        fontFamily: 'gt-walsheim-regular'
    },
    loginBtn:{
        width: width* 0.7,
        height: height*0.07,
        borderRadius:7,
        marginTop:height* 0.05,
        backgroundColor: '#127c7e',
        justifyContent:'center',
        alignItems:'center'
    },
    loginBtnText:{
        fontSize:18,
        color:'white',
        fontFamily: 'gt-walsheim-regular'
    },
    footer:{
        height:height*0.08,
        alignItems:'center',
        justifyContent:'center'
    },
    footerText:{
        fontSize:16,
        color: '#127c7e',
        fontFamily: 'gt-walsheim-regular'
    },
    inputFieldd:{
        width: width* 0.7,
        height: height*0.07,
        marginBottom: height * 0.025
    }
};

export default Styles;