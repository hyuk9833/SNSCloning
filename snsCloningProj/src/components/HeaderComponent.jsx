import {View, TouchableOpacity, Text} from 'react-native';
import myStyle from '../styles/myStyle';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const HeaderComponent = ({title, leftHeaderHandler, rightHeaderHandler}) => {
  return (
    <View style={myStyle.headerWrapper}>
      {leftHeaderHandler ? (
        <TouchableOpacity onPress={() => leftHeaderHandler()}>
          <MaterialIcon name="keyboard-arrow-left" size={24} />
        </TouchableOpacity>
      ) : (
        <View style={{width: 24, height: 24}} />
      )}
      <Text style={myStyle.headerTitle}>{title}</Text>
      {rightHeaderHandler ? (
        <TouchableOpacity onPress={() => rightHeaderHandler()}>
          <Text>완료</Text>
        </TouchableOpacity>
      ) : (
        <View style={{width: 24, height: 24}} />
      )}
    </View>
  );
};

export default HeaderComponent;
