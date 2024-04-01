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
  profileImage: {
    width: 24,
    height: 24,
  },
  profileNickname: {
    fontWeight: 'bold',
  },
  feedImage: {
    width: 120,
    height: 120,
  },
  emotionCountWrapper: {
    borderWidth: 2,
    borderColor: '#6c6c6c',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  emotionCountText: {
    fontWeight: 'bold',
  },
  flexRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chatTime: {
    color: '#8a8a8a',
    fontWeight: '600',
  },
});

export default myStyle;
