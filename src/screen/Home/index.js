import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useRef } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CardMenu,
  IstighfarShalawat,
  HizbullNafsh,
  Yasin,
  RatibulMuhammad,
  Waqiah,
  WiridulSyifa,
  MaulidulMuhammad,
  Manaqib,
  Almulk,
} from '../../components';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

const Home = () => {
  const scrollViewRef = useRef(null);
  const scrollToView = (y) => {
    console.log('scroll nya',y);
    if(y == 1){
      scrollViewRef.current.scrollTo({ y: 2000, animated: true });

    }

    if(y == 2){
      scrollViewRef.current.scrollTo({ y: 6600, animated: true });

    }


    if(y == 3){
      scrollViewRef.current.scrollTo({ y: 10100, animated: true });

    }

    if(y == 4){
      scrollViewRef.current.scrollTo({ y: 21800, animated: true });

    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#008080', padding: heightPercentageToDP('2.2%'), flexDirection: 'row', alignItems: 'center', borderBottomRightRadius: 18, borderBottomLeftRadius: 18 }}>
          <TouchableOpacity >
            <Image
              tintColor={'white'}
              source={require('../../Assets/images/List.png')}
              style={{
                width: widthPercentageToDP('8%'),
                height: heightPercentageToDP('4.5%'),
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Image

              source={require('../../Assets/images/Logo1.png')}
              style={{
                width: widthPercentageToDP('10%'),
                height: heightPercentageToDP('5%'),
              }}
              resizeMode="cover"
            />
        <TouchableOpacity >
            <Image
              tintColor={'white'}
              source={require('../../Assets/images/search.png')}
              style={{
                width: widthPercentageToDP('7%'),
                height: heightPercentageToDP('3.5%'),
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <ScrollView ref={scrollViewRef}>
          <View style={{ flex:1, padding: 8}}>


            {/* card Menu */}
           <CardMenu scrollToView={scrollToView} />
           {/* Istigfar Shalawat */}
           <IstighfarShalawat />
            {/* Hiszbull Nafsh */}
            <HizbullNafsh />
              {/* Yasin */}
              <Yasin />
            {/* RatibulMuhammad */}
            <RatibulMuhammad />
            {/* Waqiah */}
            <Waqiah />
            {/* WiridulSyifa */}
            <WiridulSyifa/>

            {/* maulidulMuhammad */}
            <MaulidulMuhammad/>

            {/* Manaqib */}
            <Manaqib/>

            {/* Almulk */}
            <Almulk/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
