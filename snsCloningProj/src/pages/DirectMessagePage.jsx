import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MessageComponent from '../components/MessageComponent';
import myStyle from '../styles/myStyle';

const dummyMessageList = [
  {
    name: '김춘추',
    content:
      '실리카겔은 팀워크(Teamwork) 보다 팀플레이(Teamplay)를 지향한다’ 라는 다소 치기 있는 밴드의 인터뷰는 허투루 넘길 만한 농이 아니라 밴드가 추구하는 현재를 가장 잘 대변하는 한마디처럼 들린다. ',
  },
  {
    name: '조휴일',
    content:
      '대표적으로 첫 정규앨범 201의 경우 개러지 락/뉴욕 펑크 특유의 간결하고 단순한 구성 위에 스트록스를 연상케 하는 세련된 멜로디와 팝적인 감성이 돋보이는 것이 특징이라고 할 수 있다.',
  },
  {
    name: '김한주',
    content:
      '실리카겔은 팀워크(Teamwork) 보다 팀플레이(Teamplay)를 지향한다’ 라는 다소 치기 있는 밴드의 인터뷰는 허투루 넘길 만한 농이 아니라 밴드가 추구하는 현재를 가장 잘 대변하는 한마디처럼 들린다. ',
  },
  {name: '최정훈', content: '안녕하세요. 저희는 그룹사운드 잔나비입니다.'},
  {name: '권정열', content: '안녕하세요, 10CM입니다!'},
  {
    name: '한요한',
    content:
      '기타멘 무사시라는 별명을 자주 쓰는데 이건 스윙스가 해준 이야기에서 따왔다. ',
  },
  {name: '이지훈', content: '이지훈은 대한민국의 가수, 배우이다.'},
  {name: '김현아', content: '오늘 뭐해?'},
  {
    name: '최수정',
    content: '당신이 가장 기억에 남는 여행 경험은 무엇이었나요?',
  },
  {name: '김소정', content: '저도 몇 가지 추천해 드릴 수 있어요.'},
  {
    name: '박찬열',
    content:
      '인셉션이라는 영화였는데, 진짜 복잡한 이야기에 긴장감 넘쳤어. 너도 한 번 봐봐.',
  },
  {name: '김재경', content: '어제 저녁에는 뭐 먹었어?'},
];

const DirectMessagePage = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: 16, borderTopWidth: 1, borderTopColor: '#CCC'}}
        onPress={() =>
          navigation.navigate('DirectMessageDetail', {name: item.name})
        }>
        <MessageComponent name={item.name} content={item.content} />
      </TouchableOpacity>
    );
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={myStyle.displayWrapper}>
      <HeaderComponent title="메시지 전송" leftHeaderHandler={goBack} />
      <FlatList
        data={dummyMessageList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default DirectMessagePage;
