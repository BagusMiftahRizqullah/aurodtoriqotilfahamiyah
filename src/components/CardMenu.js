import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React,{useRef} from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const CardMenu = ({scrollToView}) => {
    const sectionRef = useRef(null);
    const dataMenu = [
        {
            id: 1,
            title: 'قُرِأَ بَعْد َ الص َّ لَ َ ةِ الْفَر ْ ض ',
            image: require('../Assets/images/Putih.png'),
            descriptionID: "SETIAP BA'DA SHOLAT FARDHU",
            descriptionEN: 'READ AFTER SHOLAT FARDHU',
        },
        {
            id: 2,
            title: 'قُرِأَ بَعْد َ الص َّ لَ َ ةِ الص ُّ بْحِ',
            image: require('../Assets/images/HisbulNafsh.png'),
            descriptionID: "SETIAP BA'DA SHOLAT SUBUH",
            descriptionEN: 'READ AFTER SHOLAT SUBUH',
        },

        {
            id: 3,
            title: 'قُرِأَ بَعْد َ الص َّ لَ َ ةِ الص ُّ بْحِ والْمَغْرِب',
            image: require('../Assets/images/Yasin.png'),
            descriptionID: "SETIAP BA'DA SHOLAT SUBUH DAN SHOLAT MAGHRIB",
            descriptionEN: 'READ AFTER SHOLAT SUBUH AND SHOLAT MAGHRIB',
        },

        {
            id: 4,
            title: 'قُرِأَ بَعْد َ الص َّ لَ َ ةِ العَصْ',
            image: require('../Assets/images/ratibulMuhammad.png'),
            descriptionID: "SETIAP BA'DA SHOLAT ASHAR",
            descriptionEN: 'READ AFTER SHOLAT ASHAR',
        },

        {
            id: 5,
            title: 'قُرِأَ بَعْد َ الص َّ لَ َ ةِ العَصْ ْ',
            image: require('../Assets/images/Alwaqiah.png'),
            descriptionID: "SETIAP BA'DA SHOLAT ASHAR",
            descriptionEN: 'READ AFTER SHOLAT ASHAR',
        },

        {
            id: 6,
            title: 'قُرِأَ قَبْلَ الص َّ لَ َ ةِ الْمَغْرِب',
            image: require('../Assets/images/Hijau.png'),
            descriptionID: 'SEBELUM SHOLAT MAGHRIB',
            descriptionEN: 'READ BEFORE SHOLAT MAGHRIB TIME',
        },

        {
            id: 7,
            title: 'قُرِأَ بَعْد َ الص َّ لَ َ ةِ الْمَغْرِب',
            image: require('../Assets/images/maulidulMuhammad.png'),
            descriptionID: "SETIAP BA'DA SHOLAT MAGHRIB",
            descriptionEN: 'READ AFTER SHOLAT MAGHRIB',
        },

        {
            id: 8,
            title: 'قُرِأَ بَعْد َ الص َّ لَ َ ةِ الْعِش َ اء',
            image: require('../Assets/images/manaqib.png'),
            descriptionID: "SETIAP BA'DA SHOLAT 'ISYA",
            descriptionEN: "READ AFTER SHOLAT 'ISYA",
        },

        {
            id: 9,
            title:'قُرِأَ بَعْد َ الص َّ لَ َ ةِ الْعِش َ اءْ',
            image: require('../Assets/images/AlMulk.png'),
            descriptionID: "SETIAP BA'DA SHOLAT 'ISYA",
            descriptionEN: "READ AFTER SHOLAT 'ISYA",
        },

        {
            id: 10,
            title:'قُرِأَ كُ ُ َّ و َقْت ٍ تحِبّك ',
            image: require('../Assets/images/DoaFathimah.png'),
            descriptionID: 'KAPAN SAJA',
            descriptionEN: 'READ WHENEVER',
        },

        {
            id: 11,
            title:'قُرِأَ كُ ُ َّ و َقْت ٍ تحِبّك ',
            image: require('../Assets/images/DoaMuzamil.png'),
            descriptionID: 'KAPAN SAJA',
            descriptionEN: 'READ WHENEVER',
        },
    ];




  return (
    <View>
        {
            dataMenu.map((item) => (
                <TouchableOpacity ref={sectionRef} onPress={() =>{ scrollToView(item.id);}} style={{
                    alignItems: 'center', flexDirection: 'row', justifyContent:'space-between',
                    marginBottom: heightPercentageToDP('2%'),
                 }}>
                     <Image
                         source={item.image}
                         style={{
                           width: widthPercentageToDP('28%'),
                           height: heightPercentageToDP('18%'),
                         }}
                         resizeMode="contain"
                       />
                         <View style={{ width: widthPercentageToDP('60%'), alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                           <Text style={{
                             fontSize:heightPercentageToDP('3%'),
                             fontWeight: 'bold',
                             color: '#000000',
                             marginBottom: heightPercentageToDP('1%'),
                           }}>{item.title}</Text>
                           <Text style={{
                             fontSize: heightPercentageToDP('2%'),
                             fontWeight: 'bold',
                             color: '#000000',
                           }}>DIBACA <Text style={{color: '#008080'}} >{item.descriptionID}</Text></Text>
                           <Text style={{
                             fontSize: heightPercentageToDP('2%'),
                             fontWeight: 'bold',
                             color: '#000000',
                           }}>{item.descriptionEN}</Text>
                         </View>
                   </TouchableOpacity>
            ))
        }
    </View>

  );
};

export default CardMenu;

const styles = StyleSheet.create({});
