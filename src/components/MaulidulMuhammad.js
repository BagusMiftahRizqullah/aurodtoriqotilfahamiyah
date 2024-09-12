import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const MaulidulMuhammad = () => {
  return (
    <View style={{flex:1}}>
       <View style={{
           alignItems: 'center', justifyContent: 'center',
       }}>
           <Image
               source={require('../Assets/images/maulidulMuhammad.png')}
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

            <Text style={styles.arab}>٥٣</Text>

            <Text style={styles.arab}>اَلْمُحَمَّدُ</Text>
            <Text style={styles.arab}> مَوْلِدِ النَّبِيِّ مُحَمَّدٌ صَلَی اللهُ عَلَيْهِ وَسَلَّمَ</Text>
            <Text style={styles.arab}>الشيخ المرشد فهمى المحمد خيرق الله</Text>

            <Text style={styles.arab}> ۞۝۞</Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            إِلٰى حَضْرَةِ النَّبِىِّ الْمُصْطَفٰى صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            ILAA HADHROTIN-NABIYYIL-MUSTHOFAA  SHOLLALLOHU 'ALAIHI WA SALLAM,
            </Text>

            <Text style={styles.arab}>
            وَاٰلِهِ وَاَزْوَاجِهِ وَاَوْلاَدِهِ وَذُرِّيَّاتِهِ .. اَلفَاتِحَةْ
            </Text>
            <Text style={styles.latin}>
            WA AALIHI, WA AZWAAJIHI, WA AULAADIHI, WA DZURRIYATIHI … ALFAATIHAH  ( Baca surat alfaatihah 1x )
            </Text>


            <Text style={styles.arab}>
            ثُمَّ اِلٰى حَضْرَةِ اِخْوَانِهِ مِنَ اْلأَنْبِيآءِ وَالْمُرْسَلِيْنَ
            </Text>
            <Text style={styles.latin}>
            TSUMMA ILAA HADHROTI  IKHWAANIHI,  MINAL AMBIYAA'I,  WAL MURSALIIN
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٤</Text>


            <Text style={styles.arab}>
            وَالْأَوْلِيآءِ وَالشُّهَدٓاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ
            </Text>
            <Text style={styles.latin}>
            WAL AWLIYAAI WAS-YUHADAA'IWAS-SHOOLIHIIN WAS-SHOHAABATI WAT-TABI'IIN
            </Text>

            <Text style={styles.arab}>
            وَالْعُلَمآءِ وَالْعَامِلِيْنَ وَاْلمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِﹺ
            </Text>
            <Text style={styles.latin}>
            WAL 'ULAMAA"I  WAL 'AAMILIIN WAL MUSHONNIFIINAL MUKHLISHIIN WA JAMII'IL-
            </Text>


            <Text style={styles.arab}>
            اْلمَلآئِكَةِ اْلمُقَرَّبِيْنَ ..... اَلْفَاتِحَةْ
            </Text>
            <Text style={styles.latin}>
            MALAA"IKATIL MUQORROBIIN ….  ALFAATIHAH
            </Text>

            <Text style={styles.latin}>
            ( Baca Surat Alfaatihah 1x )
            </Text>


            <Text style={styles.arab}>
            ثُمَّ إلٰی جَمِيْعِﹺ أَهْلِ اْلقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ
            </Text>
            <Text style={styles.latin}>
            TSUMMA  ILAA JAMII'I  AHLIL QUBUR  MINAL MUSLIMIINA WAL MUSLIMAAT,
            </Text>

            <Text style={styles.arab}>
            وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ اْلأَرْضِ إِلٰی
            </Text>
            <Text style={styles.latin}>
            WAL MU"MINIINA WAL MU"MINAAT, MIN MASYAARIQIL - ARDHI ILAA
            </Text>

            <Text style={styles.arab}>
            مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلٰی اَبآءِنَا وَأُمَّهَاتِنَا
            </Text>
            <Text style={styles.latin}>
            MAGHOORIBIHA BARRIHA WA BAHRIHAA KHUSUUSHON ILAA AABAA"INA,  WA  UMMAHAATINA,
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٥</Text>

            <Text style={styles.arab}>
            وَأَجْدَادِنَا وَجَدَّاتِنَا وَمَشَايِخِنَا وَمَشَايِخْ مَشَايِخِنَا وَلِمَنِ
            </Text>
            <Text style={styles.latin}>
            WA AJDAADINA,  WA JADDAATINA WA MASYAAYIKHINAA WA MASYAAYIKH  MASYAAYIKHINAA,  WA LIMANIJ-
            </Text>

            <Text style={styles.arab}>
            اجْتَمَعْنَا هَهُنَا بِسَبَبِهِ وَخُصُوْصًا شَيْخٌ اَلْمُرْشِدْ فَهْمِيْ
            </Text>
            <Text style={styles.latin}>
            -TAMA'NAA  HAHUNAA BISABABIHI, WA KHUSUSHON SYAIKH AL-MURSYID FAHMI
            </Text>

            <Text style={styles.arab}>
            اَلْمُحَمَّدِ خَيْرُقُ اللّٰهِ وَاُصُوْلِهِ وَفُرُوْعِهِ اَنَّ اللّٰهَ يُعْلِي
            </Text>
            <Text style={styles.latin}>
            AL-MUHAMMAD KHOIRUQULLOH,  WA USHUULIHI WA FURUU'IHI,  ANNALLOHA YU'LII
            </Text>

            <Text style={styles.arab}>
            دَرَجَاتِهِ فِيْ الْجَنَّةِ وَاَنْ يُّعِدَ عَلَيْنَامِنْ بَرَكَاْتِهِ وَاَسْرَارِهِ
            </Text>
            <Text style={styles.latin}>
            DAROJAATIHI FIL JANNAH,  WA AYYU'IDA 'ALAINA MIM BAROKAATIHI WA ASROORIHI
            </Text>

            <Text style={styles.arab}>
            فِيْ الدُّنْيَا وَالْأَخِرَةِ شَيْءٌ لِلّٰهِ لَهُمُ.. الفَاتِحَة
            </Text>
            <Text style={styles.latin}>
            WA ASROORIHI  FIDDUN'YA  WAL AAKHIROH SYAYYI"ULLILLAHI LAHUM .. ALFAATIHAH
            </Text>
            <Text style={styles.latin}>
            ( Baca Surat Alfaatihah 1x )
            </Text>
            <Text style={styles.arab}>۞۞۞۞۞</Text>

        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٦</Text>


            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>


            <Text style={styles.arab}>
            يَااَيُّهَاالَّذِيْنَ اَمَنُوْا اتَّقُوا اللهَ وَابْتَغُوْا اِلَيْهِ الْوَسِيْلَةَ وَسَلِّمَ
            </Text>
            <Text style={styles.latin}>
            YAA AYYUHAL-LADZIINA AAMANUT-TAQULLOHA  WABTAGHUU ILAIHIL-WASIILATA WA SALLIM
            </Text>


            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّى وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>

            <Text style={styles.arab}>
            يَاأَيُّهَاالَّذِيْنَ أٰمَنُوْا صَلُّوْا وَسَلِّمُوْا تَسْلِيْمًا
            </Text>
            <Text style={styles.latin}>
            YAA AYYUHAL-LADZIINA AAMANUU SHOLLUU  WA SALLIMUU TASLIIMA
            </Text>


            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّى وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>


            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            حَدَّثَنَا خَلَّادُ بْنُ اَسْلَمَ حَدَّثَنَا مُحَمَّدُ بْنُ مُصْعَبٍ
            </Text>
            <Text style={styles.latin}>
            HADDATSANAA KHOLLADUB-NU ASLAM, HADDATSANAA MUHAMMADUB NU MUSH'AB
            </Text>
        </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٧</Text>

            <Text style={styles.arab}>
            حَدَّثَنَا الْأَوْزَاعِيٌّ عَنْ اَبِيْ عَمّاَرٍعَنْ وَاثِلَةَ بْنِ الْأَسْقَعَ
            </Text>
            <Text style={styles.latin}>
            HADDATSANAL-AUZAA'IYYU 'AN ABII 'AMMAR 'AN  WATSILATAB-NIL ASQO'
            </Text>

            <Text style={styles.arab}>
            رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ ﷺ
            </Text>
            <Text style={styles.latin}>
            RODIYALLOHU 'ANHU QOOL : QOOLA ROSULLULLOHI  SHOLLOLLOHU 'ALAIHI WA SALLAM
            </Text>

            <Text style={styles.arab}>
            اِنَّ اللهَ اصْطَفٰی مِنْ وَلَدِ اِبْراَهِيْمَ اِسْمٰعِيْلَ
            </Text>
            <Text style={styles.latin}>
            INNALLOHAS-SH TOFAA MIW-WALADI IBROOHIIMA  ISMAA'IILA
            </Text>


            <Text style={styles.arab}>
            وَاصْطَفٰی مِنْ وَلَدِ اِسْمٰعِيْلَ بَنِيْ كِنَانَةَ وَاصْطَفٰی مِنْ
            </Text>
            <Text style={styles.latin}>
            WASHTOFAA MIW-WALADI ISMAA'ILA BANI KINAANAH  WAS-SH TOFAA MIM
            </Text>

            <Text style={styles.arab}>
            بَنِيْ كِنَانَةَ قُرَيْشاً وَاصْطَفٰی مِنْ قُرَيْشٍ بَنِيْ هَاشِمٍ
            </Text>
            <Text style={styles.latin}>
            BANII  KINAANATA QUROISYAA, WAS-SH TOFAA  MIN QUROISYIN BANII HAASYIM
            </Text>


            <Text style={styles.arab}>
            وَاصْطَفَانِيْ مِنْ بَنِيْ هَاشِمٍ
            </Text>
            <Text style={styles.latin}>
            WAS-SH TOFAANII MIM BANII HAASYIM
            </Text>


        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٨</Text>


            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّي وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>


            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>


            <Text style={styles.arab}>
            اَللهُ صَلَّی النَّبِيِّ قَدْرِ تَعْظِيْمٍ عَلَيْهَا مِنْ فِيْهِ صَاحِبُهَا
            </Text>
            <Text style={styles.latin}>
            ALLOHU SHOLLAN-NABIYYI QODRI TA'DZHIIMIN ALAIHAA MIN FIIHI SHOOHIBUHAA
            </Text>

            <Text style={styles.arab}>
            يُشَابُ الَّتِی الحَسَنَةِ الْبِدَعِ مِنْ هُوَ الشَّرِيْفِ بِمَوْلِدِهِ
            </Text>
            <Text style={styles.latin}>
            YUSYAABUL-LATIL-HASANATIL-BIDA', MIN HUWASSYARIIFI BIMAULIDIHI
            </Text>


            <Text style={styles.arab}>
            وَاْلإِسْتِبْشَارِ الفَرَخِ وَاِظْهَارِ وَسلَّمَ وَاٰلِهِ عَلَيْهِ
            </Text>
            <Text style={styles.latin}>
            WAL ISTIBSYAARIL-FAROKHI WA IDZHAARI WA SALLAMA  WA AALIHI 'ALAIH.
            </Text>


            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّى وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٥٩</Text>


            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            اَلطَّعَامُ وَاِطْعَامُ وَالْإِجْتِمَاعُ وَسَلِّمُ وَاٰلِهِ عَلَيْهِ
            </Text>
            <Text style={styles.latin}>
            AT-THO'AAMU WA ITH'AAMU WAL IJTIMAA'U WA SALLIM WA AALIHI ALAIH
            </Text>

            <Text style={styles.arab}>
            اَللهُ صَلِّى بِمَوْلِدِهِ الشُّكْرِ اِظْهَارُ لَنَا يُسْتَحِبُّ
            </Text>
            <Text style={styles.latin}>
            ALLOHU SHOLLI BIMAULIDIHIS-SYUKRI IDZHAARU LANAA YUSTAHIBBUL-
            </Text>

            <Text style={styles.arab}>
            الْمُسَرَّاتِ وَاِظْهَارِالْقُرْبَاتِ وُجُوْهِ مِنْ ذَلِكَ وَنَحْوُ
            </Text>
            <Text style={styles.latin}>
            MUSARROOTI WA IDZHAARIL-QURBAATI WUJUUHI MIN  DZALIKA WA NAHWU
            </Text>


            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّى وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>


            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            اللهُ صَلِّی فِيْهِ وُلِدَ لَّذِيِ الشَّهْرِ مِنَ الشَّرِيْفِ الْمَوْلِدِ
            </Text>

        </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٠</Text>
            <Text style={styles.latin}>
            ALLOHU SHOLLI FIIHI WULIDAL-LADZIYIS-SYAHRI MINASSYARIIFIL- MAULID
            </Text>

            <Text style={styles.arab}>
            عَمَلَ الْمَحْمُوْدَةُ الْبِدَعُ اِنَّ اَعْلَمُوْمَ وَسَلِّمَ وَاٰلِهِ عَليْهِ
            </Text>
            <Text style={styles.latin}>
            'AMALAL - MAHMUUDATUL- BIDA', INNA "A'LAMUUMA WA   SALLIMA WA AALIHI 'ALAIH
            </Text>

            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّى وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>


            <Text style={styles.arab}>
            بِسْمِ الله الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>


            <Text style={styles.arab}>
            حَفَّتِ اِلّاَ وَسَلَّمَ وَاٰلِهِ عَلَيْهِ اللهِ صَلِّيَ النَّبِيِّ مَوْلِدِ
            </Text>
            <Text style={styles.latin}>
            HAFATI ILLA WA SALLAM WA AALIHI "ALAIHILLAHI  SHOLLIYAN-NABIYYI MAULIDI
            </Text>


            <Text style={styles.arab}>
            فِيْهِ قُرِيَ مَسْجِدً اَوْمَحِلًّ اَوْبَيْتً مِنْ مَا
            </Text>
            <Text style={styles.latin}>
            FIIHI QURIYA MASJIDAN AU MAHILLAN AU BAITAN MIM-MAA
            </Text>


            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّى وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>

        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦١</Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>


            <Text style={styles.arab}>
            وَالرِّضْوَانِ بِاالرَّحْمَةِ تَعَالٰی اللهَ وَعَمَّهُمَ المَكانِ  ذَلِكَ
            </Text>
            <Text style={styles.latin}>
            WAR-RIDHWAANI BIR-ROHMATI TA'AALAL-LLOHA  WA 'AMMAHUMAL- MAKANI DZALIKA
            </Text>


            <Text style={styles.arab}>
            اَهْلَ اْلمَلآئِكَةِ
            </Text>
            <Text style={styles.latin}>
            AHLAL-MALAA"IKAH
            </Text>

            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّی وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>


            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            اللّٰــهُمَّ صَلِّ عَلٰى سَـيِّدِنَا مُحَمَّدٍ وَعَلٰى اٰلِ سَيِّدِنَا
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI 'ALAA SAYYIDINA MUHAMMAD  WA 'ALAA "AALI SAYYIDINAA
            </Text>

            <Text style={styles.arab}>
            مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰی سَيِّدِنَا اِبْرَاهِيْمَ وَعَلٰی اٰلِ
            </Text>
            <Text style={styles.latin}>
            MUHAMMAD, KAMAA SHOLLAITA 'ALAA SAYYIDINA IBROOHIM, WA 'ALAA "AALI
            </Text>
        </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٢</Text>

            <Text style={styles.arab}>
            سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلٰی سَيّدِنَا مُحَمَّدٍ وَعَلٰی اٰلِ سَيِّدِنَا
            </Text>
            <Text style={styles.latin}>
            SAYYIDINA IBROOHIM, WA BAARIK 'ALAA SAYYIDINA  MUHAMMAD, WA 'ALAA AALI
            </Text>

            <Text style={styles.arab}>
            مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰی سَيِّدِنَا اِبْرَاهِيْمَ وَعَلٰی اٰلِ سَيِّدِنَا
            </Text>
            <Text style={styles.latin}>
            SAYYIDINA MUHAMMAD KAMAA BAAROKTA 'ALAA  SAYYIDINAA IBROOHIM
            </Text>

            <Text style={styles.arab}>
            اِبْرَاهِيْمَ فِی العَالَمِيْنَ  اِنَّكَ حَمِيْدٌ مَجِيْدٌ
            </Text>
            <Text style={styles.latin}>
            WA 'ALAA "AALI SAYYIDINA IBROOHIM FIL 'ALAMIINA  INNAKA HAMIIDUM-MAJIID
            </Text>

            <Text style={styles.arab}>
            اِنَّ اللهَ وَمَلآئِكَتَهُ يُصَلُّوْانَ عَلٰی النَّبِيْ يَااَيُّهَا
            </Text>
            <Text style={styles.latin}>
            INNALLOHA WA MALAA"IKATAHU YUSHOLLUUNA  'ALAN-NABI YAA "AYYUHAL-
            </Text>

            <Text style={styles.arab}>
            الَّذِيْنَ اٰمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا
            </Text>
            <Text style={styles.latin}>
            -LADZIINA "AAMANUU SHOLLU 'ALAIHI WA SALLIMUU  TASLIIMAA
            </Text>


        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٣</Text>

            <Text style={styles.arab}>
            ۞ اَللّٰهُمَّ صَلِّی وَسَلِّمْ وَبَارِكْ عَلَيْهِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI WA SALLIM WA BAARIK 'ALAIH
            </Text>

            <Text style={styles.arab}>
            ۞ صَلاَةُ اللهِ مَـــالاَحَتْ كَــوَاكِبُ  ۞
            </Text>
            <Text style={styles.latin}>
            SHOLAATULLOHI MAA LAA HAT KAWAAKIB
            </Text>

            <Text style={styles.arab}>
            ۞ عَلَی احْمَدُ خَيْرِ مَنْ رَكِبَ النَّجَاءِبْ ۞
            </Text>
            <Text style={styles.latin}>
            'ALAH-MAD KHOIRI MAN ROKIBAN-NAJAA"IB
            </Text>

            <Text style={styles.arab}>۞۞۞۞</Text>
            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞۞</Text>
            <Text style={styles.arab}>۞</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٤</Text>

            <Text style={styles.arab}>
            محل القيام
            </Text>

            <Text style={styles.arab}>
            يَانَبِی سَلَامُ عَلَيْكَ  يــَارَسُوْل سَلَامْ عَلَيْكَ
            </Text>
            <Text style={styles.latin}>
            YAA NABII SALAAM 'ALAIKA YAA ROSUUL SALAAM 'ALAIKA
            </Text>

            <Text style={styles.arab}>
            يَاحَبِيْبَ سَلَامْ عَلَيْكَ  صَلَوَاتُ اللهَ عَلَيْكَ
            </Text>
            <Text style={styles.latin}>
            YAA HABIIB SALAAM 'ALAIKA SHOLAWAATULLOH 'ALAIKA
            </Text>

            <Text style={styles.arab}>
            اَلْفُ اَلْفِ صَلَاةٍ  وَاَلْفُ اَلْفِ سَلَامٍ
            </Text>
            <Text style={styles.latin}>
            ALFU ALFI SHOLAATIN  WA ALFU ALFI SALAAMI
            </Text>

            <Text style={styles.arab}>
            عَلَيْكَ يَاسَيِّدِ المُرْسَلِيْنَ
            </Text>
            <Text style={styles.latin}>
            'ALAIKA YA SAYYIDAL MURSALIIN
            </Text>

            <Text style={styles.arab}>
            سَلَامٌ عَلَيْكَ يَاسَيِّدِيْ يَارَسُوْلُ اللهِ خُذْ بِيَدِيْ
            </Text>
            <Text style={styles.latin}>
            SALAMUN 'ALAIKA YA SAYYIDI, YAA ROSUULULLOH KHUDZ BIYADII
            </Text>


            <Text style={styles.arab}>
            قَلَّتْ حِيْلَتِی اَدْرِكْنِی
            </Text>
            <Text style={styles.latin}>
            QOLLAT HIILATI ADRIKNII
            </Text>

            <Text style={styles.arab}>
            يَارَسُوْلَ اللهِ يَانَبِی لَكَ الشَّفَاعَةِ وَهَذَا مَطْلَبِی
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٥</Text>
            <Text style={styles.latin}>
            YAA ROSULALLOHI YAA NABII LAKAS-SYAFAA'AH   WA HADZAA MATHLABII
            </Text>

            <Text style={styles.arab}>
            يَانَبِيْ
            </Text>
            <Text style={styles.latin}>
            YAA NABII
            </Text>

            <Text style={styles.arab}>
            مَرْحَبًا يَا نُوْرُالْعَيْنِ  مَرْحَبًا مَرْحَبًا
            </Text>
            <Text style={styles.latin}>
            MARHABAN YAA NURUL-'AINI MARHABAN MARHABAA
            </Text>

            <Text style={styles.arab}>
            مَرْحَبًا جَدَّالحُسَيْنِی  مَرْحبًا مَرْحَبًا
            </Text>
            <Text style={styles.latin}>
            MARHABAN YAA JADDAL HUSAINI MARHABAN MARHABAA
            </Text>

            <Text style={styles.arab}>۞۞۞۞</Text>
            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞۞</Text>
            <Text style={styles.arab}>۞</Text>

        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٦</Text>
            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            اَللّٰهُمَّ صَلِّی عَلَی سَيِّدِنَا وَمَوْلَنَا مُحَمَّدٍ خَيْرُ البَرِيَّةِ
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI 'ALAA SAYYIDINA WA MAULANAA  MUHAMMADIN KHOIRUL BARIYYAH
            </Text>

            <Text style={styles.arab}>
            صَلَاةً تُسَلِّمُنَا بِهَا وَتُسَلِّمُنَا بِهَا وَتُسَلِّمُنَا اَهْلَنَا
            </Text>
            <Text style={styles.latin}>
            SHOLAATAN TUSALLIMUNAA BIHAA WA  TUSALLIMUNAA BIHAA WA TUSALLIMUNAA AHLANAA
            </Text>

            <Text style={styles.arab}>
            وَاَوْلَادَنَا وَاَقْرِبَاءَنَا وَاَحْبَابَنَا وَمُعَلِّمِيْنَ وَمُتَعَلِّمِيْنَ
            </Text>
            <Text style={styles.latin}>
            AHLANAA WA AULAADANAA WA AQRIBAA"ANAA WA  AHBAABANA WA MU'ALLIMIINA WA MUTA'ALLIMIINA
            </Text>

            <Text style={styles.arab}>
            وَاَصْدِقَاءِنَا وَجِيْرَانَنا وَتُسَلِّمُ بُيُوْتَنَا وَمَسَاجِدَنَا
            </Text>
            <Text style={styles.latin}>
            WA ASHDIQOOINAA WA JIIROONANAA WA TUSALLIM  BUYUUTANA WA MASAAJIDANAA
            </Text>


            <Text style={styles.arab}>
            وَمَعَاهِدَنَا وَمَدَارِسَنَا وَمَزَارِعَنَا وَمَكَاتِـبَنَا وَجَمِيْعِ
            </Text>
            <Text style={styles.latin}>
            WA MA'AAHIDANAA WA MADAARISANAA WA MAZAARI'ANAA  WA MAKAATIBANAA WA JAMII'I
            </Text>


            </View>

            <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٧</Text>

            <Text style={styles.arab}>
            مَحَلَّاتِنَا وَاَمْوَالَنَا مِنْ شَرِّ زَلْزَلَةُ الْاَرْضِ وَحَرَكَاتِهَا
            </Text>
            <Text style={styles.latin}>
            MAHALLAATINAA WA AMWAALANAA MIN SYARRI  ZALZALATIL ARDHI WA HAROKAATIHA
            </Text>

            <Text style={styles.arab}>
            وَمِنْ شَرِّ اْلاَمْطَارِ وَالرَّيَاحِ وَالصَّوَاعِقِ وَغَيْرِهَا
            </Text>
            <Text style={styles.latin}>
            WA MIN SYARRIL - AMTHOORI WAR-ROYAAHI WASSHOWAA'IQI, WA GHORIHAA
            </Text>


            <Text style={styles.arab}>
            وَالْبَوَاخِرَ وَجَمِيْعِ المرْكُوبَاتِ وَاَنْوَاعِهَا وَمِنْ شَرِّالْوَبَاءِ
            </Text>
            <Text style={styles.latin}>
            WAL-BAWAAKHIRI WA JAMII'IL - MARKUUBAATI  WA ANWAA'IHAA WA MIN SYARRIL WABAA"I
            </Text>


            <Text style={styles.arab}>
            وَالْاٰفَاتِ وَالْعَاهَاتِ وَاشْبَاهِهَا وَمِنْ شَرِّ الجِنِّ
            </Text>
            <Text style={styles.latin}>
            WAL - AAFAATI WAL 'AAHAATI WAS-SYBAHIHAA WA MIN SYARRIL-JINNI
            </Text>

            <Text style={styles.arab}>
            وَالْاِنْسِ وَالطّاَغُوْتِ وَالشَّيَاطِيْنَ وَمَكَايِدِهَا وَمِنَ
            </Text>
            <Text style={styles.latin}>
            WAL - INSI, WAT-THOGUUTI  WAS-SYAYAATINA  WA MAKAAYIDIHAA, WA MINAT-
            </Text>

            <Text style={styles.arab}>
            التَّرَادِّ وَالهَدَمِ وَالحَرَقِ وَجَمِيْعِ الْمَصَاءِبِ وَمُخْتَلِفَاتِهَا
            </Text>

            <Text style={styles.latin}>
            -TARODDI,  WAL HADAMI, WAL HAROQI , WA JAMII'IL  MASHOO'IBI WA MUKHTALIFAATIHA
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٨</Text>

            <Text style={styles.arab}>
            وَمِنْ كُلِّ بَلَاءِ فِی الّدِيْنِ وَالدُنْيَا وَالأَخِرَةِ بِجَاهِ
            </Text>

            <Text style={styles.latin}>
            WA MIN KULLI BALAA"I FIDDINII,  WAD-DUN'YA,  WAL-AAKHIROH, BIJAAHIL-
            </Text>

            <Text style={styles.arab}>
            الْمُصْطَفٰی وَعَلٰی اٰلِهِ وَصَحْبِهِ وَسَلِّمُ تَسْلِيْمًا كَثِيْرًا
            </Text>

            <Text style={styles.latin}>
            MUSHTHOFAA WA 'ALAA AALIHI WA SHOHBIHI  WA SALLIM, TASLIIMAN KATSIIROO
            </Text>

            <Text style={styles.arab}>
            اَللّٰهُمَّ بِحَقِّ الْحَسَنِ وَاَخِيهِ وَجَدِّهِ وَاُمِّهِ وَاَبِيْهِ نَجِّنِيْ
            </Text>

            <Text style={styles.latin}>
            ALLOHUMMA BI HAQQIL-HASANI WA AKHIIHI WA JADDIHI   WA UMMIHI WA ABIIHI, NAJJINII
            </Text>

            <Text style={styles.arab}>
            مِنَ الغَمِّ الَّذِيْ اَنَافِيْهِ يَاحَيُّ يَاقَيُّوْمُ سَاءَلَكَ اَنْ تُنَوِّرَ
            </Text>

            <Text style={styles.latin}>
            MINAL-GHOM, ALLADZII ANAA FIIHI , YA HAYYU YA QOYYUM SAA"ALAKA  AN TUNAWWIRO
            </Text>

            <Text style={styles.arab}>
            قَلْبِيْ بِنُورِمَعْرِفَتِكَ, اَللّٰهُمَّ اَجِرْنَا مِنَ النَّارِ يَامُجِيْرُ
            </Text>

            <Text style={styles.latin}>
            QOLBII, BI NUURI MA'RIFATIK, ALLOHUMMA AJIRNAA MINAN-NAAR YA MUJIIRU
            </Text>

            <Text style={styles.arab}>
            بِرَحْمَتِكَ يَااَرْحَمَ الرَّاحِمِيْنَ
            </Text>
            <Text style={styles.latin}>
            BIROHMATIKA YAA ARHAMAR-ROOHIMIIN
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٦٩</Text>

            <Text style={styles.arab}>
            اَللّٰهُمَّ صَلّیِ عَلَی سَيِّدِنَا مُحَمَّدٍ نُوْرِالْكَامِلِ وَعَلَی
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI 'ALAA SAYYIDINA MUHAMMADIN  NUURIL - KAAMIL, WA 'ALAA
            </Text>

            <Text style={styles.arab}>
            سَيِّدِنَا جِبْرِيْلَ الْمُطَوِّفِ بِنُوْرِرَسُولِ رَبِّ العَالَمِيْنَ
            </Text>
            <Text style={styles.latin}>
            SAYYIDINAA JIBRIL, ALMUTHOWWIFI BI NUURI ROSUULI  ROBBIL 'AALAMIIN
            </Text>

            <Text style={styles.arab}>
            يَاقَريْبُ يَامُجِيْبُ يَاسَمِيْعُ الدُّعَاءِ يَالَطِيْفًا بِمَا يَشَاءُ
            </Text>
            <Text style={styles.latin}>
            YAA QORIIBU YAA MUJIIBU YAA SAMII'UD-DU'AA  YAA LATHIIFAM BIMAA YASYAA"
            </Text>

            <Text style={styles.arab}>
            نَوِّرُ اللّٰهُمَّ عَلَيْنَا قُلُوبَنَا وَقُبُورَنَا وَاَبْصَارَنَا وَبَصَاءِرَنَا
            </Text>
            <Text style={styles.latin}>
            NAWIR ALLOHUMMA 'ALAINA QULUUBUBANA   WA 'ABSHOORONA WA BASHOO"IRONAA
            </Text>

            <Text style={styles.arab}>
            بِرَحْمَةٍ مِنْكَ, اَللّٰهُمَّ صَلِّی عَلٰی سَيِّدِنَا مُحَمَّدٍ وَعَلٰی
            </Text>
            <Text style={styles.latin}>
            BI ROHMATIM-MINKA   ALLOHUMMA SHOLLI 'ALAA SAYYIDINA MUHAMMADIN   WA 'ALAA
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٠</Text>

            <Text style={styles.arab}>
            اٰلِ وَصَحْبِهِ وَسَلَّمَ وَاَذْهِبَ حَزَنَ قَلْبِيْ فِيْ الدُّنْيَا
            </Text>
            <Text style={styles.latin}>
            AALI  WA SHOHBIHI WA SALLAM, WA ADZHIBA HAZANA   QOLBII FID-DUN'YA
            </Text>

            <Text style={styles.arab}>
            وَالأَخِرَةِ وَاٰخِرُ دَعْوَانَا اَنِ الْحَمْدُ لِلّٰهِ رَبِّ العَالَمِيْنَ
            </Text>
            <Text style={styles.latin}>
            WAL "AAKHIROH, WA "AAKHIRU DA'WAANAA ANIL  HAMDULILLAHI ROBBIL'AALAMIIN
            </Text>
            <Text style={styles.arab}>۞</Text>
            <Text style={styles.arab}>۞۞</Text>
            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞۞۞۞</Text>
            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞۞</Text>
            <Text style={styles.arab}>۞</Text>
        </View>

    </View>
  );
};

export default MaulidulMuhammad;

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
