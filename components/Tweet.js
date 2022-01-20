import React, {useContext} from 'react'
import { StyleSheet,View, Text, ScrollView} from 'react-native';
import { Feed } from "./Feed";
import Block from './Block';

function Tweet() {
    const { data } = useContext(Feed);
    return (
        
        <ScrollView style={styles.container}>
        <View>{data ? data.data.map(news => 
            <Block data={news} />
         ) : <Text>wait</Text>
         }</View>
         </ScrollView>

)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        textAlign: 'center',
        marginTop:0,
        marginBottom: 75,
        
    }
});
export default Tweet