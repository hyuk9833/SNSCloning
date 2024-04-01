import {FlatList, SafeAreaView, Text, View} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MessageBoxComponent from '../components/MessageBoxComponent';
import myStyle from '../styles/myStyle';

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
  console.log(new Date().toLocaleTimeString());
  const img = 'https://avatar';

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
    </SafeAreaView>
  );
};

export default DirectMessageDetailPage;
