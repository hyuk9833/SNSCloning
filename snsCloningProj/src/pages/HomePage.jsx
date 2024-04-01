import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import myStyle from '../styles/myStyle';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect, useState} from 'react';
import {getFeedApi} from '../apis/feed';
import FeedComponent from '../components/FeedDetailComponent';

const HomePage = ({navigation}) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const getFeedData = async () => {
      const data = await getFeedApi();
      console.log(data);
      setFeedData(data);
    };
    getFeedData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={{borderTopWidth: 2, borderTopColor: '#ccc'}}>
        <FeedComponent feed={item} />
      </View>
    );
  };

  return (
    <SafeAreaView style={myStyle.displayWrapper}>
      <View style={myStyle.headerWrapper}>
        <View style={{width: 56}} />
        <Text style={myStyle.headerTitle}>피드</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <TouchableOpacity onPress={() => navigation.navigate('Add')}>
            <MaterialCommunityIcon
              name="plus-circle-outline"
              size={28}
              color="#000"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('DirectMessage')}>
            <MaterialCommunityIcon
              name="message-outline"
              size={28}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
};

export default HomePage;
