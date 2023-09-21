import {Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './header.style';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'lucide-react-native';

export const Header = ({
  heading,
  children,
  backIcon = false,
}: {
  heading: string;
  children?: ReactNode;
  backIcon?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        {backIcon ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft size={22} color="#8592AA" strokeWidth={2} />
          </TouchableOpacity>
        ) : null}

        <Text style={styles.heading}>{heading}</Text>
      </View>

      <View style={{marginTop: 5}}>{children}</View>
    </View>
  );
};
