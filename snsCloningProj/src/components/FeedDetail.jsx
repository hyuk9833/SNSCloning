import {View, Text, SafeAreaView} from 'react-native';
import myStyle from '../styles/myStyle';

const FeedDetail = ({feed}) => {
  return (
    <SafeAreaView style={myStyle.displayWrapper}>
      <Text>{feed.nickname}</Text>
    </SafeAreaView>
  );
};

export default FeedDetail;
