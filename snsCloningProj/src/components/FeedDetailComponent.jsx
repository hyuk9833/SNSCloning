import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import myStyle from '../styles/myStyle';

const FeedDetailComponent = ({feed}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {width, height} = useWindowDimensions();

  feed.images = feed.images.map(data => 'https://picsum.photos/1000/1000');

  const modalHandler = () => {
    setIsModalVisible(true);
  };

  return (
    <View>
      <View style={myStyle.headerWrapper}>
        <View style={myStyle.flexRowWrapper}>
          <Image
            source={{uri: 'https://avatar.iran.liara.run/public'}}
            style={myStyle.profileImage}
          />
          <Text style={myStyle.profileNickname}>{feed.nickname}</Text>
          <Text style={{fontSize: 13, color: '#5c5c5c'}}>{feed.id}시간 전</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcon name="dots-horizontal" size={24} />
        </TouchableOpacity>
      </View>
      <SliderBox
        images={feed.images}
        dotColor="#FFF"
        inactiveDotColor="#CCC"
        sliderBoxHeight={width}
      />
      <View style={{padding: 16, gap: 8}}>
        <View style={myStyle.flexRowWrapper}>
          <Text style={myStyle.profileNickname}>{feed.nickname}</Text>
          <Text>{feed.content}</Text>
        </View>
        <View style={myStyle.flexRowWrapper}>
          {feed.tags.map((data, index) => (
            <TouchableOpacity key={index}>
              <Text style={{fontSize: 13, color: '#4169e1'}}>{data}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={myStyle.flexRowWrapper}>
          <TouchableOpacity style={myStyle.emotionCountWrapper}>
            <Text style={myStyle.emotionCountText}>
              👍 {feed.emotions.good}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyle.emotionCountWrapper}>
            <Text style={myStyle.emotionCountText}>
              😆 {feed.emotions.funny}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyle.emotionCountWrapper}>
            <Text style={myStyle.emotionCountText}>
              😡 {feed.emotions.angry}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyle.emotionCountWrapper}>
            <Text style={myStyle.emotionCountText}>
              😲 {feed.emotions.surprise}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyle.emotionCountWrapper}>
            <Text style={myStyle.emotionCountText}>😭 {feed.emotions.sad}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => modalHandler()}
        style={{paddingHorizontal: 8}}>
        <Text style={{color: '#1c1c1c', fontWeight: 'bold'}}>댓글</Text>
        <View
          style={[
            myStyle.flexRowWrapper,
            {paddingVertical: 8, paddingLeft: 8},
          ]}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            {feed.replys[0]?.nickname}
          </Text>
          <Text>{feed.replys[0]?.reply}</Text>
          <Text style={{color: '#9c9c9c'}}>더보기...</Text>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationInTiming={300}
        animationOut={'slideOutDown'}
        animationOutTiming={300}
        onBackdropPress={() => {
          Keyboard.dismiss;
          setIsModalVisible(false);
        }}
        onBackButtonPress={() => {
          Keyboard.dismiss;
          setIsVisible(!isVisible);
        }}
        hideModalContentWhileAnimating
        style={{margin: 0, alignItems: 'center', justifyContent: 'flex-end'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={8}
          style={{width: '100%'}}>
          <ScrollView
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#FFF',
              width: width,
              height: height / 3,
              padding: 16,
              gap: 8,
              flex: 1,
            }}>
            <View style={[myStyle.flexRowWrapper, {marginBottom: 16}]}>
              <Text style={myStyle.profileNickname}>{feed.nickname}</Text>
              <Text>{feed.content}</Text>
            </View>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>댓글</Text>
            {feed.replys.map(item => (
              <View style={myStyle.flexRowWrapper}>
                <Image
                  source={{uri: 'https://avatar.iran.liara.run/public'}}
                  style={myStyle.profileImage}
                  alt="프로필이미지"
                />
                <View style={{paddingVertical: 8}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    {item.nickname}
                  </Text>
                  <Text>{item.reply}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default FeedDetailComponent;
