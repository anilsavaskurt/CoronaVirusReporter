import React, {useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TurkeyCasesScreen = (props) => {

    const [response, setResponse] = useState();
    const [globalInfos, setGlobalInfos] = useState();
    const [loading, setLoading] = useState(true);
    const URL = 'https://api.covid19api.com/summary';
    
    const fetching = async() => {
      const res = await fetch(URL, {
          method: 'GET'
      });
      const data = await res.json();
      if(data != null){
        setResponse(data.Countries);
        setGlobalInfos(data.Global);
      }
      setLoading(false);
    }
    
    useEffect(()=>{
        fetching();
    },[]);
 
    return(
        <View style={styles.viewContainer}>
            {loading ? <View style={{flex:1,justifyContent:'center', alignItems:'center'}}><ActivityIndicator size="large" animating={loading} color='red' /></View>:
                <View style={styles.loadedView}>
                    <View style={{width:wp('100%'),height:hp('25%'),backgroundColor:'grey',paddingLeft: wp('20%'),paddingTop:10}}>
                        <Text style={styles.textStyle}><Text style={styles.textDesc}>Yeni Vaka : </Text><Text style={styles.textVal}>{globalInfos.NewConfirmed}</Text></Text>
                        <Text style={styles.textStyle}><Text style={styles.textDesc}>Toplam Vaka : </Text><Text style={styles.textVal}>{globalInfos.TotalConfirmed}</Text></Text>
                        <Text style={styles.textStyle}><Text style={styles.textDesc}>Yeni Ölümler : </Text><Text style={styles.textVal}>{globalInfos.NewDeaths}</Text></Text>
                        <Text style={styles.textStyle}><Text style={styles.textDesc}>Toplam Ölümler : </Text><Text style={styles.textVal}>{globalInfos.TotalDeaths}</Text></Text>
                        <Text style={styles.textStyle}><Text style={styles.textDesc}>Yeni İyileşenler : </Text><Text style={styles.textVal}>{globalInfos.NewRecovered}</Text></Text>
                        <Text style={styles.textStyle}><Text style={styles.textDesc}>Toplam İyileşenler : </Text><Text style={styles.textVal}>{globalInfos.TotalRecovered}</Text></Text>
                     </View>   
                    <FlatList
                        data={response}
                        keyExtractor={(item, key)=> item.CountryCode.toString()}
                        renderItem={({ item}) => (
                            <View style={{alignItems:'center'}}>

                                <View style={styles.card}>
                                <Text style={styles.textStyle}><Text style={styles.textDesc}>Tarih : </Text><Text style={styles.textVal}>{item.Country}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Tarih : </Text><Text style={styles.textVal}>{item.Date.split("T")[0]}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Toplam Vaka : </Text><Text style={styles.textVal}> {item.TotalConfirmed}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Toplam Vaka : </Text><Text style={styles.textVal}> {item.TotalRecovered}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Yeni Vaka : </Text><Text style={styles.textVal}> {item.NewConfirmed}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Aktif Hasta : </Text><Text style={styles.textVal}> {item.Active}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>İyileşen Hasta : </Text><Text style={styles.textVal}> {item.Recovered}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Yeni İyileşen Hasta : </Text><Text style={styles.textVal}> {item.NewRecovered}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Vefat Eden Hasta : </Text> <Text style={styles.textVal}>{item.Deaths}</Text></Text>
                                    <Text style={styles.textStyle}><Text style={styles.textDesc}>Yeni Vefat Eden Hasta : </Text> <Text style={styles.textVal}>{item.NewDeaths}</Text></Text>
                                    
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
        fontWeight: '700',
        fontSize: 18,
    },
    listView: {
        height : 200,
        marginVertical: 10
    },
    loadedView:{
        width: wp('100%'),
        height: hp('100%'),
        alignItems:'center'
    },
    card:{
        height: hp('40%'),
        width: wp('78%'),
        backgroundColor:'red',
        marginVertical: hp('2%'),
        justifyContent: 'center',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
});

export default TurkeyCasesScreen;