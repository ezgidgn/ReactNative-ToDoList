import React,{FC} from "react";
import { Text, View } from "react-native";
import styles from './TaskCard.style';

interface ICardProps{
    isCompleted:boolean;
    item:any,
}

const TaskCard: FC<ICardProps>=({isCompleted, item})=>{

    return(
        isCompleted?
        <View style={styles.completedeContainer}>
        <Text style={styles.completedTaskText}>{item.task}</Text>
    </View>
        :
        <View style={styles.container}>
            <Text style={styles.taskText}>{item.task}</Text>
        </View>
    )

}
export default TaskCard;