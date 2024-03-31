import {StyleSheet} from 'react-native';

const myStyle = StyleSheet.create({
  displayWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalView: {},
  imageSelectCircle: {
    position: 'absolute',
    borderRadius: 20,
    borderColor: '#FFF',
    backgroundColor: '#4169e1',
    borderWidth: 1,
    width: 20,
    height: 20,
    right: 8,
    top: 2,
    zIndex: 2,
  },
  imageUnSelectCircle: {
    position: 'absolute',
    borderRadius: 20,
    borderColor: '#FFF',
    borderWidth: 1,
    width: 20,
    height: 20,
    right: 8,
    top: 2,
    zIndex: 2,
  },
});

export default myStyle;
