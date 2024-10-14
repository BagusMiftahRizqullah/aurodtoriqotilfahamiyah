import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import TrackPlayer from 'react-native-track-player';

const Sound = (props) => {
    const [pause, setPause] = useState(false);
    const [onPlay, setOnPlay] = useState('');
    const [trackNow, setTracknOW] = useState(false);


    const AllTrack = [
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


      useEffect(() => {
        async function setupMusic() {
          await TrackPlayer.setupPlayer();
          await TrackPlayer.add(AllTrack);
          const position = await TrackPlayer.getPosition();
          const duration = await TrackPlayer.getDuration();
          console.log(`${duration - position} seconds left.`);
          setTracknOW(duration - position);
          TrackPlayer.updateOptions({
            android: {
                // This is the default behavior
                appKilledPlaybackBehavior: true,
            },
        });
        }

        setupMusic();
      }, []);

      // Play the sound with an onEnd callback
      const start = async index => {
        console.log('pause', pause);
        let trackIndex = await TrackPlayer.getCurrentTrack();
        let trackObject = await TrackPlayer.getTrack(trackIndex);
        console.log('trackObject', trackObject);
        setOnPlay(trackObject.title);

        // Start playing it
        if (index == true) {
          await TrackPlayer.play();
        } else if (pause == true) {
          await TrackPlayer.stop();
        } else {
          await TrackPlayer.play();
        }
      };

      const prevFUN = async () => {
        let trackIndex1 = await TrackPlayer.getCurrentTrack();
        let trackObject1 = await TrackPlayer.getTrack(
          trackIndex1 == null ? 0 : trackIndex1 - 1,
        );
        setOnPlay(trackObject1.title);
        await TrackPlayer.skipToPrevious();
      };

      const nexFUN = async () => {
        let trackIndex2 = await TrackPlayer.getCurrentTrack();
        let trackObject2 = await TrackPlayer.getTrack(trackIndex2 + 1);
        console.log('next', trackIndex2);

        setOnPlay(trackObject2.title);
        await TrackPlayer.skipToNext();
      };

      const palyIndex = async i => {
        await TrackPlayer.skip(i);

        let trackIndex3 = await TrackPlayer.getCurrentTrack();
        let trackObject3 = await TrackPlayer.getTrack(trackIndex3);
        setOnPlay(trackObject3.title);
        await start(true);
      };

  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'space-between',
      }}>
          <View style={{ justifyContent:'flex-start', alignItems: 'center', backgroundColor:'#008080', padding: heightPercentageToDP('2.2%'), flexDirection: 'row', borderBottomRightRadius: 18, borderBottomLeftRadius: 18 }}>
          <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>

              <Image
              tintColor={'#ffffff'}
              source={require('../../Assets/images/back.png')}
              style={{
                width: widthPercentageToDP('9.5%'),
                height: heightPercentageToDP('4.5%'),
              }}
              resizeMode="cover"
            />
            <View style={{width:0}}/>

            </TouchableOpacity>
            <View style={{width:widthPercentageToDP('30%')}}/>
          <Text  style={{
              color: '#ffffff',
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: heightPercentageToDP(2.5),
            }}>Sound</Text>

         </View>
      <View
        style={{
        flex: 1,
          height: heightPercentageToDP(90),
          padding: 8,
        }}>
        <ScrollView
          style={{
            flex: 1,
            marginHorizontal: heightPercentageToDP(2),
          }}>
          {AllTrack?.map((v, i) => {
            return (
              <View style={{
                flex: 1,
              }} key={i}>
                <TouchableOpacity
                  onPress={() => {
                    setPause(true), palyIndex(i);
                  }}
                  style={{
                    // backgroundColor:'red',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: widthPercentageToDP(32),
                      height: heightPercentageToDP(23),
                      marginRight: widthPercentageToDP(0),
                    }}
                    source={v?.artwork}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      color: '#000000',
                    }}>
                    {v?.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        {/* playing button */}
        <View
          style={{

            backgroundColor: 'white',
            height: heightPercentageToDP(16),
            justifyContent: 'center',
            marginTop: heightPercentageToDP(2),
            marginBottom: heightPercentageToDP(1),
          }}>
          <Text
            style={{
              color: '#000000',
              alignSelf: 'center',
              marginBottom: 13,
            }}>
            {onPlay !== '' ? onPlay : AllTrack[trackNow]?.title}
          </Text>
          <View
            opacity={0.7}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => prevFUN()}>
              <Image
                style={{
                  width: widthPercentageToDP(8),
                  height: heightPercentageToDP(5),
                  marginRight: widthPercentageToDP(0),
                }}
                source={require('../../Assets/images/prevMusic.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPause(!pause), start();
              }}>
              <Image
                style={{
                  width: widthPercentageToDP(10),
                  height: heightPercentageToDP(8),
                  marginRight: widthPercentageToDP(0),
                }}
                source={
                  pause
                    ? require('../../Assets/images/pauseMusic.png')
                    : require('../../Assets/images/playMusic.png')
                }
               resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nexFUN()}>
              <Image
                style={{
                  width: widthPercentageToDP(8),
                  height: heightPercentageToDP(5),
                  marginRight: widthPercentageToDP(0),
                }}
                source={require('../../Assets/images/nextMusic.png')}
               resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sound;

const styles = StyleSheet.create({});
