import {SafeAreaView, Text, TextInput, useWindowDimensions} from 'react-native';

const AddPage = () => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      <TextInput
        multiline
        style={{
          width: width,
          height: width,
          backgroundColor: '#FFF',
        }}
      />
    </SafeAreaView>
  );
};

export default AddPage;
