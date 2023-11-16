import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Cau2a() {
    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Password " />
                <Image style={[styles.inputImg, styles.inputImg1]} source={require('../assets/avatar_usera1.png')} />
                <Image style={[styles.inputImg, styles.inputImg2]} source={require('../assets/lock-1528791.png')} />
                <Image style={[styles.inputImg, styles.inputImg3]} source={require('../assets/eye1.png')} />
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.txtCreateAccount}>CREATE ACCOUNT</Text>
        </View>
     );
}

export default Cau2a;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: '#E3C000'
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        fontFamily: 'Roboto',
        marginTop: 80,
        marginLeft: 30,
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
        position: 'relative',
    },
    input: {
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        // opacity: 0.3,
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 55,
    },
    inputImg: {
        width: 32,
        height: 32,
        position: 'absolute',
    },
    inputImg1: {
        left: 40,
        top: 30,
    },
    inputImg2: {
        left: 40,
        top: 105,
    },
    inputImg3: {
        right: 50,
        bottom: 10,
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },
    btn: {
        backgroundColor: '#000',
        width: 330,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
    },
    txtCreateAccount: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 50,
    }
})