import { AppRegistry } from 'react-native';
import App from './App';
import TrackPlayer from 'react-native-track-player';
import { name as appName } from './app.json';
import { playbackService } from './trackPlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);