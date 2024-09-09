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
            <Text style={styles.arab}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>
            <Text style={styles.arab}>خُصُوصًا إِلَى كَنْجُنْ نَبِيِّ مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ ... اَلْفَاتِحَةُ</Text>
            <Text style={styles.latin}>KHUSUUSON ILAA KANJEUNG NABI MUHAMMAD SHOLLALLOHU ALAIHI WA SALLAM … ALFAATIHAH</Text>
            <Text style={styles.latin}>BACA ALFAATIHAH 1X</Text>
            <Text style={styles.arab}>
            خُصُوصًا إِلَى نَبِيِّ اللَّهِ خِضْرٍ عَلَيْهِ السَّلَامُ
            </Text>
            <Text style={styles.arab}>
            ... الْفَاتِحَةُ
            </Text>
            <Text style={styles.latin}>KHUSUUSON ILAA NABIYYULLOH HIDHIR ALAIHIS-SALAM … ALFAATIHAH</Text>
            <Text style={styles.latin}>BACA ALFAATIHAH 1X</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٢</Text>

            <Text style={styles.arab}>
            خُصُوصًا إِلَى الْمَلَائِكَةِ الْمُقَرَّبُونَ
            </Text>
            <Text style={styles.arab}>
            ... الْفَاتِحَةُ
            </Text>

            <Text style={styles.latin}>KHUSUUSHON ILAAL MALAA"IKATUL - MUQORROBUUN … ALFAATIHAH...  BACA ALFAATIHAH 1X </Text>

            <Text style={styles.arab}>
            خُصُوصًا إِلَى الشَّيْخِ الْمُرْشِدِ فَهْمِي الْمُحَمَّدِ
            </Text>
            <Text style={styles.latin}>KHUSUUSHON ILAA SYAIKH AL-MURSYD FAHMI AL-MUHAMMAD</Text>

            <Text style={styles.arab}>
            خَيْرُكُ اللهِ... الْفَاتِحَةُ
            </Text>
            <Text style={styles.latin}>KHOIRUQULLOH… ALFAATIHAH</Text>
            <Text style={styles.latin}>BACA ALFAATIHAH 1X</Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٣</Text>

            <Text style={styles.arab}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمَٰنِ الرَّحِيمِ</Text>
            <Text style={styles.latin}>ALHAMDULILLAAHIROBBIL'AALAMIIN ۞ ARROHMAANIR-ROHIIM ۞</Text>

            <Text style={styles.arab}>مَالِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</Text>
            <Text style={styles.latin}>MAALIKIYAUMIDDIIN ۞IYYAAKA NA'BUDU WA IYYA KANASTA'IIN ۞</Text>

            <Text style={styles.arab}>اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞</Text>
            <Text style={styles.latin}>IHDINAS-SHIROOTOL MUSTAQIIM ۞</Text>

            <Text style={styles.arab}>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ</Text>
            <Text style={styles.latin}>SHIROOTOL-LADZIINA AN 'AMTA ALAIHIM</Text>

            <Text style={styles.arab}>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ</Text>
            <Text style={styles.latin}>SHIROOTOL-LADZIINA AN 'AMTA ALAIHIM</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٤</Text>

            <Text style={styles.arab}>غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</Text>
            <Text style={styles.latin}>GHOIRIL MAGHDHUUBI 'ALAIHIM WALAD-DHHOLLIIIIN</Text>

            <Text style={styles.arab}>آمِينَ</Text>
            <Text style={styles.latin}>AAMIIN</Text>

            <Text style={styles.latin}>۞۞۞۞۞</Text>

            <Text style={styles.latin}>۞۞۞۞</Text>

            <Text style={styles.latin}>۞</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥</Text>

            <Text style={styles.latin}>۞۞۞۞</Text>

            <Text style={styles.arab}>أَسْتَغْفِرُ اللهَ الْعَظِيمَ ١٠١ كالٰ</Text>
            <Text style={styles.latin}>ASTAGHFIRULLOHAL 'ADZHIIM 101X</Text>

            <Text style={styles.arab}> اَللّٰــهُمَّ ص َ ل ِّ عَلَّ ٰ مُحَمَّد و َعَلَّ ٰ اٰل ِ س َ يِّدِنَ َ مُحَمَّد ١٠٠ كالٰ</Text>
            <Text style={styles.latin}>ALLOHUMMA SHOLLI 'ALAA MUHAMMAD WA 'ALAA AALI SAYYIDINAA MUHAMMAD 100X</Text>

            <Text style={styles.latin}>DIBACA SETIAP BA'DA SHOLAT FARDHU</Text>

            <Text style={styles.latin}>۞۞۞۞</Text>
            <Text style={styles.latin}>TIDAK TERBATAS JUMLAH</Text>
            <Text style={styles.latin}>۞۞۞</Text>

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
        fontSize: heightPercentageToDP('2%'),
        fontWeight: 'bold',
        marginBottom: heightPercentageToDP('4%'),
        alignSelf: 'center',
        fontFamily: 'sans-serif-bold',
        textAlign:'center',
        letterSpacing: 1.5,
    },
});
