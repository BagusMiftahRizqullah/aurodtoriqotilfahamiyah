import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const Yasin = () => {

  return (
    <View style={{flex:1}}>
     <View style={{
            alignItems: 'center', justifyContent: 'center',
        }}>
            <Image
                source={require('../Assets/images/Yasin.png')}
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
            <Text style={styles.arab}>۹</Text>
            <Text style={styles.arab}>سُوْرَةُ يٰسٓ</Text>
            <Text style={styles.arab}>بِسْــمِ اللهِ الرَّحْمٰــنِ الرَّحِيْـــمِ</Text>
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
            <Text style={styles.arab}>۱۰</Text>
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
        </View>

            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>
                <Text style={styles.arab}>١١</Text>
                <Text style={styles.arab}>بِسْــمِ اللهِ الرَّحْمٰــنِ الرَّحِيْـــمِ</Text>
                <Text style={[styles.arab,{
                     textAlign:'center',
                }]}>
                     يٰسۤ ۚ۞ وَالْقُرْاٰنِ الْحَكِيْمِۙ ۞ اِنَّكَ لَمِنَ الْمُرْسَلِيْنَۙ ۞
                     عَلٰى صِرَاطٍ مُّسْتَقِيْمٍۗ ۞ تَنْزِيْلَ الْعَزِيْزِ الرَّحِيْمِ ۞ لِتُنْذِرَ
                     قَوْمًا مَّآ اُنْذِرَ اٰبَاۤؤُهُمْ فَهُمْ غٰفِلُوْنَ ۞ لَقَدْ حَقَّ الْقَوْلُ
                     عَلٰٓى اَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُوْنَ ۞ اِنَّا جَعَلْنَا فِيْٓ اَعْنَاقِهِمْ
                     اَغْلٰلًا فَهِيَ اِلَى الْاَذْقَانِ فَهُمْ مُّقْمَحُوْنَ ۞ وَجَعَلْنَا مِنْۢ
                     بَيْنِ اَيْدِيْهِمْ سَدًّا وَّمِنْ خَلْفِهِمْ سَدًّا فَاَغْشَيْنٰهُمْ فَهُمْ لَا
                     يُبْصِرُوْنَ ۞ وَسَوَاۤءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا
                     يُؤْمِنُوْنَ ۞ اِنَّمَا تُنْذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمٰنَ
                </Text>

            </View>

            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>
                <Text style={styles.arab}>١٢</Text>

                <Text style={[styles.arab,{
                     textAlign:'center',
                }]}>
                         بِالْغَيْبِۚ فَبَشِّرْهُ بِمَغْفِرَةٍ وَّاَجْرٍ كَرِيْمٍ۞اِنَّا نَحْنُ نُحْيِ الْمَوْتٰى
                         وَنَكْتُبُ مَا قَدَّمُوْا وَاٰثَارَهُمْۗ وَكُلَّ شَيْءٍ اَحْصَيْنٰهُ فِيْٓ اِمَامٍ
                         مُّبِيْنٍ  ۞ وَاضْرِبْ لَهُمْ مَّثَلًا اَصْحٰبَ الْقَرْيَةِۘ اِذْ جَاۤءَهَا
                         الْمُرْسَلُوْنَۚ ۞ اِذْ اَرْسَلْنَآ اِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوْهُمَا فَعَزَّزْنَا
                         بِثَالِثٍ فَقَالُوْٓا اِنَّآ اِلَيْكُمْ مُّرْسَلُوْنَ۞ قَالُوْا مَآ اَنْتُمْ اِلَّا بَشَرٌ
                         مِّثْلُنَاۙ وَمَآ اَنْزَلَ الرَّحْمٰنُ مِنْ شَيْءٍۙ اِنْ اَنْتُمْ اِلَّا تَكْذِبُوْنَ۞
                         قَالُوْا رَبُّنَا يَعْلَمُ اِنَّآ اِلَيْكُمْ لَمُرْسَلُوْنَ۞ وَمَا عَلَيْنَآ اِلَّا الْبَلٰغُ
                         الْمُبِيْنُ ۞ قَالُوْٓا اِنَّا تَطَيَّرْنَا بِكُمْۚ لَىِٕنْ لَّمْ تَنْتَهُوْا لَنَرْجُمَنَّكُمْ
                         وَلَيَمَسَّنَّكُمْ مِّنَّا عَذَابٌ اَلِيْمٌ ۞ قَالُوْا طَاۤىِٕرُكُمْ مَّعَكُمْۗ اَىِٕنْ

                </Text>

            </View>

            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>
                <Text style={styles.arab}>١٣</Text>
                <Text style={[styles.arab,{
                     textAlign:'center',
                }]}>
                         ذُكِّرْتُمْۗ بَلْ اَنْتُمْ قَوْمٌ مُّسْرِفُوْنَ۞وَجَاۤءَ مِنْ اَقْصَا الْمَدِيْنَةِ
                         رَجُلٌ يَّسْعٰى قَالَ يٰقَوْمِ اتَّبِعُوا الْمُرْسَلِيْنَۙ۞ اتَّبِعُوْا مَنْ لَّا
                         يَسْـَٔلُكُمْ اَجْرًا وَّهُمْ مُّهْتَدُوْنَ۞ وَمَا لِيَ لَآ اَعْبُدُ الَّذِيْ فَطَرَنِيْ
                         وَاِلَيْهِ تُرْجَعُوْنَ۞ءَاَتَّخِذُ مِنْ دُوْنِهٖٓ اٰلِهَةً اِنْ يُّرِدْنِ الرَّحْمٰنُ
                         بِضُرٍّ لَّا تُغْنِ عَنِّيْ شَفَاعَتُهُمْ شَيْـًٔا وَّلَا يُنْقِذُوْنِۚ۞اِنِّيْٓ اِذًا
                         لَّفِيْ ضَلٰلٍ مُّبِيْنٍ۞ اِنِّيْٓ اٰمَنْتُ بِرَبِّكُمْ فَاسْمَعُوْنِۗ ۞ قِيْلَ
                         ادْخُلِ الْجَنَّةَ ۗقَالَ يٰلَيْتَ قَوْمِيْ يَعْلَمُوْنَۙ ۞ بِمَا غَفَرَ لِيْ
                         رَبِّيْ وَجَعَلَنِيْ مِنَ الْمُكْرَمِيْنَ۞ وَمَآ اَنْزَلْنَا عَلٰى قَوْمِهٖ مِنْۢ
                         بَعْدِهٖ مِنْ جُنْدٍ مِّنَ السَّمَاۤءِ وَمَا كُنَّا مُنْزِلِيْنَ۞ اِنْ كَانَتْ

                </Text>
            </View>

            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>

            <Text style={styles.arab}>١٤</Text>
                <Text style={[styles.arab,{
                     textAlign:'center',
                }]}>
                        اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ خٰمِدُوْنَ۞ يٰحَسْرَةً عَلَى الْعِبَادِۚ
                        مَا يَأْتِيْهِمْ مِّنْ رَّسُوْلٍ اِلَّا كَانُوْا بِهٖ يَسْتَهْزِءُوْنَ۞ اَلَمْ يَرَوْا
                        كَمْ اَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُوْنِ اَنَّهُمْ اِلَيْهِمْ لَا يَرْجِعُوْنَ ۞ وَاِنْ
                        كُلٌّ لَّمَّا جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ ۞وَاٰيَةٌ لَّهُمُ الْاَرْضُ الْمَيْتَةُ ۖ
                        اَحْيَيْنٰهَا وَاَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُوْنَ۞ وَجَعَلْنَا فِيْهَا
                        جَنّٰتٍ مِّنْ نَّخِيْلٍ وَّاَعْنَابٍ وَّفَجَّرْنَا فِيْهَا مِنَ الْعُيُوْنِۙ۞
                        لِيَأْكُلُوْا مِنْ ثَمَرِهٖۙ وَمَا عَمِلَتْهُ اَيْدِيْهِمْ ۗ اَفَلَا يَشْكُرُوْنَ ۞
                        سُبْحٰنَ الَّذِيْ خَلَقَ الْاَزْوَاجَ كُلَّهَا مِمَّا تُنْۢبِتُ الْاَرْضُ
                        وَمِنْ اَنْفُسِهِمْ وَمِمَّا لَا يَعْلَمُوْنَ ۞ وَاٰيَةٌ لَّهُمُ الَّيْلُ ۖنَسْلَخُ

                </Text>
            </View>

            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>

            <Text style={styles.arab}>١٥</Text>

            <Text style={styles.arab}>
            مِنْهُ النَّهَارَ فَاِذَا هُمْ مُّظْلِمُوْنَۙ۞ وَالشَّمْسُ تَجْرِيْ لِمُسْتَقَرٍّ
            لَّهَا ۗذٰلِكَ تَقْدِيْرُ الْعَزِيْزِ الْعَلِيْمِۗ ۞ وَالْقَمَرَ قَدَّرْنٰهُ مَنَازِلَ
            حَتّٰى عَادَ كَالْعُرْجُوْنِ الْقَدِيْمِ ۞ لَا الشَّمْسُ يَنْۢبَغِيْ لَهَآ
            اَنْ تُدْرِكَ الْقَمَرَ وَلَا الَّيْلُ سَابِقُ النَّهَارِ ۗوَكُلٌّ فِيْ فَلَكٍ
            يَّسْبَحُوْنَ ۞  وَاٰيَةٌ لَّهُمْ اَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِى الْفُلْكِ
            الْمَشْحُوْنِۙ ۞ وَخَلَقْنَا لَهُمْ مِّنْ مِّثْلِهٖ مَا يَرْكَبُوْنَ۞ وَاِنْ
            نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيْخَ لَهُمْ وَلَاهُمْ يُنْقَذُوْنَۙ ۞ اِلَّا رَحْمَةً
            مِّنَّا وَمَتَاعًا اِلٰى حِيْنٍ ۞ وَاِذَا قِيْلَ لَهُمُ اتَّقُوْا مَا بَيْنَ
            اَيْدِيْكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُوْنَ ۞ وَمَا تَأْتِيْهِمْ مِّنْ اٰيَةٍ

            </Text>

            </View>


            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>

            <Text style={styles.arab}>١٦</Text>
            <Text style={styles.arab}>
            مِّنْ اٰيٰتِ رَبِّهِمْ اِلَّا كَانُوْا عَنْهَا مُعْرِضِيْنَ ۞ وَاِذَا قِيْلَ لَهُمْ
            اَنْفِقُوْا مِمَّا رَزَقَكُمُ اللّٰهُ ۙقَالَ الَّذِيْنَ كَفَرُوْا لِلَّذِيْنَ اٰمَنُوْٓا
            اَنُطْعِمُ مَنْ لَّوْ يَشَاۤءُ اللّٰهُ اَطْعَمَهٗٓ ۖ اِنْ اَنْتُمْ اِلَّا فِيْ ضَلٰلٍ
            مُّبِيْنٍ ۞ وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ ۞
            مَا يَنْظُرُوْنَ اِلَّا صَيْحَةً وَّاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُوْنَ ۞
            فَلَا يَسْتَطِيْعُوْنَ تَوْصِيَةً وَّلَآ اِلٰٓى اَهْلِهِمْ يَرْجِعُوْنَ ۞
            وَنُفِخَ فِى الصُّوْرِ فَاِذَا هُمْ مِّنَ الْاَجْدَاثِ اِلٰى رَبِّهِمْ
            يَنْسِلُوْنَ ۞ قَالُوْا يٰوَيْلَنَا مَنْۢ بَعَثَنَا مِنْ مَّرْقَدِنَا ۜهٰذَا مَا
            وَعَدَ الرَّحْمٰنُ وَصَدَقَ الْمُرْسَلُوْنَ۞ اِنْ كَانَتْ اِلَّا صَيْحَةً
            </Text>

            </View>


            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>

            <Text style={styles.arab}>١٧</Text>
            <Text style={styles.arab}>
            وَّاحِدَةً فَاِذَا هُمْ جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ ۞ فَالْيَوْمَ لَا تُظْلَمُ
            نَفْسٌ شَيْـًٔا وَّلَا تُجْزَوْنَ اِلَّا مَا كُنْتُمْ تَعْمَلُوْنَ۞اِنَّ اَصْحٰبَ
            الْجَنَّةِ الْيَوْمَ فِيْ شُغُلٍ فٰكِهُوْنَ ۚ۞ هُمْ وَاَزْوَاجُهُمْ فِيْ ظِلٰلٍ
            عَلَى الْاَرَاۤىِٕكِ مُتَّكِـُٔوْنَ ۚ۞ لَهُمْ فِيْهَا فَاكِهَةٌ وَّلَهُمْ مَّا يَدَّعُوْنَ ۚ۞
            سَلٰمٌۗ قَوْلًا مِّنْ رَّبٍّ رَّحِيْمٍ۞وَامْتَازُوا الْيَوْمَ اَيُّهَا الْمُجْرِمُوْنَ
            اَلَمْ اَعْهَدْ اِلَيْكُمْ يٰبَنِيْٓ اٰدَمَ اَنْ لَّا تَعْبُدُوا الشَّيْطٰنَۚ اِنَّهٗ
            لَكُمْ عَدُوٌّ مُّبِيْنٌ۞ وَاَنِ اعْبُدُوْنِيْ ۗهٰذَا صِرَاطٌ مُّسْتَقِيْمٌ۞
            وَلَقَدْ اَضَلَّ مِنْكُمْ جِبِلًّا كَثِيْرًا ۗاَفَلَمْ تَكُوْنُوْا تَعْقِلُوْنَ۞ هٰذِهٖ
            جَهَنَّمُ الَّتِيْ كُنْتُمْ تُوْعَدُوْنَ۞ اِصْلَوْهَا الْيَوْمَ بِمَا كُنْتُمْ تَكْفُرُوْنَ
            </Text>

            </View>

            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>

                    <Text style={styles.arab}>١٨</Text>
                    <Text style={styles.arab}>
                    اَلْيَوْمَ نَخْتِمُ عَلٰٓى اَفْوَاهِهِمْ وَتُكَلِّمُنَآ اَيْدِيْهِمْ وَتَشْهَدُ اَرْجُلُهُمْ
                    بِمَا كَانُوْا يَكْسِبُوْنَ ۞ وَلَوْ نَشَاۤءُ لَطَمَسْنَا عَلٰٓى اَعْيُنِهِمْ
                    فَاسْتَبَقُوا الصِّرَاطَ فَاَنّٰى يُبْصِرُوْنَ۞ وَلَوْ نَشَاۤءُ لَمَسَخْنٰهُمْ
                    عَلٰى مَكَانَتِهِمْ فَمَا اسْتَطَاعُوْا مُضِيًّا وَّلَا يَرْجِعُوْنَ۞وَمَنْ
                    نُّعَمِّرْهُ نُنَكِّسْهُ فِى الْخَلْقِۗ اَفَلَا يَعْقِلُوْنَ۞وَمَا عَلَّمْنٰهُ الشِّعْرَ
                    وَمَا يَنْۢبَغِيْ لَهٗ ۗاِنْ هُوَ اِلَّا ذِكْرٌ وَّقُرْاٰنٌ مُّبِيْنٌ ۙ۞ لِّيُنْذِرَ مَنْ
                    كَانَ حَيًّا وَّيَحِقَّ الْقَوْلُ عَلَى الْكٰفِرِيْنَ ۞ اَوَلَمْ يَرَوْا اَنَّا
                    خَلَقْنَا لَهُمْ مِّمَّا عَمِلَتْ اَيْدِيْنَآ اَنْعَامًا فَهُمْ لَهَا مٰلِكُوْنَ ۞
                    وَذَلَّلْنٰهَا لَهُمْ فَمِنْهَا رَكُوْبُهُمْ وَمِنْهَا يَأْكُلُوْنَ۞وَلَهُمْ فِيْهَا مَنَافِعُ
                   </Text>
            </View>


            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>

                    <Text style={styles.arab}>١٩</Text>
                    <Text style={styles.arab}>

                    وَمَشَارِبُۗ اَفَلَا يَشْكُرُوْنَ۞ وَاتَّخَذُوْا مِنْ دُوْنِ اللّٰهِ اٰلِهَةً
                    لَّعَلَّهُمْ يُنْصَرُوْنَ ۗ۞ لَا يَسْتَطِيْعُوْنَ نَصْرَهُمْۙ وَهُمْ لَهُمْ جُنْدٌ
                    مُّحْضَرُوْنَ۞ فَلَا يَحْزُنْكَ قَوْلُهُمْ ۘاِنَّا نَعْلَمُ مَا يُسِرُّوْنَ وَمَا
                    يُعْلِنُوْنَ۞اَوَلَمْ يَرَ الْاِنْسَانُ اَنَّا خَلَقْنٰهُ مِنْ نُّطْفَةٍ فَاِذَا هُوَ
                    خَصِيْمٌ مُّبِيْنٌ۞ وَضَرَبَ لَنَا مَثَلًا وَّنَسِيَ خَلْقَهٗۗ قَالَ مَنْ
                    يُّحْيِ الْعِظَامَ وَهِيَ رَمِيْمٌ ۞ قُلْ يُحْيِيْهَا الَّذِيْٓ اَنْشَاَهَآ اَوَّلَ
                    مَرَّةٍ ۗوَهُوَ بِكُلِّ خَلْقٍ عَلِيْمٌ ۙ۞ۨالَّذِيْ جَعَلَ لَكُمْ مِّنَ الشَّجَرِ
                    الْاَخْضَرِ نَارًاۙ فَاِذَآ اَنْتُمْ مِّنْهُ تُوْقِدُوْنَ ۞ اَوَلَيْسَ الَّذِيْ
                    خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ بِقٰدِرٍ عَلٰٓى اَنْ يَّخْلُقَ مِثْلَهُمْ ۗبَلٰى
                   </Text>
            </View>


            <View style={{
                        borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
                        marginBottom: heightPercentageToDP('2%'),
                    }}>

                    <Text style={styles.arab}>٢٠</Text>
                    <Text style={styles.arab}>
                    وَهُوَ الْخَلّٰقُ الْعَلِيْمُ ۞ اِنَّمَآ اَمْرُهٗٓ اِذَآ اَرَادَ شَيْـًٔاۖ اَنْ يَّقُوْلَ
                    لَهٗ كُنْ فَيَكُوْنُ ۞ فَسُبْحٰنَ الَّذِيْ بِيَدِهٖ مَلَكُوْتُ
                    كُلِّ شَيْءٍ وَّاِلَيْهِ تُرْجَعُوْنَ
                    </Text>
                    <Text style={styles.arab}>۞</Text>
                    <Text style={styles.arab}>۞۞</Text>
                    <Text style={styles.arab}>۞۞۞۞</Text>
                    <Text style={styles.arab}>۞۞</Text>
                    <Text style={styles.arab}>۞</Text>
            </View>

    </View>
  );
};

export default Yasin;

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
