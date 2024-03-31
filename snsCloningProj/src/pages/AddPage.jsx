import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import myStyle from '../styles/myStyle';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import api from '../apis/api';

const AddPage = ({navigation}) => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const {width} = useWindowDimensions();

  useEffect(() => {
    FetchImages();
  });

  const filterSelected = (selectItem, selectIndex) => {
    // 클릭한 이미지가 선택되지 않았을때
    if (!selectedIndex.includes(selectIndex)) {
      setSelectedPhoto(selectedPhoto =>
        [selectItem, ...selectedPhoto].slice(0, 5),
      );
      setSelectedIndex(selectedIndex =>
        [selectIndex, ...selectedIndex].slice(0, 5),
      );
    } else {
      // 클릭한 이미지가 이미 선택됐을때 선택 해제
      setSelectedPhoto(selectedPhoto =>
        selectedPhoto.filter(item => selectItem !== item),
      );
      setSelectedIndex(selectedIndex =>
        selectedIndex.filter(index => selectIndex !== index),
      );
    }
  };

  const FetchImages = async () => {
    CameraRoll.getPhotos({
      first: 100,
      assetType: 'photos',
      groupTypes: 'All',
    }).then(res => {
      if (!selectedPhoto) {
        setSelectedPhoto(res.edges[0].node.image);
        setSelectedIndex(0);
      }

      setImages(res.edges.map(e => e.node.image));
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          filterSelected(item, index);
        }}
        style={{borderWidth: 1, borderColor: '#FFF'}}>
        <View
          style={
            selectedIndex.includes(index)
              ? myStyle.imageSelectCircle
              : myStyle.imageUnSelectCircle
          }
        />

        <Image
          source={item}
          style={{width: width / 4 - 2, height: width / 4 - 2}}
          alt="사진"
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={myStyle.displayWrapper}>
      <View style={myStyle.headerWrapper}>
        <TouchableOpacity>
          <Icon name="close" size={24} />
        </TouchableOpacity>
        <Text style={myStyle.headerTitle}>게시물 추가</Text>
        <TouchableOpacity onPress={async () => await api()}>
          <Text style={{color: '#4169e1'}}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={{borderWidth: 1, borderColor: '#c1c1c1', margin: 8}}>
        <TextInput
          multiline
          value={content}
          onChange={text => setContent(text)}
          placeholder="문구를 입력하세요"
          style={{
            width: width - 32,
            height: width - 32,
            margin: 8,
          }}
        />
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 8, gap: 8}}>
        {selectedPhoto &&
          selectedPhoto.map(item => (
            <Image source={{uri: item.uri}} style={{width: 48, height: 48}} />
          ))}
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            width: 48,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#CCC',
          }}
          onPress={() => setModalVisible(true)}>
          <Icon name="plus" size={36} color="#CCC" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <SafeAreaView style={myStyle.modalView}>
          <View style={myStyle.headerWrapper}>
            <View />
            <Text style={myStyle.headerTitle}>사진 선택</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{color: '#4169e1'}}>완료</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            numColumns={4}
            removeClippedSubviews
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default AddPage;
