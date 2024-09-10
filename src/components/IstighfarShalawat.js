import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const IstighfarShalawat = () => {
  return (
    <View style={{flex:1}}>
        <View style={{
            alignItems: 'center', justifyContent: 'center',
        }}>
            <Image
                source={require('../Assets/images/Putih.png')}
                style={{
                width: widthPercentageToDP('100%'),
                height: heightPercentageToDP('80%'),
                }}
                resizeMode="contain"
            />
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>١</Text>

            <Text style={styles.arab}> بِسْــمِ اللهِ الرَّحْمٰــنِ الرَّحِيْـــمِ </Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>خُصُوْصًا إِلٰى كَنْجٓڠْ نَبِى مُحَمَّدْ صَلَّى اللّٰهُ</Text>
            <Text style={styles.latin}>KHUSUUSON ILAA KANJEUNG NABI MUHAMMAD SHOLLALLOHU</Text>

            <Text style={styles.arab}>عَلَيْهِ وَسَلَّمَ ….. اَلفَاتِحَةْ..</Text>
            <Text style={styles.latin}>'ALAIHI WA SALLAM … ALFAATIHAH</Text>
            <Text style={styles.latin}>BACA ALFAATIHAH 1X</Text>

            <Text style={styles.arab}>خُصُوْصًا إِلٰى نَبِيُّ اللّٰهْ حِضِيْرْ عَلَيْهِ الَّسلَام</Text>
            <Text style={styles.latin}>KHUSUUSON ILAA NABIYYULLOH HIDHIR ALAIHIS-SALAM</Text>

            <Text style={styles.arab}>….. اَلفَاتِحَةْ..</Text>
            <Text style={styles.latin}>ALFAATIHAH…. BACA ALFAATIHAH 1X</Text>


        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٢</Text>

            <Text style={styles.arab}>
            خُصُوْصًا إِلٰى اْلمَلآئِكَةُ  اْلمُقَرَّبُيْنْ
            </Text>
            <Text style={styles.latin}>
            KHUSUUSHON ILAAL  MALAA"IKATUL - MUQORROBUUN
            </Text>

            <Text style={styles.arab}>
            ….. اَلفَاتِحَةْ..
            </Text>

            <Text style={styles.latin}>
                ALFAATIHAH…  BACA ALFAATIHAH 1X
            </Text>


            <Text style={styles.arab}>
            خُصُوْصًا إِلٰى شَيْخْ اَلْمُرْشِدْ فَهْمِيْ اَلْمُحَمَّدْ
            </Text>
            <Text style={styles.latin}>KHUSUUSHON ILAA SYAIKH AL-MURSYD FAHMI AL-MUHAMMAD</Text>

            <Text style={styles.arab}>
            خَيْرُقُ اللّٰهِ … اَلْفَاتِحَةْ  …
            </Text>
            <Text style={styles.latin}>KHOIRUQULLOH… ALFAATIHAH</Text>
            <Text style={styles.latin}>BACA ALFAATIHAH 1X</Text>

            <Text style={styles.latin}>۞۞۞۞</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٣</Text>

            <Text style={styles.arab}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ۞الرَّحْمٰنِ الرَّحِيمِ۞</Text>
            <Text style={styles.latin}>ALHAMDULILLAAHIROBBIL'AALAMIIN ۞ ARROHMAANIR-ROHIIM ۞</Text>

            <Text style={styles.arab}>ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ</Text>
            <Text style={styles.latin}>MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA</Text>

            <Text style={styles.arab}>نَسْتَعِينُ ۞ اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞</Text>
            <Text style={styles.latin}>KANASTA'IIN ۞ IHDINAS-SHIROOTOL MUSTAQIIM ۞</Text>

            <Text style={styles.arab}>صِرَاطَ الَّذِينَ اَنْعَمْتَ عَلَيْهِمْۖ</Text>
            <Text style={styles.latin}>SHIROOTOL-LADZIINA AN 'AMTA  ALAIHIM</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٤</Text>

            <Text style={styles.arab}>غَيْرِالْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ</Text>
            <Text style={styles.latin}>GHOIRIL MAGHDHUUBI 'ALAIHIM WALAD-DHHOLLIIIIN</Text>

            <Text style={styles.arab}>اٰمِينْ</Text>
            <Text style={styles.latin}>AAMIIN</Text>

            <Text style={styles.arab}>۞۞۞۞۞</Text>

            <Text style={styles.arab}>۞۞۞۞</Text>

            <Text style={styles.arab}>۞</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥</Text>

            <Text style={styles.arab}>۞۞۞۞</Text>

            <Text style={styles.arab}>اَسْتَغْفِرُ اللهَ الْعَظِيْمَ   ١٠١ كالى</Text>
            <Text style={styles.latin}>ASTAGHFIRULLOHAL 'ADZHIIM 101X</Text>

            <Text style={styles.arab}>اَللّٰــهُمَّ صَلِّ عَلٰى مُحَمَّدْ</Text>
            <Text style={styles.latin}>ALLOHUMMA SHOLLI 'ALAA MUHAMMAD</Text>

            <Text style={styles.arab}> وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدْ       ١٠٠ كالى</Text>
            <Text style={styles.latin}>WA 'ALAA AALI SAYYIDINAA MUHAMMAD   100X</Text>

            <Text style={styles.latin}>DIBACA SETIAP BA'DA SHOLAT FARDHU</Text>

            <Text style={styles.arab}>۞۞۞۞</Text>
            <Text style={styles.latin}>TIDAK TERBATAS JUMLAH</Text>
            <Text style={styles.arab}>۞۞۞</Text>

        </View>
    </View>
  );
};

export default IstighfarShalawat;

const styles = StyleSheet.create({

    arab:{
        color: '#000000',
        fontSize: heightPercentageToDP('4%'),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: heightPercentageToDP('2%'),
        fontFamily: 'UthmanTaha',
    },

    latin:{
        color: '#000000',
        fontSize: heightPercentageToDP('1.7%'),
        fontWeight: 'bold',
        marginBottom: heightPercentageToDP('4%'),
        alignSelf: 'center',
        fontFamily: 'sans-serif-bold',
        textAlign:'center',
        letterSpacing: 1.5,
    },
});
