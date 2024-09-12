import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const WiridulSyifa = () => {
  return (
    <View style={{flex:1}}>
        <View style={{
           alignItems: 'center', justifyContent: 'center',
       }}>
           <Image
               source={require('../Assets/images/Hijau.png')}
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

            <Text style={styles.arab}>٤٧</Text>

            <Text style={styles.arab}>
            وِرِدُ الشِّفَاءٍ
            </Text>
            <Text style={styles.latin}>
            (DIBACA SEBELUM MAGHRIB)
            </Text>

            <Text style={styles.arab}>
            بِسْــمِ اللهِ الرَّحْمٰــنِ الرَّحِيْـــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            خُصُوْصًا إِلٰى كَنْجٓڠْ نَبِى مُحَمَّدْ صَلَّى اللّٰهُ
            </Text>
            <Text style={styles.latin}>
            KHUSUUSON ILAA KANJEUNG NABI MUHAMMAD SHOLLALLOHU
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِ وَسَلَّمَ ….. اَلفَاتِحَةْ..
            </Text>
            <Text style={styles.latin}>
            'ALAIHI WA SALLAM … ALFAATIHAH  BACA ALFAATIHAH 1X
            </Text>


            <Text style={styles.arab}>
            خُصُوْصًا إِلٰى نَبِيُّ اللّٰهْ حِضِيْرْ عَلَيْهِ الَّسلَام
            </Text>
            <Text style={styles.latin}>
            KHUSUUSON ILAA NABIYYULLOH HIDHIR  ALAIHIS-SALAM
            </Text>

            <Text style={styles.arab}>
            ….. اَلفَاتِحَةْ..
            </Text>
            <Text style={styles.latin}>
            ALFAATIHAH…. BACA ALFAATIHAH 1X
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٤٨</Text>

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
            <Text style={styles.latin}>
            KHUSUUSHON ILAA SYAIKH AL-MURSYD FAHMI AL-MUHAMMAD
            </Text>

            <Text style={styles.arab}>
            خَيْرُقُ اللّٰهِ … اَلْفَاتِحَةْ  …
            </Text>
            <Text style={styles.latin}>
            KHOIRUQULLOH… ALFAATIHAH BACA ALFAATIHAH 1X
            </Text>
            <Text style={styles.arab}>۞۞۞۞</Text>
        </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٤٩</Text>

            <Text style={styles.arab}>
            بِسْـمِ اللهِ الرَّحْمٰـنِ الرَّحِيْــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANIR-ROHIIM
            </Text>


            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ۞الرَّحْمٰنِ الرَّحِيمِ۞
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAAHIROBBIL'AALAMIIN  ۞   ARROHMAANIR-ROHIIM  ۞
            </Text>

            <Text style={styles.arab}>
            ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
            </Text>
            <Text style={styles.latin}>
            MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA
            </Text>


            <Text style={styles.arab}>
            نَسْتَعِينُ ۞ اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞
            </Text>
            <Text style={styles.latin}>
            KANASTA'IIN   ۞  IHDINAS-SHIROOTOL MUSTAQIIM   ۞
            </Text>


            <Text style={styles.arab}>
            صِرَاطَ الَّذِينَ اَنْعَمْتَ عَلَيْهِمْۖ
            </Text>
            <Text style={styles.latin}>
            SHIROOTOL-LADZIINA AN 'AMTA  ALAIHIM
            </Text>


            <Text style={styles.arab}>
            غَيْرِالْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ
            </Text>
            <Text style={styles.latin}>
            GHOIRIL MAGHDHUUBI  'ALAIHIM WALAD-DHHOLLIIIIN
            </Text>


            <Text style={styles.arab}>
            اٰمِينْ
            </Text>
            <Text style={styles.latin}>
            AAMIINN
            </Text>

        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٠</Text>

            <Text style={styles.arab}>
            بِسْــمِ اللهِ الرَّحْمٰــنِ الرَّحِيْـــمِ ….(٧كالى)
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANIR-ROHIIM (DIBACA 7 KALI)
            </Text>

            <Text style={styles.latin}>
            ۞ KEMUDIAN BACA AYAT KURSI  ۞
            </Text>

            <Text style={styles.arab}>
            اللهُ لٓا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا
            </Text>
            <Text style={styles.latin}>
            ALLOHU LAA ILAAHA ILLA HUWAL-HAYYUL QOYYUM  LAA TA"KHUDZUHU SINATUW- WA LAA
            </Text>

            <Text style={styles.arab}>
            نَوْم لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا
            </Text>
            <Text style={styles.latin}>
            NAUM, LAHUU MAA FIS-SAMAAWAATI WA  MAA FIL ARDHI, MAN DZAL-
            </Text>


            <Text style={styles.arab}>
            الَّذِي يَشْفَعُ عِنْدَهُٓ إِلَّا بِإِذْنِهِ, يَعْلَمُ مَا بَيْنَ أَيْدِيْهِمْ وَمَا
            </Text>
            <Text style={styles.latin}>
            LADZII YASHFA'UU ' INDAHUU ILLAA BI IDZNIH, YA'LAMU MAA BAINA AIDIIHIM  'WA MAA
            </Text>


            <Text style={styles.arab}>
            خَلْفَهُمْ وَلَايُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شٓاءَ وَسِعَ
            </Text>
            <Text style={styles.latin}>
            KHOLFAHUM WA LAA YUHIITHUNA BI SYAIM-MIN 'ILMIHII ILLA BI MAA SYAA" , WA SI'A
            </Text>


            <Text style={styles.arab}>
            كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُوْدُهُ حِفْظُهُمَا
            </Text>
            <Text style={styles.latin}>
            KURSIYYUHUS- SAMAAWAATI WAL ARDH WA LAA YA"UDUHU HIFDZUHUMAA
            </Text>


            <Text style={styles.arab}>
            وَهُوَ الْعَلِيُّ الْعَظِيمُ ….(٧كالى)
            </Text>
            <Text style={styles.latin}>
            WA HUWAL 'ALIYYUL 'ADZHIIM (DIBACA 7 KALI)
            </Text>

            <Text style={styles.arab}>۞۞۞۞</Text>

        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥١</Text>


            <Text style={styles.arab}>
            بِسْــــمِ  اللهِ الرَّحْمٰــــنِ الرَّحِيْـــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            قُلْ هُوَ اللهُ أَحَدٌ, اللهُ الصَّمَدُ, لَمْ يَلِدْ وَلَمْ يُولَدْ
            </Text>
            <Text style={styles.latin}>
            QUL HUALLOHU AHAD  ۞ ALLOHUS-SHOMAD  ۞ LAM YALID  WA LAM YUULAD
            </Text>

            <Text style={styles.arab}>
            وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ... ۵ كالی
            </Text>
            <Text style={styles.latin}>
            WA LAM YAKUL-LAHUU KUFUAN AHAD۞ ( DIBACA LIMA KALI )
            </Text>
            <Text style={styles.arab}>۞۞۞</Text>

            <Text style={styles.arab}>
            بِسْــــمِ  اللهِ الرَّحْمٰــــنِ الرَّحِيْـــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۞ مِنْ شَرِّ مَا خَلَقَ۞
            </Text>
            <Text style={styles.latin}>
            QUL A'UUDZU BI ROBBIL FALAQ  ۞  MIN SYARRI MAA KHOLAQ  ۞
            </Text>

            <Text style={styles.arab}>
            وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۞ وَمِنْ شَرِّ النَّفَّاثَاتِ
            </Text>
            <Text style={styles.latin}>
            WA MIN SYARRI GHOOSIQIN IDZA WAQOB  ۞ WA MIN SYARRIN-NAFFATSAATIFIL 'UQOD  ۞
            </Text>

            <Text style={styles.arab}>
            فِي الْعُقَدِ ۞ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ۞
            </Text>
            <Text style={styles.latin}>
            WA MIN SYARRI HAASIDIN IDZA HASAD
            </Text>

            <Text style={styles.arab}>
            (۵كالى)
            </Text>
            <Text style={styles.latin}>
            ( DIBACA LIMA KALI )
            </Text>

            <Text style={styles.arab}>۞</Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٢</Text>

            <Text style={styles.arab}>
            بِسْــــمِ  اللهِ الرَّحْمٰـــنِ الرَّحِيــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            قُلْ أَعُوذُ بِرَبِّ النَّاسِ, مَلِكِ النَّاسِ
            </Text>
            <Text style={styles.latin}>
            QUL A'UUDZU BI ROBBIN-NAAS ۞ MALIKIN-NAAS  ۞
            </Text>


            <Text style={styles.arab}>
            إِلٰهِ النَّاسِ ۞ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۞
            </Text>
            <Text style={styles.latin}>
            ILAAHIN-NAASS ۞MIN SYARRIL-WASWAASIL KHONNAASS ۞
            </Text>


            <Text style={styles.arab}>
            الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLADZII YUWAS WISU FIISHUDUURIN-NAASS ۞
            </Text>

            <Text style={styles.arab}>
            مِنَ الْجِنَّةِ وَالنَّاسِ ... ۵ كالی
            </Text>
            <Text style={styles.latin}>
            MINAL JINNATI WAN-NASS ۞   ( DIBACA LIMA KALI )
            </Text>

            <Text style={styles.arab}>۞۞۞۞</Text>
            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞</Text>
        </View>


    </View>
  );
};

export default WiridulSyifa;

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
