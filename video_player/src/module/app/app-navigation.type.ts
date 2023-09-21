import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {VideoList} from '../list-video/data';

export type StackScreenProps = {
  Autorization: undefined;
  Home: undefined;
  List: undefined;
  VideoPlayer: {
    video: VideoList;
  };
};
export type RootRouteProps<RouteName extends keyof StackScreenProps> =
  RouteProp<StackScreenProps, RouteName>;

export type RootNavigationProps<NavigationName extends keyof StackScreenProps> =
  NativeStackScreenProps<StackScreenProps, NavigationName>;
