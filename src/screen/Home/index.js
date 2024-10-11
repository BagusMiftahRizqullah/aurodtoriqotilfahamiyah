import { SafeAreaView, StyleSheet, Platform, View, Image, TouchableOpacity, Modal ,Dimensions, ScrollView, Text, Alert, Linking} from 'react-native';
import React, { useRef,useState } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Pdf from 'react-native-pdf';


const Home = () => {
  const scrollViewRef = useRef(null);
  const [page, setPage] = useState(1);
  const [num, setNum] = useState(0);
  const [list, setList] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleOption, setModalVisibleOption] = useState(false);

  const AllTrack = [
    {
      url: require('../../Assets/RotibulMuhammad.mp3'),
      title: 'Ratibul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/Putih.png'),
      no: 4,
    },
    {
      url: require('../../Assets/RotibulMuhammad.mp3'),
      title: 'Ratibul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/HisbulNafsh.png'),
      no: 10,
    },
    {
      url: null,
      title: 'Surah Ya-sin.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/Yasin.png'),
      no: 14,
    },
    {
      url: require('../../Assets/RotibulMuhammad.mp3'),
      title: 'Ratibul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/ratibulMuhammad.png'),
      no: 27,
    },
    {
      url: null,
      title: 'Surah Al-Waqiah.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/Alwaqiah.png'),
      no: 46,
    },
    {
      url: require('../../Assets/MaulidulMuhammad.mp3'),
      title: 'Maulidul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/Hijau.png'),
      no: 55,
    },
    {
      url: require('../../Assets/MaulidulMuhammad.mp3'),
      title: 'Maulidul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/maulidulMuhammad.png'),
      no: 62,
    },
    {
      url: require('../../Assets/manaqib.mp3'),
      title: 'Manaqib.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/manaqib.png'),
      no: 81,
    },
    {
      url: null,
      title: 'Surah Al-Mulk.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/AlMulk.png'),
      no: 123,
    },
    {
      url: require('../../Assets/DoaFathimah.mp3'),
      title: 'Doa Fathimah.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/DoaFathimah.png'),
      no: 131,
    },
    {
      url: require('../../Assets/DoaFathimah.mp3'),
      title: 'Doa Muzamil.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('../../Assets/images/DoaMuzamil.png'),
      no: 134,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#008080', padding: heightPercentageToDP('2.2%'), flexDirection: 'row', alignItems: 'center', borderBottomRightRadius: 18, borderBottomLeftRadius: 18 }}>
          <TouchableOpacity  onPress={() => {
              setModalVisibleOption(true);
            }} >
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
        <TouchableOpacity onPress={()=>setModalVisible(true)} >
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

          <View style={{ flex:1, padding: 8}}>
            <View style={{flexDirection:'row'}}>
          <Pdf
          horizontal={list}
          enablePaging={list}
          page={page}
          trustAllCerts={false}
          source={
            Platform.OS == 'ios'
              ? require('../../Assets/kitabAurod.pdf')
              : {uri: 'bundle-assets://path/to/kitabAurod.pdf'}
          }
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
            if (page > 3) {
              setNum(page - 3);
            }
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />
        {/* <View style={{width:12}}/> */}
            </View>

          </View>

      </SafeAreaView>
       {/* modal media */}
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Contact Info</Text>
            <View style={{height:23}}/>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                Linking.openURL(
                  'whatsapp://send?text=Assalamualaikum syeikh&phone=+6281237664599'
                ).then(supported => {
                  console.log('supported',supported);
                  if (supported) {
                    return Linking.openURL(
                      'whatsapp://send?text=Assalamualaikum syeikh&phone=+6281237664599',
                    );
                  } else {
                    return Linking.openURL('https://wa.me/6281237664599?text=Assalamualaikum syeikh');
                  }
                })
                .catch(err => {
                  console.log('errr', err),
                    Linking.openURL(
                      'https://wa.me/6281237664599?text=Assalamualaikum syeikh',
                    );
                });

              }}
              style={{
                borderWidth: 2,
                borderRadius: 20,
                width: widthPercentageToDP(39),
                height: heightPercentageToDP(5),
                backgroundColor: '#9CCCBE',
                marginBottom: 12,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-evenly',
              }}>
              <Image
              source={require('../../Assets/images/wa.png')}
              style={{
                width: widthPercentageToDP('7%'),
                height: heightPercentageToDP('4%'),
              }}
              resizeMode="cover"
            />

            <Text style={styles.modalText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 20,
                width: widthPercentageToDP(39),
                height: heightPercentageToDP(5),
                backgroundColor: '#FFC8D5',
                marginBottom: 12,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-evenly',
              }}
              onPress={() => {
                setModalVisible(false),
                  Linking.openURL(
                    'vnd.youtube://channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                  )
                    .then(supported => {
                      if (supported) {
                        return Linking.openURL(
                          'vnd.youtube://channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                        );
                      } else {
                        return Linking.openURL(
                          'https://www.youtube.com/channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                        );
                      }
                    })
                    .catch(err => {
                      console.log('errr', err),
                        Linking.openURL(
                          'https://www.youtube.com/channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                        );
                    });
              }}>
                 <Image
              source={require('../../Assets/images/youtube.png')}
              style={{
                width: widthPercentageToDP('7%'),
                height: heightPercentageToDP('4%'),
              }}
              resizeMode="cover"
            />
              <Text style={styles.modalText}>Youtube</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Modal Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleOption}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleOption(!modalVisibleOption);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView2}>
            <Text style={styles.modalText}>Pilih Untuk Menuju Halaman</Text>
            <ScrollView
              style={{
                marginTop: heightPercentageToDP(2),
                width: widthPercentageToDP(90),
              }}>
              {AllTrack?.map((v, i) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setPage(v.no),
                          setModalVisibleOption(!modalVisibleOption);
                      }}
                      style={{
                        // backgroundColor:'red',
                        // flexDirection:'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          width: widthPercentageToDP(42),
                          height: heightPercentageToDP(23),
                          marginTop: widthPercentageToDP(2),
                        }}
                        source={v?.artwork}

                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleOption(!modalVisibleOption)}>
              <Text style={styles.textStyle}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pdf: {
    flex:1,
    width:Dimensions.get('window').width - 10,
    height:Dimensions.get('window').height,
},
centeredView: {
  backgroundColor: 'rgba(0,0,0,0.5)',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 20,
  backgroundColor: '#FFF',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
modalView2: {
  width: widthPercentageToDP(90),
  height: heightPercentageToDP(90),
  margin: 3,
  backgroundColor: '#FFF',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  marginTop: heightPercentageToDP(3),
  borderRadius: 8,
  padding: 10,
  elevation: 2,
},
buttonOpen: {
  backgroundColor: '#F194FF',
},
buttonClose: {
  width: widthPercentageToDP(32),
  backgroundColor: '#DD5571',
},
textStyle: {
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 16,
},
modalText: {
  fontWeight: 'bold',
  fontSize: 18,
  alignSelf: 'center',
  color: '#000000',
},
});
