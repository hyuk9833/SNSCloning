import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import myStyle from '../styles/myStyle';

const FeedComponent = ({feed}) => {
  const {width} = useWindowDimensions();

  feed.images = feed.images.map(data => 'https://picsum.photos/1000/1000');
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
    </View>
  );
};

export default FeedComponent;
