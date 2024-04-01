import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MessageBoxComponent from '../components/MessageBoxComponent';
import myStyle from '../styles/myStyle';
import {useState} from 'react';

const dummyMessageList = [
  {isOwnData: true, content: '안녕!', time: '3:29', isRead: true},
  {isOwnData: false, content: '안녕!', time: '3:30', isRead: false},
  {
    isOwnData: true,
    content: '오늘 날씨 좋은데 나가서 놀까?',
    time: '3:32',
    isRead: true,
  },
  {isOwnData: true, content: '어떻게 생각해', time: '3:35', isRead: true},
  {isOwnData: false, content: '나도 좋은 것 같아', time: '3:37', isRead: false},
  {
    isOwnData: true,
    content: '어디로 갈지 생각해봐',
    time: '3:38',
    isRead: true,
  },
  {isOwnData: false, content: '한강어때?', time: '3:39', isRead: false},
  {isOwnData: true, content: '좋아', time: '3:40', isRead: false},
  {isOwnData: true, content: '이따보자', time: '3:40', isRead: false},
];

const DirectMessageDetailPage = ({route, navigation}) => {
  const [textInputData, setTextInputData] = useState();
  const {width} = useWindowDimensions();

  const renderItem = ({item, index}) => {
    return (
      <View>
        <MessageBoxComponent
          item={item}
          isNextDataOwn={
            dummyMessageList[index + 1]?.isOwnData ===
            dummyMessageList[index]?.isOwnData
              ? true
              : false
          }
        />
      </View>
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={myStyle.displayWrapper}>
      <HeaderComponent leftHeaderHandler={goBack} title={route.params.name} />
      <FlatList
        data={dummyMessageList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        style={{flex: 1}}
      />
      <View style={{justifyContent: 'flex-end', width: width, height: 60}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <TextInput
            placeholder="채팅을 입력하세요"
            value={textInputData}
            onChangeText={text => setTextInputData(text)}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#c9c9c9',
              borderRadius: 16,
              padding: 8,
              marginHorizontal: 8,
            }}
          />
          <TouchableOpacity
            style={{
              borderRadius: 8,
              backgroundColor: '#4169e1',
              paddingHorizontal: 8,
              height: 36,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>전송</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DirectMessageDetailPage;
