import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedProvider } from './components/Feed';
import Tweet from './components/Tweet';


function HomeScreen() {

  

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

