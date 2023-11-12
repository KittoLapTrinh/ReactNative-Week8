import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Screen3({navigation}){
    return(
        <View style = {styles.container}>
            <View style={{flexDirection: 'row',  alignItems: 'center', paddingBottom: 30, paddingHorizontal: 20 , }}>
                
                <View style={{}}>
                    <Image style={{width: 40, height: 40, }} source={require('../assets/user.png')}></Image>
                </View>
                <View style={{justifyContent: 'center', paddingRight: 130}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hi Twinkle</Text>
                    <Text style={{fontSize: 15}}>Have agrate day a head</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen2')}}>
                    <Image style={{width: 20, height: 20, }} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
                
              
            
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color:'black'}}>ADD YOUR JOB</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingVertical: 20}}>
                <Image style={{width: 20, height: 20, borderColor: 'black',}} source={require('../assets/enter.png')}></Image>
                <TextInput  placeholder='input your job' style={{borderWidth: 1, color: '#C4C4C4', borderRadius: 10, height: 50, width: 300}}></TextInput>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Button title='FINISH ->' color={'#00bdd6'} onPress={()=>{navigation.navigate('Screen1')}}></Button>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
                <Image style={{width: 300, height: 300, borderRadius: '20px', borderWidth: 1, borderColor: 'black',}} source={require('../assets/task1.png')}></Image>
            </View>
           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Screen3;