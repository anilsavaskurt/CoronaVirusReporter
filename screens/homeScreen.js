import React from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';

const HomeScreen = (props) => {
    return(
        <View style={styles.viewContainer}>
            <ImageBackground source={require('../assets/deneme.jpg')} style={styles.backgroundImage}>
                <View style={{alignItems:'center',paddingTop:'50%'}}>
                    <Text style={styles.textStyle}>CORANAVIRUS REPORTER</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View style={{marginHorizontal:5}}>
                        <Button title="Go to Turkey Cases" onPress = {() => {props.navigation.navigate('Turkey')}} color={'red'} style={{marginLeft:10}}></Button>
                        </View>
                       <View style={{marginHorizontal:5}}>
                       <Button title="Go to World Cases" onPress = {() => {props.navigation.navigate('World')}} color={'grey'}></Button>
                       </View>
                       
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex:1,
        backgroundColor:'grey',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    backgroundImage : {
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        width:'100%',
        marginTop: '20%',
    }
});

export default HomeScreen;