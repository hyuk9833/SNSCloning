import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  useWindowDimensions,
  Modal,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import myStyle from '../styles/myStyle';
import {useEffect, useState} from 'react';
import {search} from '../apis/search';
import FeedDetailComponent from '../components/FeedDetailComponent';
import {getFeedDetailApi} from '../apis/feed';
import HeaderComponent from '../components/HeaderComponent';

const SearchPage = () => {
  const [searchTag, setSearchTag] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [feedDetailData, setFeedDetailData] = useState('');

  const {width} = useWindowDimensions();

  const searchHandler = async () => {
    const data = await search(searchTag);
    setSearchList(data);
  };

  const feedDetailHandler = async id => {
    const data = await getFeedDetailApi(id);
    console.log(data);
    setFeedDetailData(data);
    setIsModalVisible(true);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{borderWidth: 1, borderColor: '#FFF'}}
        onPress={() => feedDetailHandler(item.id)}>
        <Image
          source={{uri: 'https://picsum.photos/300/300'}}
          style={{width: width / 4 - 2, height: width / 4 - 2}}
          alt="사진"
        />
        {item.images.length > 1 && (
          <View style={{position: 'absolute', top: 8, right: 8, zIndex: 2}}>
            <MaterialCommunityIcon
              name="image-multiple-outline"
              size={16}
              color="#fff"
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const modalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={myStyle.displayWrapper}>
      <View
        style={[
          myStyle.flexRowWrapper,
          {
            margin: 8,
            padding: 8,
            gap: 4,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#ccc',
          },
        ]}>
        <TouchableOpacity onPress={() => searchHandler()}>
          <MaterialIcon name="search" size={24} color="#3a3a3a" />
        </TouchableOpacity>
        <TextInput
          value={searchTag}
          onChangeText={text => setSearchTag(text)}
          placeholder="검색"
          style={{
            flex: 1,
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={searchList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={4}
        />
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <SafeAreaView style={myStyle.displayWrapper}>
          <HeaderComponent leftHeaderHandler={modalHandler} title={'게시물'} />
          <FeedDetailComponent feed={feedDetailData} />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default SearchPage;
