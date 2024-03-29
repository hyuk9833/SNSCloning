import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from './pages/Splash';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AddPage from './pages/AddPage';
import MyPage from './pages/MyPage';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPage}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color, size}) => (
            <Icon name="plus-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MyPage}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
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
