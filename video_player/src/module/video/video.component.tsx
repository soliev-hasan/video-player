import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './video.style';
import Video from 'react-native-video';
import {RootNavigationProps} from '../app/app-navigation.type';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../ui-components/header/header.component';

export const VideoPlayer = ({
  navigation,
  route,
}: RootNavigationProps<'VideoPlayer'>) => {
  //----------------------------------------
  //variables
  //----------------------------------------

  const {video} = route.params;

  //----------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header heading={'Player'} backIcon={true} />
      </View>
      <Video
        source={{uri: video.src}}
        style={{width: '100%', height: 200}}
        controls={true}
      />
      <ScrollView style={styles.texts}>
        <Text style={styles.name}>{video.name}</Text>
        <Text style={styles.about}>{video.about}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
