import { StyleSheet } from "react-native"
import Colors from "../../src/styles/Colors"

const baseStyle=StyleSheet.create({
    container:{
        padding:10,
        marginTop:10,
        marginBottom:10,
    },
    taskText:{
        fontSize:17,

    }

});

export default StyleSheet.create({
container:{
    backgroundColor:Colors.defaultGreenColor,
    borderRadius:10,
    ...baseStyle.container

},
taskText:{
    color:Colors.defaultDarkColor,
    ...baseStyle.taskText
},
completedeContainer:{
    ...baseStyle.container,
    backgroundColor:Colors.defaultGreyColor,
},
completedTaskText:{
    ...baseStyle.taskText,
    color:'white',
    textDecorationLine:'line-through',
},

});