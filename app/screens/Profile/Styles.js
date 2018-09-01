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
    headingDiv:{
        width: width*0.85,
        height: height*0.1,
        justifyContent:'center',
        marginLeft:width*0.1
    },
    headingText:{
        color:'#fff',
        fontFamily: 'gt-walsheim-regular',
        fontSize:18
    },
    headerCont:{
        flexDirection : 'row',
        flexWrap:'wrap'
    },

};
export default Styles