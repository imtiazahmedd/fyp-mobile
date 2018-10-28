import { Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');



const Styles={
    main:{
        width: width,
        height:height
    },
    header:{
        height: height*0.1,
        flexDirection: 'row',
        backgroundColor:'#127c7e'
    },
    headerSub:{
        width: width*0.15,
        height: height*0.1,
        alignItems:'center',
        justifyContent:'center'
    },
    headerImg:{
        width: 25,
        height: 25
    },
    headerImg2:{
        width: 35,
        height: 35,
        marginLeft:width*0.3
    },
    headingDiv:{
        width: width*0.85,
        height: height*0.1,
        justifyContent:'center',
        marginLeft:width*0.1
    },
    headingText:{
        color:'#fff',
        marginLeft: width*0.1,
        marginTop:5,
        fontFamily: 'gt-walsheim-regular',
        fontSize:18
    },
    headerCont:{
        flexDirection : 'row',
        flexWrap:'wrap'
    },
    addLaw:{
        width: width* 0.7,
        height: height*0.07,
        borderRadius:7,
        marginTop:height* 0.05,
        marginBottom : height*0.08,
        marginLeft:width*0.15,
        backgroundColor: '#127c7e',
        justifyContent:'center',
        fontFamily: 'gt-walsheim-regular',
        alignItems:'center'
    },
    addLawText:{
        fontSize:18,
        color:'#fff',
        fontFamily: 'gt-walsheim-regular'
    },

};
export default Styles