import React, {useContext} from 'react'
import { StyleSheet,View, Text, ScrollView} from 'react-native';
import { Feed } from "./Feed";
import Block from './Block';

function Tweet() {
    const { data } = useContext(Feed);
    try {
        return (
            <ScrollView style={styles.container}>
                <View>{data ? data.data.map(news => 
                    <Block data={news} />
                    ) : <Text style={styles.error}>wait</Text>
                }</View>
            </ScrollView>
        )
    } catch (error) {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.error}>Nothing found!</Text>
             </ScrollView>
        )
    }
   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E7EBEF',
        textAlign: 'center',
        marginTop:0,
        marginBottom: 75,
    },
    error:{
        alignSelf:"center",
        fontSize:20,
    }
});
export default Tweet