import React, {createContext, useState, useEffect} from "react";
import {KeyboardAvoidingView, Platform, StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { Icon } from 'react-native-elements';

export const Feed = createContext();

export const FeedProvider = (props) => {
    let [temp, settemp] = useState();
    let [search, setsearch] = useState();
    let [data,setData] = useState()
    let [loading, setLoading] = useState(true);

    const bearerToken = "AAAAAAAAAAAAAAAAAAAAAMBFYQEAAAAA2ZLXJQscbgsTmjypO92BB8TT2Xc%3D92R4IYuYMDm6Xcy7HDKnrxOvxwbG7cjV2sLSLHLSkPzieXgJZ6";
    const website = "https://api.twitter.com";
    const apiEndpoint = "/2/tweets/search/recent";
    const lang ="lang%3Aen";
    const query = "gamedev";
    const max_results = "10";
    let fields = "text,entities,public_metrics";
    const url = `${website}${apiEndpoint}?query=${search}%20${lang}&max_results=${max_results}&tweet.fields=${fields}`;
    const fetchData = async () => {
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "X-Requested-With",
                    'Authorization': 'bearer ' + bearerToken
                }
            });
            response = await response.json();
            setData(response);
            console.log ('response', response.data)
          } catch (error) {
            console.error('err', error);
          } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
            Keyboard.dismiss();
            setsearch(temp);
            settemp(null); 
    }
    useEffect(() => {
        fetchData();
    }, [search]);


    useEffect(() => {
        fetchData();
    }, []);

    return (
        
        <View>
                <View>
                    <KeyboardAvoidingView
                    behavior= {Platform.OS === "android" ? "padding" : "height"}
                    style={styles.writeWrapper}
                    >
                        <TextInput style={styles.input} placeholder={'search'} value={temp} onChangeText={text => settemp(text)} />
                        <TouchableOpacity style={styles.button} onPress={() => handleSearch()}>
                                <Icon
                                    reverse
                                    name='magnifying-glass'
                                    type='entypo'
                                    color='#517fa4'
                                    size={25} />
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            <Feed.Provider value={{data}}>{props.children}</Feed.Provider>
        </View>
    )
    
};
const styles = StyleSheet.create({
    writeWrapper:{
        paddingHorizontal:5,
        width:'100%',
        top:5,
        flexDirection:"row",
        justifyContent : "space-between",
        alignItems:"flex-start",
        backgroundColor:'#E7EBEF',
        borderBottomWidth:7,
        borderBottomColor:'#7C86A1',
        },
    input:{
        paddingHorizontal: 20,
        paddingVertical:10,
        backgroundColor:'#ddd',
        borderRadius:60,
        alignSelf:"center",
        width:'80%',
        borderColor:'#aaa',
        borderWidth:1,
      },
  });