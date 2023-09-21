import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './list-video.style';
import {Header} from '../../ui-components/header/header.component';
import {VideoList, listVideo} from './data';
import {RootNavigationProps} from '../app/app-navigation.type';
import {Input} from '../../ui-components/input/input';
import {SearchKeywordHighlight} from '../../ui-components/search/search-common-subject/search-keyword-highlight.component';
export const ListVideo = ({navigation}: RootNavigationProps<'List'>) => {
  //--------------------------------------------------------
  // variables
  //--------------------------------------------------------
  const [keyword, setKeyword] = useState<string>('');
  const [filteredVideo, setFilteredVideo] = useState<VideoList[]>([]);

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    setFilteredVideo(listVideo);
  }, [listVideo]);

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  async function changeKeyword(newKeyword: string) {
    setKeyword(newKeyword);
    if (newKeyword) {
      const filteredVideo = listVideo.filter(video =>
        video.name.toLowerCase().includes(newKeyword.toLowerCase()),
      );
      setFilteredVideo(filteredVideo);
    } else {
      setFilteredVideo(listVideo);
    }
  }
  //--------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header heading="Media" />
        <Input
          placeholder="Search"
          placeholderTextColor={'gray'}
          wrapperStyle={styles.input}
          value={keyword}
          onChangeText={changeKeyword}
        />
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {filteredVideo.map(video => (
          <TouchableOpacity
            onPress={() => navigation.navigate('VideoPlayer', {video})}
            key={video.id}>
            <Image style={styles.img} source={{uri: video.avatar}} />
            {/* <Text style={styles.name}>{video.name}</Text> */}
            <SearchKeywordHighlight
              keyword={keyword}
              style={styles.name}
              text={video.name}
            />
            <Text style={styles.description}>{video.genre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
