import {Image, Text, View} from 'react-native';
import myStyle from '../styles/myStyle';

const MessageBoxComponent = ({item, isNextDataOwn}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
      }}>
      {item.isOwnData ? (
        <View
          style={[
            myStyle.flexRowWrapper,
            {marginLeft: 'auto'},
            isNextDataOwn ? {marginBottom: 8} : {marginBottom: 24},
          ]}>
          {!isNextDataOwn && (
            <View style={[myStyle.flexRowWrapper, {gap: 4}]}>
              <Text style={{color: '#5c5c5c'}}>
                {item.isRead !== true ? '읽지않음' : ''}
              </Text>
              <Text style={myStyle.chatTime}>{item.time}</Text>
            </View>
          )}
          <View
            style={{backgroundColor: '#4169e1', padding: 12, borderRadius: 16}}>
            <Text style={{color: '#FFF'}}>{item.content}</Text>
          </View>
        </View>
      ) : (
        <View
          style={[
            myStyle.flexRowWrapper,
            isNextDataOwn ? {marginBottom: 8} : {marginBottom: 24},
          ]}>
          <Image
            source={{
              uri: 'https://avatar.iran.liara.run/public/boy?username=Scott',
            }}
            style={{
              width: 28,
              height: 28,
              borderColor: '#777',
              borderWidth: 1,
              borderRadius: 200,
            }}
          />
          <View
            style={{
              padding: 12,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#5c5c5c',
            }}>
            <Text>{item.content}</Text>
          </View>
          <Text style={myStyle.chatTime}>{item.time}</Text>
        </View>
      )}
    </View>
  );
};

export default MessageBoxComponent;
