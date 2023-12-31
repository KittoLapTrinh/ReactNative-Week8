import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React,{ useEffect, useState } from 'react'



function Screen1({navigation,}){
    const [id, setId] = useState('')
    const [idErr, setIdErr] = useState('')

    const nextScreen2 = async ()=>{
        try{
            const response = await fetch(`https://6554786b63cafc694fe68232.mockapi.io/user/v1/${id}`)
            if(response.ok){
                const userData = await response.json();
                console.log('Suscessfully!')
                navigation.navigate('Screen2', {userData})
            }else{
                console.error('Error! No User with Id here', setIdErr)
     
            }
        }catch(error){
            console.error('Error! Data null', error);
        }
    }

    return(
        <View style = {styles.container}>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
                <Image style={{width: 300, height: 300, borderRadius: '20px', borderWidth: 1, borderColor: 'black',}} source={require('../assets/task1.png')}></Image>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color:'#8353e2'}}>MANAGE YOUR TASK</Text>
            </View>
            

            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingVertical: 20}}>
                <Image style={{width: 20, height: 20, borderColor: 'black',}} source={require('../assets/enter.png')}></Image>
                <TextInput  placeholder='Enter your name' style={{borderWidth: 1, color: '#C4C4C4', borderRadius: 10, height: 50, width: 300}} value={id} onChangeText={text => setId(text)} ></TextInput>
            </View>
            <Text>{idErr}</Text>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#00bdd6', borderRadius: 30, marginHorizontal: 30, height: 50 }}
                    onPress={nextScreen2}
                        
                    >
                    <Text style={{color: 'white' }}>GET STARTED</Text>
                </TouchableOpacity>
 
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Screen1;