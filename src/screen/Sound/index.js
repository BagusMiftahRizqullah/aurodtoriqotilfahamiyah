import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import TrackPlayer from 'react-native-track-player';

const tracks = [
  {
    url: require('../../Assets/RotibulMuhammad.mp3'),
    title: 'Ratibul Muhammad.mp3',
    artist: 'Thoriqoh Fahamiyah',
    artwork: require('../../Assets/images/ratibulMuhammad.png'),
  },
  {
    url: require('../../Assets/MaulidulMuhammad.mp3'),
    title: 'Maulidul Muhammad.mp3',
    artist: 'Thoriqoh Fahamiyah',
    artwork: require('../../Assets/images/maulidulMuhammad.png'),
  },
  {
    url: require('../../Assets/manaqib.mp3'),
    title: 'Manaqib.mp3',
    artist: 'Thoriqoh Fahamiyah',
    artwork: require('../../Assets/images/manaqib.png'),
  },
  {
    url: require('../../Assets/DoaFathimah.mp3'),
    title: 'Doa Fathimah.mp3',
    artist: 'Thoriqoh Fahamiyah',
    artwork: require('../../Assets/images/DoaFathimah.png'),
  },
  {
    url: require('../../Assets/ShalawatMukafaah.mp3'),
    title: 'Shalawat Mukafaah.mp3',
    artist: 'Thoriqoh Fahamiyah',
    artwork: require('../../Assets/images/ShalawatMukafah.png'),
  },
];

const Sound = ({ navigation }) => {
  const [pause, setPause] = useState(false);
  const [onPlay, setOnPlay] = useState('');
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const setup = async () => {
      try {
        console.log('setup1');
        await TrackPlayer.setupPlayer();
        console.log('setup2');
        await TrackPlayer.reset();
        console.log('setup3');
        await TrackPlayer.add(tracks);
        console.log('setup4');

        // await TrackPlayer.updateOptions({
        //   android: {
        //     appKilledPlaybackBehavior: TrackPlayer.APP_KILLED_PLAYBACK_BEHAVIOR_CONTINUE_PLAYBACK,
        //   },
        //   stopWithApp: false,
        //   capabilities: [
        //     TrackPlayer.CAPABILITY_PLAY,
        //     TrackPlayer.CAPABILITY_PAUSE,
        //     TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        //     TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        //     TrackPlayer.CAPABILITY_STOP,
        //   ],
        //   compactCapabilities: [
        //     TrackPlayer.CAPABILITY_PLAY,
        //     TrackPlayer.CAPABILITY_PAUSE,
        //   ],
        // });
        console.log('setup5');

        setIsPlayerReady(true);
      } catch (err) {
        console.error('useEffect setup error:', err);
      }
    };

    setup();
  }, []);


  const start = async (forcePlay = false) => {
    if (!isPlayerReady) {return;}

    try {
      const trackIndex = await TrackPlayer.getCurrentTrack();
      if (trackIndex === null) {return;}

      const track = await TrackPlayer.getTrack(trackIndex);
      if (track?.title) {setOnPlay(track.title);}

      if (forcePlay || !pause) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    } catch (err) {
      console.warn('Start Error:', err);
    }
  };

  const handleSkip = async (direction) => {
    if (!isPlayerReady) {return;}

    try {
      if (direction === 'prev') {
        await TrackPlayer.skipToPrevious();
      } else {
        await TrackPlayer.skipToNext();
      }

      const trackIndex = await TrackPlayer.getCurrentTrack();
      if (trackIndex !== null) {
        const track = await TrackPlayer.getTrack(trackIndex);
        if (track?.title) {setOnPlay(track.title);}
      }
    } catch (err) {
      console.warn('Skip Error:', err);
    }
  };

  const playFromIndex = async (index) => {
    if (!isPlayerReady) {return;}

    try {
      await TrackPlayer.skip(index);
      const track = await TrackPlayer.getTrack(index);
      if (track?.title) {setOnPlay(track.title);}
      await start(true);
    } catch (err) {
      console.warn('PlayFromIndex Error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            tintColor="#ffffff"
            source={require('../../Assets/images/back.png')}
            style={styles.backIcon}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Sound</Text>
      </View>

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.trackList}>
          {tracks.map((track, i) => (
            <TouchableOpacity key={i} onPress={() => { setPause(true); playFromIndex(i); }} style={styles.trackItem}>
              <Image source={track.artwork} style={styles.artwork} resizeMode="contain" />
              <Text style={styles.trackTitle}>{track.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.player}>
          <Text style={styles.nowPlaying}>{onPlay || 'Select a track'}</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => handleSkip('prev')}>
              <Image source={require('../../Assets/images/prevMusic.png')} style={styles.controlIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setPause(!pause); start(); }}>
              <Image
                source={pause ? require('../../Assets/images/pauseMusic.png') : require('../../Assets/images/playMusic.png')}
                style={styles.playIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSkip('next')}>
              <Image source={require('../../Assets/images/nextMusic.png')} style={styles.controlIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sound;

// ...styles (unchanged)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008080',
    padding: hp('2.2%'),
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  backIcon: {
    width: wp('9.5%'),
    height: hp('4.5%'),
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(2.5),
    marginLeft: wp('30%'),
  },
  body: {
    flex: 1,
    height: hp(90),
    padding: 8,
  },
  trackList: {
    marginHorizontal: hp(2),
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  artwork: {
    width: wp(32),
    height: hp(23),
  },
  trackTitle: {
    color: '#000',
    marginLeft: wp(2),
    flexShrink: 1,
  },
  player: {
    backgroundColor: '#fff',
    height: hp(16),
    justifyContent: 'center',
    marginVertical: hp(1),
  },
  nowPlaying: {
    color: '#000',
    alignSelf: 'center',
    marginBottom: 13,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    opacity: 0.7,
  },
  controlIcon: {
    width: wp(8),
    height: hp(5),
  },
  playIcon: {
    width: wp(10),
    height: hp(8),
  },
});
