import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const Waqiah = () => {
  return (
    <View style={{flex:1}}>
    <View style={{
           alignItems: 'center', justifyContent: 'center',
       }}>
           <Image
               source={require('../Assets/images/Alwaqiah.png')}
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

            <Text style={styles.arab}>٣٩</Text>

            <Text style={styles.arab}>
            سُوْرَةُ الْوَاقِعَةُ
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
            ALAIHI WA SALLAM … ALFAATIHAH BACA ALFAATIHAH 1X
            </Text>


            <Text style={styles.arab}>
            خُصُوْصًا إِلٰى نَبِيُّ اللّٰهْ حِضِيْرْ عَلَيْهِ الَّسلَام
            </Text>
            <Text style={styles.latin}>
            KHUSUUSON ILAA NABIYYULLOH HIDHIR ALAIHIS-SALAM
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

            <Text style={styles.arab}>٤٠</Text>

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

            <Text style={styles.arab}>٤١</Text>

            <Text style={styles.arab}>
            بِسْــمِ اللهِ الرَّحْمٰــنِ الرَّحِيْـــمِ
            </Text>

            <Text style={styles.arab}>
            اِذَا وَقَعَتِ الْوَاقِعَةُۙ ۞ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ۘ ۞ خَافِضَةٌ
            </Text>

            <Text style={styles.arab}>
            رَّافِعَةٌ ۞ اِذَا رُجَّتِ الْاَرْضُ رَجًّاۙ ۞ وَّبُسَّتِ الْجِبَالُ
            </Text>

            <Text style={styles.arab}>
            بَسًّاۙ ۞ فَكَانَتْ هَبَاۤءً مُّنْۢبَثًّاۙ ۞ وَّكُنْتُمْ اَزْوَاجًا ثَلٰثَةً ۗ ۞
            </Text>

            <Text style={styles.arab}>
            فَاَصْحٰبُ الْمَيْمَنَةِ ەۙ مَآ اَصْحٰبُ الْمَيْمَنَةِ ۗ۞  وَاَصْحٰبُ
            </Text>

            <Text style={styles.arab}>
            الْمَشْـَٔمَةِ ەۙ مَآ اَصْحٰبُ الْمَشْـَٔمَةِ ۗ۞  وَالسّٰبِقُوْنَ
            </Text>


            <Text style={styles.arab}>
            السّٰبِقُوْنَۙ ۞ اُولٰۤىِٕكَ الْمُقَرَّبُوْنَۚ ۞ فِيْ جَنّٰتِ النَّعِيْمِ ۞
            </Text>

            <Text style={styles.arab}>
            ثُلَّةٌ مِّنَ الْاَوَّلِيْنَۙ ۞ وَقَلِيْلٌ مِّنَ الْاٰخِرِيْنَۗ ۞ عَلٰى سُرُرٍ
            </Text>

            <Text style={styles.arab}>
            مَّوْضُوْنَةٍۙ۞ مُّتَّكِـِٕيْنَ عَلَيْهَا مُتَقٰبِلِيْنَ۞يَطُوْفُ عَلَيْهِمْ وِلْدَانٌ
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>
                ٤٢
            </Text>
            <Text style={styles.arab}>
            مُّخَلَّدُوْنَۙ ۞ بِاَكْوَابٍ وَّاَبَارِيْقَۙ وَكَأْسٍ مِّنْ مَّعِيْنٍۙ ۞ لَّا

            يُصَدَّعُوْنَ عَنْهَا وَلَا يُنْزِفُوْنَۙ ۞ وَفَاكِهَةٍ مِّمَّا يَتَخَيَّرُوْنَۙ۞

            وَلَحْمِ طَيْرٍ مِّمَّا يَشْتَهُوْنَۗ۞ وَحُوْرٌ عِيْنٌۙ۞ كَاَمْثَالِ اللُّؤْلُؤِ

            الْمَكْنُوْنِۚ ۞ جَزَاۤءًۢ بِمَا كَانُوْا يَعْمَلُوْنَ۞ لَا يَسْمَعُوْنَ فِيْهَا

            لَغْوًا وَّلَا تَأْثِيْمًاۙ۞ اِلَّا قِيْلًا سَلٰمًا سَلٰمًا۞وَاَصْحٰبُ الْيَمِيْنِ ەۙ

            مَآ اَصْحٰبُ الْيَمِيْنِۗ۞فِيْ سِدْرٍ مَّخْضُوْدٍۙ۞ وَّطَلْحٍ مَّنْضُوْدٍۙ

            وَّظِلٍّ مَّمْدُوْدٍۙ ۞ وَّمَاۤءٍ مَّسْكُوْبٍۙ ۞ وَّفَاكِهَةٍ كَثِيْرَةٍۙ ۞

            لَّا مَقْطُوْعَةٍ وَّلَا مَمْنُوْعَةٍۙ ۞ وَّفُرُشٍ مَّرْفُوْعَةٍۗ ۞ اِنَّآ

            اَنْشَأْنٰهُنَّ اِنْشَاۤءًۙ ۞ فَجَعَلْنٰهُنَّ اَبْكَارًاۙ ۞ عُرُبًا اَتْرَابًاۙ۞

            </Text>


        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>
            ٤٣
            </Text>
            <Text style={styles.arab}>
            لِّاَصْحٰبِ الْيَمِيْنِۗ ࣖ ۞ثُلَّةٌ مِّنَ الْاَوَّلِيْنَۙ۞وَثُلَّةٌ مِّنَ الْاٰخِرِيْنَۗ
            وَاَصْحٰبُ الشِّمَالِ ەۙ مَآ اَصْحٰبُ الشِّمَالِۗ۞فِيْ سَمُوْمٍ وَّحَمِيْمٍۙ۞
            وَّظِلٍّ مِّنْ يَّحْمُوْمٍۙ ۞ لَّا بَارِدٍ وَّلَا كَرِيْمٍ۞اِنَّهُمْ كَانُوْا قَبْلَ
            ذٰلِكَ مُتْرَفِيْنَۚ ۞ وَكَانُوْا يُصِرُّوْنَ عَلَى الْحِنْثِ الْعَظِيْمِۚ ۞
            وَكَانُوْا يَقُوْلُوْنَ ەۙ  اَىِٕذَا مِتْنَا وَكُنَّا تُرَابًا وَّعِظَامًا ءَاِنَّا
            لَمَبْعُوْثُوْنَۙ ۞ اَوَاٰبَاۤؤُنَا الْاَوَّلُوْنَ ۞ قُلْ اِنَّ الْاَوَّلِيْنَ
            وَالْاٰخِرِيْنَۙ ۞ لَمَجْمُوْعُوْنَۙ اِلٰى مِيْقَاتِ يَوْمٍ مَّعْلُوْمٍ ۞
            ثُمَّ اِنَّكُمْ اَيُّهَا الضَّاۤ لُّوْنَ الْمُكَذِّبُوْنَۙ ۞ لَاٰكِلُوْنَ مِنْ شَجَرٍ
            مِّنْ زَقُّوْمٍۙ ۞ فَمَالِـُٔوْنَ مِنْهَا الْبُطُوْنَۚ ۞ فَشٰرِبُوْنَ عَلَيْهِ
            </Text>

     </View>

     <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>
            ٤٤
            </Text>
            <Text style={styles.arab}>
            مِنَ الْحَمِيْمِۚ ۞ فَشٰرِبُوْنَ شُرْبَ الْهِيْمِۗ ۞ هٰذَا نُزُلُهُمْ يَوْمَ
            الدِّيْنِۗ ۞ نَحْنُ خَلَقْنٰكُمْ فَلَوْلَا تُصَدِّقُوْنَ ۞ اَفَرَءَيْتُمْ مَّا
            تُمْنُوْنَۗ۞ ءَاَنْتُمْ تَخْلُقُوْنَهٗٓ اَمْ نَحْنُ الْخٰلِقُوْنَ۞ نَحْنُ قَدَّرْنَا
            بَيْنَكُمُ الْمَوْتَ وَمَا نَحْنُ بِمَسْبُوْقِيْنَۙ ۞ عَلٰٓى اَنْ نُّبَدِّلَ
            اَمْثَالَكُمْ وَنُنْشِئَكُمْ فِيْ مَا لَا تَعْلَمُوْنَ۞ وَلَقَدْ عَلِمْتُمُ النَّشْاَةَ
            الْاُوْلٰى فَلَوْلَا تَذَكَّرُوْنَ ۞ اَفَرَءَيْتُمْ مَّا تَحْرُثُوْنَۗ ۞ ءَاَنْتُمْ
            تَزْرَعُوْنَهٗٓ اَمْ نَحْنُ الزّٰرِعُوْنَ۞ لَوْ نَشَاۤءُ لَجَعَلْنٰهُ حُطَامًا
            فَظَلْتُمْ تَفَكَّهُوْنَۙ۞ اِنَّا لَمُغْرَمُوْنَۙ۞ بَلْ نَحْنُ مَحْرُوْمُوْنَ۞
            اَفَرَءَيْتُمُ الْمَاۤءَ الَّذِيْ تَشْرَبُوْنَۗ۞ ءَاَنْتُمْ اَنْزَلْتُمُوْهُ مِنَ الْمُزْنِ
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>
            ٤٥
            </Text>

            <Text style={styles.arab}>
            اَمْ نَحْنُ الْمُنْزِلُوْنَ۞ لَوْ نَشَاۤءُ جَعَلْنٰهُ اُجَاجًا فَلَوْلَا تَشْكُرُوْنَ۞
            اَفَرَءَيْتُمُ النَّارَ الَّتِيْ تُوْرُوْنَۗ۞ءَاَنْتُمْ اَنْشَأْتُمْ شَجَرَتَهَآ اَمْ نَحْنُ
            الْمُنْشِـُٔوْنَ۞ نَحْنُ جَعَلْنٰهَا تَذْكِرَةً وَّمَتَاعًا لِّلْمُقْوِيْنَۚ ۞
            فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيْمِ ࣖ ۞ فَلَآ اُقْسِمُ بِمَوٰقِعِ النُّجُوْمِ۞
            وَاِنَّهٗ لَقَسَمٌ لَّوْ تَعْلَمُوْنَ عَظِيْمٌۙ ۞ اِنَّهٗ لَقُرْاٰنٌ كَرِيْمٌۙ۞ فِيْ
            كِتٰبٍ مَّكْنُوْنٍۙ ۞ لَّا يَمَسُّهٗٓ اِلَّا الْمُطَهَّرُوْنَۙ ۞ تَنْزِيْلٌ مِّنْ
            رَّبِّ الْعٰلَمِيْنَ ۞ اَفَبِهٰذَا الْحَدِيْثِ اَنْتُمْ مُّدْهِنُوْنَ ۞
            وَتَجْعَلُوْنَ رِزْقَكُمْ اَنَّكُمْ تُكَذِّبُوْنَ ۞ فَلَوْلَآ اِذَا بَلَغَتِ
            الْحُلْقُوْمَۙ ۞ وَاَنْتُمْ حِيْنَىِٕذٍ تَنْظُرُوْنَۙ ۞ وَنَحْنُ اَقْرَبُ اِلَيْهِ
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>
            ٤٦
            </Text>

            <Text style={styles.arab}>
            مِنْكُمْ وَلٰكِنْ لَّا تُبْصِرُوْنَ ۞ فَلَوْلَآ اِنْ كُنْتُمْ غَيْرَ مَدِيْنِيْنَۙ ۞
            تَرْجِعُوْنَهَآ اِنْ كُنْتُمْ صٰدِقِيْنَ۞ فَاَمَّآ اِنْ كَانَ مِنَ الْمُقَرَّبِيْنَۙ
            فَرَوْحٌ وَّرَيْحَانٌ ەۙ وَّجَنَّتُ نَعِيْمٍ۞وَاَمَّآ اِنْ كَانَ مِنْ اَصْحٰبِ
            الْيَمِيْنِۙ۞ فَسَلٰمٌ لَّكَ مِنْ اَصْحٰبِ الْيَمِيْنِۗ ۞ وَاَمَّآ اِنْ كَانَ
            مِنَ الْمُكَذِّبِيْنَ الضَّاۤلِّيْنَۙ ۞ فَنُزُلٌ مِّنْ حَمِيْمٍۙ ۞ وَّتَصْلِيَةُ
            جَحِيْمٍ ۞ اِنَّ هٰذَا لَهُوَ حَقُّ الْيَقِيْنِۚ ۞
            فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيْمِ ۞
            </Text>
            <Text style={styles.arab}>۞۞۞۞</Text>

            <Text style={styles.arab}>
            دىباچا تىڳا كالى
            </Text>
            <Text style={styles.latin}>
            Di Baca 3 Kali
            </Text>
        </View>

    </View>
  );
};

export default Waqiah;

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
