import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../src/styles/Colors";

const deviceSize=Dimensions.get('window'); //telefonun gerçek ölçüleri için yapıldı.
export default StyleSheet.create({

    modalContainer:{
        justifyContent:'space-around',
        margin:0,
    },
    innerContainer:{
        backgroundColor:Colors.defaultGreyColor,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height: deviceSize.height/2,
        padding:10,
  },
  title:{
    color:Colors.defaultTitleColor,
    textAlign:"center",
    
  },
  input:{
    borderWidth:3,
    height:30,
    borderRadius:10,
    borderColor:'white',
    marginTop:30,
    color:'white',
  },
  buttonContainer:{
    backgroundColor:Colors.defaultGreenColor,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    padding:10,
    },
    buttonPlaceHolder:{
        color:Colors.defaultDarkColor,
        fontSize:15,

    }


})
