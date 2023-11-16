import { useEffect, useState, useRoute } from 'react'
import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { ScrollView } from 'react-native-web'
import { useNavigation } from '@react-navigation/native';

import Tick from '../assets/tick.png'
import Note from '../assets/note.png'


function Screen2({navigation, route}){

    const [userData, setUserData] = useState({});
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        if(route.params && route.params.userData){
            setUserData(route.params.userData);
            fetchUserTasks(route.params.userData.id);
        }
    }, [route.params])

    const addTask = async (task) =>{
        try{
            await fetch(`https://6554786b63cafc694fe68232.mockapi.io/user/v1/${userData.id}/tasks`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({description: task}),
            });
            fetchUserTasks();
        }catch(error){
            console.error('Error add task!', error)
        }
    }

    const fetchUserTasks = async ()=>{
        try{
            const response = await fetch(`https://6554786b63cafc694fe68232.mockapi.io/user/v1/${userData.id}/tasks`)
            const tasksData = await response.json();
            setTasks(tasksData);
        }catch(error){
            console.error('Error fetching user tasks', error)
        }
    }
    return(
        <View style = {styles.container}>
            <View style={{flexDirection: 'row',  alignItems: 'center', paddingBottom: 30, paddingHorizontal: 20 , }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
                    <Image style={{width: 20, height: 20, }} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
          
                <TouchableOpacity  style={{paddingLeft: 130}} onPress={()=>{navigation.navigate('Screen3')}}>
                    <Image style={{width: 40, height: 40, }} source={{uri: userData.avt}}></Image>
                </TouchableOpacity>
                    
                
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{userData.name}</Text>
                    <Text style={{fontSize: 15}}>{userData.description}</Text>
                </View>
              
            
            </View>
            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 3, marginHorizontal: 40}}>
                <Image style={{width: 40, height: 40, }} source={require('../assets/search.png')}></Image>
                <TextInput placeholder='Search' style={{color: '#C4C4C4', width: 300}}></TextInput>
            </View>
            <View style={{ marginTop: 60 }}>
                <FlatList data={userData.tasks} renderItem={({item})=>(

                    <View style={{flexDirection: 'row', borderWidth: 1, borderRadius: 10, paddingVertical: 10}}>
                        <Image source={require('../assets/tick.png')} style={{width: 20, height: 20, marginLeft: 20}}/>                     
                        <Text style={{fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', marginRight: 'auto'}}>{item}</Text>
                        <Image source={require('../assets/note.png')} style={{width: 20, height: 20, marginRight: 20}}/>
                    </View>
                )}>
                    
                    
                </FlatList>

            </View>
            <View style={{borderRadius: 30, marginHorizontal: 170, paddingTop: 50}}>
                <Button title='+' color={'#26c3d9'} style={{}} onPress={()=>{navigation.navigate('Screen3')}}></Button>
            </View>
           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Screen2;