import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const RatibulMuhammad = () => {
  return (
    <View style={{flex:1}}>
    <View style={{
           alignItems: 'center', justifyContent: 'center',
       }}>
           <Image
               source={require('../Assets/images/ratibulMuhammad.png')}
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
            <Text style={styles.arab}>٢١</Text>

            <Text style={styles.arab}>
            رَاتِبُ ٱلْمُحَمَّدِ
            </Text>

            <Text style={styles.arab}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>إِلَىٰ حَضْرَةِ ٱلنَّبِيِّ ٱلْمُصْطَفَىٰ صَلَّى ٱللَّهُ عَلَيْهِ </Text>
            <Text style={styles.latin}>ILAA HADHROTIN-NABIYYIL-MUSTHOFAA SHOLLALLOHU 'ALAIHI</Text>

            <Text style={styles.arab}>وَسَلَّمَ وَآلِهِ وَأَزْوَاجِهِ وَأَوْلَادِهِ وَذُرِّيَّتِهِ .. الفَاتِحَة</Text>
            <Text style={styles.latin}>WA SALLAM, WA AALIHI, WA AZWAAJIHI, WA AULAADIHI, WA DZURRIYATIHI … ALFAATIHAH</Text>
            <Text style={styles.latin}>( BACA SURAT ALFATIHAH 1 KALI )</Text>

            <Text style={styles.arab}>ثُمَّ إِلَىٰ حَضْرَةِ إِخْوَانِهِ مِنَ ٱلْأَنْبِيَآءِ وَٱلْمُرْسَلِينَ</Text>
            <Text style={styles.latin}>TSUMMA ILAA HADHROTI IKHWAANIHI, MINAL AMBIYAA'I WAL MURSALIIN</Text>

            <Text style={styles.arab}>وَٱلْأَوْلِيَاءِ وَٱلشُّهَدَاءِ وَالصَّالِحِينَ وَالصَّحَابَةِ</Text>
            <Text style={styles.latin}>WAL AWLIYAAI WAS-YUHADAA'IWAS-SHOOLIHIIN WAS-SHOHAABATI</Text>



        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٢</Text>

            <Text style={styles.arab}>
            وَٱلتَّابِعِينَ وَٱلْعُلَمَاءَ وَٱلْعَامِلِينَ وَٱلْمُصَنِّفِينَ
            </Text>
            <Text style={styles.latin}>WAT-TABI'IIN WAL 'ULAMAA"I WAL 'AAMILIIN WAL MUSHONNIFIINAL</Text>

            <Text style={styles.arab}>
            ٱلْمُخْلِصِينَ وَجَمِيعِ ٱلْمَلَائِكَةِ ٱلْمُقَرَّبِينَ
            </Text>
            <Text style={styles.latin}>MUKHLISHIIN WA JAMII'IL- MALAA"IKATIL MUQORROBIIN</Text>


            <Text style={styles.arab}>
             الْفَاتِحَةُ
            </Text>
            <Text style={styles.latin}>ALFAATIHAH ( BACA SURAT ALFATIHAH 1 KALI )</Text>


            <Text style={styles.arab}>
            ثُمَّ إِلَىٰ جَمِيعِ أَهْلِ ٱلْقُبُورِ مِنَ ٱلْمُسْلِمِينَ
            </Text>
            <Text style={styles.latin}>TSUMMA ILAA JAMII'I AHLIL QUBUR MINAL MUSLIMIINA</Text>


            <Text style={styles.arab}>
             وَٱلْمُسْلِمَاتِ وَٱلْمُؤْمِنِينَ وَٱلْمُؤْمِنَاتِ مِنْ مَشَارِقِ
            </Text>
            <Text style={styles.latin}>
            WAL MUSLIMAAT WAL MU"MINIINA WAL MU"MINAAT MIN MASYAARIQIL
            </Text>


            <Text style={styles.arab}>
            ٱلْأَرْضِ إِلَىٰ مَغَارِبِهَا وَبَرِّيِّهَا وَبَحْرِهَا خُصُوصًا
            </Text>
            <Text style={styles.latin}>
            ARDHI ILAA MAGHOORIBIHA BARRIHA WA BAHRIHAA KHUSUUSHON
            </Text>



        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٣</Text>

            <Text style={styles.arab}>
            إِلَىٰ آبَائِنَا وَأُمَّاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا وَمَشَايِخِنَا
            </Text>
            <Text style={styles.latin}>
            ILAA AABAA"INA, WA UMMAHAATINA, WA AJDAADINA, WA JADDAATINA, WA MASYAAYIKHINAA
            </Text>


            <Text style={styles.arab}>
            وَمَشَايِخِنَا وَمَن اجْتَمَعْنَا بِهِمْ هُنَا بِسَبَبِهِ
            </Text>
            <Text style={styles.latin}>
            WA MASYAAYIKH MASYAAYIKHINAA, WA LIMANIJTAMA'NAA HAAHUNA BISABABIHI
            </Text>

            <Text style={styles.arab}>
            وَخُصُوصًا شَيْخًا مُرْشِدًا فَهْمِيًّا ٱلْمُحَمَّدِ
            </Text>
            <Text style={styles.latin}>
            WA KHUSUSHON SYAIKH AL-MURSYID FAHMI ALMUHAMMAD
            </Text>


            <Text style={styles.arab}>
            خَيْرُكُ ٱللَّهِ وَأُصُولِهِ وَفُرُوعِهِ أَنَّ ٱللَّهَ يُعْلِي
            </Text>
            <Text style={styles.latin}>
            KHOIRUQULLOH, WA USHUULIHI WA FURUU'IHI, ANNALLOHA YU'LII
            </Text>

            <Text style={styles.arab}>
            دَرَجَاتِهِ فِي الْجَنَّةِ وَأَنْ يُّعِد َ عَلَيْنَا مِنْ بَرَكَاتِهِ
            </Text>
            <Text style={styles.latin}>
            DAROJAATIHI FIL JANNAH, WA AYYU'IDA 'ALAINA MIM BAROKAATIHI
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٤</Text>
            <Text style={styles.arab}>
              وَأَسْرَارِهِ فِي الدُّنْيَا وَالآخِرَةِ شَيْءٌ لِلَّهِ لَهُمُ..
            </Text>
            <Text style={styles.latin}>
            WA ASRORIHI FID-DUN'YA WAL AKHIROH SYAI"ULL-LILLAHI LAHUM
            </Text>

            <Text style={styles.arab}>
             الْفَاتِحَةُ...
            </Text>
            <Text style={styles.latin}>ALFAATIHAH ( BACA SURAT ALFATIHAH 1 KALI )</Text>
            <Text style={styles.latin}>۞۞۞۞</Text>
            <Text style={styles.latin}>۞۞۞</Text>
            <Text style={styles.latin}>۞۞</Text>
            <Text style={styles.latin}>۞</Text>
         </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٥</Text>

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

            <Text style={styles.arab}>غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</Text>
            <Text style={styles.latin}>GHOIRIL MAGHDHUUBI 'ALAIHIM WALAD-DHHOLLIIIIN</Text>

            <Text style={styles.arab}>آمِينَ</Text>
            <Text style={styles.latin}>AAMIIN</Text>

        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٦</Text>
            <Text style={styles.arab}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ</Text>
            <Text style={styles.latin}>ALLOHU LAA ILAAHA ILLA HUWAL-HAYYUL QOYYUM LAA TA"KHUDZUHU SINATUW- WA LAA NAUM</Text>

            <Text style={styles.arab}>لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ</Text>
            <Text style={styles.latin}>LAHUU MAA FIS-SAMAAWAATI WA MAA FIL ARDHI</Text>

            <Text style={styles.arab}>
            مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۗ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۗ
            </Text>
            <Text style={styles.latin}>MANDZAL LADZII YASHFA'UU ' INDAHUU ILLAA BI IDZNIH, 'YA'LAMU MAA BAINA AIDIIHIM 'WA MAA KHOLFAHUM</Text>

            <Text style={styles.arab}>
            وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ
            </Text>
            <Text style={styles.latin}>WA LAA YUHIITHUNA BI SYAIM-MIN 'ILMIHII ILLA BI MAA SYAA" ,</Text>

            <Text style={styles.arab}>
            وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۗ وَلَا يَئُودُهُ حِفْظُهُمَا ۗ وَهُوَ الْعَلِيُّ الْعَظِيمُ
            </Text>
            <Text style={styles.latin}>
            WA SI'A KURSIYYUHUS- SAMAAWAATI WAL ARDH WA LAA YA"UDUHU HIFDZUHUMAA WA HUWAL 'ALIYYUL 'ADZHIIM
            </Text>
            <Text style={styles.latin}>۞۞۞</Text>


        </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٧</Text>

            <Text style={styles.arab}>
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ
            </Text>
            <Text style={styles.latin}>
            LAA ILAHA ILLALLOHU WAHDAHU LAA SYARIIKALAH, LAHUL MULKU WA LAHUL HAMDU,
            </Text>

            <Text style={styles.arab}>
             يُحْيِي وَيُمِيتُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ   ٣ كالٰ
            </Text>
            <Text style={styles.latin}>
            YUHYI WA YUMIITU WA HUWA 'ALA KULLI SYAYI"IN QODIIR
            ( DIBACA 3 X)
            </Text>
            <Text style={styles.latin}>۞۞۞</Text>

            <Text style={styles.arab}>
            اللهمّ أنتَ رَبِّي لَا إِلَهَ إِلَّا أَنتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA ANTA ROBBI, LAA ILAAHA ILLA ANTA,KHOLAQTANI, WA ANAA 'ABDUKA,
            </Text>

            <Text style={styles.arab}>
            وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُأَعُوذُ بِكَ
            </Text>
            <Text style={styles.latin}>
            WA ANAA 'ALA 'AHDIKA, WAWA'DIKA MASTATHO'TU, A'UDZUBIKA
            </Text>

            <Text style={styles.arab}>
            مِن شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ
            </Text>
            <Text style={styles.latin}>
            MIN SYARRI MAA SHONA'TU ABUU"U LAKA BINI'MATIKA ALAYYA WA ABUU"U
            </Text>

            <Text style={styles.arab}>
             أَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنتَ  ٣ كالٰ
            </Text>
            <Text style={styles.latin}>
            BI DZANBI, FAGHFIRLII FA INNAHU LAA YAGHFIRUZ-'DZUNUUBA ILLAA ANTA ( DIBACA 3 X)
            </Text>
            <Text style={styles.latin}>۞۞۞</Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٨</Text>
            <Text style={styles.arab}>
            سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ
            </Text>

            <Text style={styles.arab}>
            ۞٣ كالٰ۞
            </Text>

            <Text style={styles.latin}>
            SUBHAANALLOH WAL HAMDULILLAH WA LAA ILAAHA ILLALLOH, WALLOHU AKBAR ( DIBACA 3 KALI )
            </Text>
            <Text style={styles.latin}>۞۞۞</Text>

            <Text style={styles.arab}>
            تَوَصَّلْنَا بِبِسْمِ اللَّهِ وَبِالْهَادِي رَسُولِ اللَّهِ وَكُلِّي
            </Text>
            <Text style={styles.latin}>
            TAWASSALNA BI BISMILLAH WA BIL HAADI ROSUULILLAH WA KULLI
            </Text>


            <Text style={styles.arab}>
            مُجَاهِدٍ لِلَّهِ بِأَهْلِ الْبَدْرِ يَا اللَّهُ
            </Text>
            <Text style={styles.latin}>
            MUJAAHIDIL LILLAH BI AHLIL BADRI YA ALLOH
            </Text>
            <Text style={styles.latin}>۞۞۞</Text>


            <Text style={styles.arab}>
            اللهم صلِّ على نور الأنوار وسرِّ الأسرار
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI 'ALAA NUURIL ANWAAR WA SIRRIL WA TIRYAQIL-
            </Text>
        </View>
    </View>
  );
};

export default RatibulMuhammad;

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
