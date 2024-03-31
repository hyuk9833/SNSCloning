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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect, useState} from 'react';
import {joinUs} from '../apis/auth';
import {getFeedApi} from '../apis/feed';

const HomePage = ({navigation}) => {
  const [feedData, setFeedData] = useState();
  const {width} = useWindowDimensions();

  useEffect(() => {
    const getFeedData = async () => {
      const data = await getFeedApi();
      setFeedData([data]);
    };
    getFeedData();
  }, []);

  const renderItem = ({item, index}) => {
    console.log(index);
    return (
      <View style={{width: width, height: width}} key={(item, index) => index}>
        <Text>{item.content}</Text>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{item}</Text>
          <Image
            source={{uri: 'https://avatar.iran.liara.run/public'}}
            style={myStyle.profileImg}
          />
        </View> */}
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
            <Icon name="plus-circle-outline" size={28} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => joinUs()}>
            <Icon name="message-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={feedData}
        renerItem={renderItem}
        keyExtractor={(item, index) => index}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
};

export default HomePage;
