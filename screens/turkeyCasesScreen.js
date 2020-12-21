import React, {useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TurkeyCasesScreen = (props) => {

    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(true);
    const URL = 'https://api.covid19api.com/dayone/country/turkey';
    
    const fetching = async() => {
      const res = await fetch(URL, {
          method: 'GET'
      });
      const data = await res.json();
      setResponse(data);
      setLoading(false);
    }
    
    useEffect(()=>{
        fetching();
    },[]);
 
    return(
        <View style={styles.viewContainer}>
            {loading ? <View style={{flex:1,justifyContent:'center', alignItems:'center'}}><ActivityIndicator size="large" animating={loading} color='red'/></View>:
                <View style={styles.loadedView}>
                    <FlatList
                        data={response}
                        keyExtractor={(item, key)=> item.Date.toString()}
                        renderItem={({ item}) => (
                            <View style={{alignItems:'center'}}>

                                <View style={styles.card}>
                                    {/* <View styles={{alignItems:'center',backgroundColor:'yellow',height:hp('3%'),width:100}}> */}
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Tarih : </Text><Text style={styles.textVal}>{item.Date.split("T")[0]}</Text></Text>
                                    {/* </View> */}
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Vaka : </Text><Text style={styles.textVal}> {item.Confirmed}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Aktif Hasta : </Text><Text style={styles.textVal}> {item.Active}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>İyileşen Hasta : </Text><Text style={styles.textVal}> {item.Recovered}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Vefat Eden Hasta : </Text> <Text style={styles.textVal}>{item.Deaths}</Text></Text>
                                </View>

                            </View>
                        )}
                    />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex:1,
        backgroundColor:'#F6F6F6',
        alignItems: 'center'
    },
    textStyle: {
        color: '#F6F6F6',
    },
    textDesc: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textVal: {
        fontWeight: '500',
        fontSize: 18,
    },
    listView: {
        height : 200,
        marginVertical: 10
    },
    loadedView:{
        marginTop: 5,
        width: wp('100%'),
        height: hp('100%')
    },
    card:{
        height: hp('20%'),
        width: wp('60%'),
        backgroundColor:'red',
        marginVertical: hp('2%'),
        justifyContent: 'center',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
});

export default TurkeyCasesScreen;