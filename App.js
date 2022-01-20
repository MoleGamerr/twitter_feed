import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedProvider } from './components/Feed';
import Tweet from './components/Tweet';


function HomeScreen() {

  const apiKey = "76972041e9fe4dbfbbce6048a9bc20c9";
  const apiSecret = "8yWCtWmVsxjZOvNIuvCEHtop7kGRhIE1NWvT8IlLC6LGrWXpJy";
  const site ="https://newsapi.org/v2/top-headlines";

  

  return (
    
    <FeedProvider><Tweet /></FeedProvider>
  )

}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Tweets" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

