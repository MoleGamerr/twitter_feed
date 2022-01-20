import React from "react";
import { StyleSheet, Text, ScrollView, View} from 'react-native';
import { Icon } from 'react-native-elements';

function Block({ data}) {
    return(
        <ScrollView style={styles.container}>
                <View>
                <Text style={styles.text}>{data.text}</Text>
                </View>
                <View style={styles.statsWrapper}>
                    <View style={styles.likewrap}>
                        <Icon
                            reverse
                            name='heart-outlined'
                            type='entypo'
                            color='#DAE0E7'
                            size={20} />
                        <Text style={styles.like}>{data.public_metrics.like_count}</Text>
                    </View>
                    <View style={styles.replywrap}>
                        <Icon
                            reverse
                            name='message'
                            type='entypo'
                            color='#DAE0E7'
                            size={20} />
                        <Text style={styles.reply}>{data.public_metrics.reply_count}</Text>
                    </View>
                    <View style={styles.retweetwrap}>
                        <Icon
                            name='retweet'
                            reverse
                            type='entypo'
                            color='#DAE0E7'
                            size={20} />
                        <Text style={styles.retweet}>{data.public_metrics.retweet_count}</Text>
                    </View>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text:{
        padding:10,
        fontWeight:"500",

    },
    container:{
        textAlign: 'center',
        borderWidth:0.25,
        borderColor:'#7C86A1',
        backgroundColor:'#DAE0E7',
        
    },
    statsWrapper:{
        flex:1,
        flexDirection:"row",
    },
    likewrap:{
        flex:1,
        flexDirection:"row",
    },
    like:{
        flex:1,
        fontSize:20,
        alignSelf:"center",
    },
    replywrap:{
        flex:1,
        flexDirection:"row",
        
    },
    reply:{
        flex:1,
        fontSize:20,
        alignSelf:"center",
    },
    retweetwrap:{
        flex:1,
        flexDirection:"row",
    },
    retweet:{
        flex:1,
        fontSize:20,
        alignSelf:"center",
    },
});


export default Block