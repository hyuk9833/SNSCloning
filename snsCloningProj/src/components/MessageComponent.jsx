import {View, Image, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import myStyle from '../styles/myStyle';

const MessageComponent = ({name, content}) => {
  return (
    <View style={myStyle.flexRowWrapper}>
      <Image
        source={{uri: 'https://avatar.iran.liara.run/public'}}
        style={{width: 48, height: 48}}
      />
      <View
        style={{
          flex: 1,
          gap: 8,
        }}>
        <Text style={myStyle.profileNickname}>{name}</Text>
        <Text
          style={{flex: 1, color: '#9c9c9c'}}
          numberOfLines={1}
          ellipsizeMode="tail">
          {content}
        </Text>
      </View>
      <MaterialIcon name="keyboard-arrow-right" size={24} />
    </View>
  );
};

export default MessageComponent;
