import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from './pages/Splash';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AddPage from './pages/AddPage';
import DirectMessagePage from './pages/DirectMessagePage';
import DirectMessageDetailPage from './pages/DirectMessageDetailPage';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchPage}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomePage} />
      <HomeStack.Screen name="Add" component={AddPage} />
      <HomeStack.Screen name="DirectMessage" component={DirectMessagePage} />
      <HomeStack.Screen
        name="DirectMessageDetail"
        component={DirectMessageDetailPage}
      />
    </HomeStack.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;
