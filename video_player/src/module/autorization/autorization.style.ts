import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
  },
  inputs: {
    gap: 20,
  },
  btn: {
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  textColor: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
  },
});
