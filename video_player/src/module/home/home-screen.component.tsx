import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('List')}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
