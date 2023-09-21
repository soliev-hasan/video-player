import React from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';

export function SearchKeywordHighlight({
  text,
  keyword,
  style,
}: {
  text: string;
  keyword?: string;
  style?: StyleProp<TextStyle>;
}) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));

  if (!keyword) {
    return <Text style={style}>{text}</Text>;
  }

  // ---------------------------------------------------------------------------

  return (
    <View style={{flexDirection: 'row'}}>
      {parts.map((part, index) => (
        <View key={index}>
          {part.toLowerCase() === keyword.toLowerCase() ? (
            <Text
              style={{
                backgroundColor: 'lightgreen',
                marginTop: 10,
              }}>
              {part}
            </Text>
          ) : (
            <>
              <Text style={style}>{part}</Text>
            </>
          )}
        </View>
      ))}
    </View>
  );
}
