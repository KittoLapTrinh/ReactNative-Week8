import { useEffect, useState } from 'react'
import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { ScrollView } from 'react-native-web'



// const data =[
//     {
//         id: '1',
//         pass: require('../assets/pass.png'),
//         name : 'To check email',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '2',
//         pass: require('../assets/pass.png'),
//         name : 'UI task web page',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '3',
//         pass: require('../assets/pass.png'),
//         name : 'Learn javascript basic',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '4',
//         pass: require('../assets/pass.png'),
//         name : 'Learn HTML advance',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '5',
//         pass: require('../assets/pass.png'),
//         name : 'Medical App UI',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '6',
//         pass: require('../assets/pass.png'),
//         name : 'Learn Java',
//         edit: require('../assets/edit.png'),
//     },
// ]


function Screen2({navigation, route}){

    // const {name} = route.params
    const [todos, setTodos] = useState({})


    var [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/api/v1/user', {
        method: 'GET',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        }).then(todolist => {
            setTodos(todolist)
        }).catch(error => {
            console.log("Error ", error);
        })
    }, [])


    
   

    return(
        <View style = {styles.container}>
            <View style={{flexDirection: 'row',  alignItems: 'center', paddingBottom: 30, paddingHorizontal: 20 , }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
                    <Image style={{width: 20, height: 20, }} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
          
                <TouchableOpacity  style={{paddingLeft: 130}} onPress={()=>{navigation.navigate('Screen3')}}>
                    <Image style={{width: 40, height: 40, }} source={require('../assets/user.png')}></Image>
                </TouchableOpacity>
                    
                
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hi Twinkle</Text>
                    <Text style={{fontSize: 15}}>Have agrate day a head</Text>
                </View>
              
            
            </View>
            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 3, marginHorizontal: 40}}>
                <Image style={{width: 40, height: 40, }} source={require('../assets/search.png')}></Image>
                <TextInput placeholder='Search' style={{color: '#C4C4C4', width: 300}}></TextInput>
            </View>
            
            
            {data.map((item) => (
                    <View style={{ marginTop: 60 }}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 200, height: 62, borderRadius: 6, resizeMode: 'cover' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => updateCompletedTodo(item.id)}>
                            <Icon name="check-square" size={24} color="green" />
                        </TouchableOpacity>
                        <Text style={{fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', marginRight: 'auto'}}>{item.description}</Text>
                    </View>
                ))}

            
  
            <View style={{borderRadius: 30, marginHorizontal: 170, paddingTop: 50}}>
                <Button title='+' color={'#26c3d9'} style={{}} onPress={()=>{navigation.navigate('Screen3')}}></Button>
            </View>
           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Screen2;