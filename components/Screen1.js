import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useEffect, useState } from 'react'



function Screen1({navigation,}){
    const [data, setData] = useState([]);
    const [emailn, setEmail] = useState('')


    fetch("https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/user")
        .then(response=>{
        if (response.ok)
            return response.json()
        })
        .then(dataO=>{
        if(data.length==0)
            setData(dataO)
    })

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
                <TextInput  placeholder='Enter your name' style={{borderWidth: 1, color: '#C4C4C4', borderRadius: 10, height: 50, width: 300}} onChangeText={setEmail}></TextInput>
            </View>
            
            {data.length != 0 &&
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#00bdd6', borderRadius: 30, marginHorizontal: 30, height: 50 }}
                    onPress={
                        () => {

                        for (let i = 0; i < data.length; i++) {
                            if (data[i].email == emailn) {
                            navigation.navigate("Screen2", { user: data[i] })
                            }
                        }

                        }}
                    >
                    <Text style={{color: 'white' }}>GET STARTED</Text>
                </TouchableOpacity>
            }

           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Screen1;