import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 30,
  },
  img: {
    width: 100,
    height: 120,
  },
  name: {
    color: 'white',
    fontWeight: '500',
    marginTop: 10,
  },
  description: {
    color: 'gray',
    marginTop: 5,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 20,
  },
});
