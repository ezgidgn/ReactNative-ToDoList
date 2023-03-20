import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import Colors from './src/styles/Colors';
import FloatingButton from './components/FloatingButton';
import AddTaskModal from './components/AddTaskModal';
import { useState } from 'react';
import TaskCard from './components/TaskCard';



export default function App() {

const [modalVisible, setModalVisible]=useState<boolean>(false);
const [toDoList, setToDoList]= useState<any>([]);

function handleModalVisible(){
  setModalVisible(!modalVisible);
}
function addTask(taskContent:string){
  console.log(taskContent);
  const  newTask={
    id:toDoList.length+1,
    task:taskContent,
    isCompleted:false,
  }
  setToDoList((oldTasks:any)=>[...oldTasks,newTask]);
  setModalVisible(false);

}
const renderToDoList=({item}:any)=> <TaskCard item={item}isCompleted={item.isCompleted}></TaskCard>
//FloatingBUtton içine oluşturduğum "handeModalVisible" onPress ile gönderiyorum.
  return (
    <View style={styles.container}>
    <Text style={styles.title}>My To Do List!</Text>
    <FlatList data={toDoList} renderItem={renderToDoList}></FlatList>
    <FloatingButton onPress={handleModalVisible}></FloatingButton>  
    <AddTaskModal isVisible={modalVisible} onClose={handleModalVisible} onAddTask={addTask}></AddTaskModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    flex: 1,
    backgroundColor: Colors.defaultDarkColor,
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  title:{
    color:Colors.defaultTitleColor,
    
    fontSize:25,
  }
});
