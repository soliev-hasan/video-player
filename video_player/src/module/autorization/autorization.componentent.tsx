import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './autorization.style';
import {Input} from '../../ui-components/input/input';
import {Button} from '../../ui-components/button/button.component';
import {RootNavigationProps} from '../app/app-navigation.type';
export const Autorization = ({
  navigation,
}: RootNavigationProps<'Autorization'>) => {
  //-------------------------------------------
  // variables
  //-------------------------------------------

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  //-------------------------------------------
  // functions
  //-------------------------------------------
  function logIn() {
    if (login === 'test2023' && password === 'test2023') {
      navigation.navigate('List');
    } else {
      setError('Login or password invalid');
    }
  }

  //----------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputs}>
        <Input
          value={login}
          onChangeText={text => setLogin(text.trim())}
          placeholder="Login"
          wrapperStyle={styles.input}
          placeholderTextColor={'gray'}
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text.trim())}
          placeholder="Password"
          wrapperStyle={styles.input}
          placeholderTextColor={'gray'}
          type="password"
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
      <Button onPress={logIn} style={styles.btn} styleText={styles.textColor}>
        Log in
      </Button>
    </SafeAreaView>
  );
};
