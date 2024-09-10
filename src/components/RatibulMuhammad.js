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
            رَاتِبُ الْمُحَمَّدُ
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ  اللهِ الرَّحْمٰــــنِ الرَّحِيْـــــمِ
            </Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>
            إِلٰى حَضْرَةِ النَّبِىِّ الْمُصْطَفٰى صَلَّى اللهُ عَلَيْهِ
            </Text>
            <Text style={styles.latin}>ILAA HADHROTIN-NABIYYIL-MUSTHOFAA SHOLLALLOHU 'ALAIHI</Text>

            <Text style={styles.arab}>
            وَسَلَّمَ وَاٰلِهِ وَاَزْوَاجِهِ وَاَوْلاَدِهِ وَذُرِّيَّاتِهِ ..اَلفَاتِحَةْ
            </Text>
            <Text style={styles.latin}>WA SALLAM, WA AALIHI, WA AZWAAJIHI, WA AULAADIHI, WA DZURRIYATIHI … ALFAATIHAH</Text>
            <Text style={styles.latin}>( BACA SURAT ALFATIHAH 1 KALI )</Text>

            <Text style={styles.arab}>ثُمَّ اِلٰى حَضْرَةِ اِخْوَانِهِ مِنَ اْلأَنْبِيآءِ وَالْمُرْسَلِيْنَ</Text>
            <Text style={styles.latin}>TSUMMA ILAA HADHROTI IKHWAANIHI, MINAL AMBIYAA'I WAL MURSALIIN</Text>

            <Text style={styles.arab}>وَالْأَوْلِيآءِ وَالشُّهَدٓاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ</Text>
            <Text style={styles.latin}>WAL AWLIYAAI WAS-YUHADAA'IWAS-SHOOLIHIIN WAS-SHOHAABATI</Text>



        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٢</Text>

            <Text style={styles.arab}>
            وَالتَّابِعِيْنَ وَالْعُلَمآءِ وَالْعَامِلِيْنَ وَاْلمُصَنِّفِيْنَ
            </Text>
            <Text style={styles.latin}>WAT-TABI'IIN WAL 'ULAMAA"I WAL 'AAMILIIN WAL MUSHONNIFIINAL</Text>

            <Text style={styles.arab}>
            الْمُخْلِصِيْنَ وَجَمِيْعِ اْلمَلآئِكَةِ اْلمُقَرَّبِيْنَ ...
            </Text>
            <Text style={styles.latin}>MUKHLISHIIN WA JAMII'IL- MALAA"IKATIL MUQORROBIIN</Text>


            <Text style={styles.arab}>
            اَلْفَاتِحَةْ
            </Text>
            <Text style={styles.latin}>ALFAATIHAH ( BACA SURAT ALFATIHAH 1 KALI )</Text>


            <Text style={styles.arab}>
            ثُمَّ إِلٰی جَمِيْعِ أَهْلِ اْلقُبُوْرِ مِنَ الْمُسْلِمِيْنَ
            </Text>
            <Text style={styles.latin}>TSUMMA ILAA JAMII'I AHLIL QUBUR MINAL MUSLIMIINA</Text>


            <Text style={styles.arab}>
            وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ
            </Text>
            <Text style={styles.latin}>
            WAL MUSLIMAAT WAL MU"MINIINA WAL MU"MINAAT MIN MASYAARIQIL
            </Text>


            <Text style={styles.arab}>
            اْلأَرْضِ إِلٰی مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا
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
            إِلٰی اَبآءِنَا وَأُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا وَمَشَايِخِنَا
            </Text>
            <Text style={styles.latin}>
            ILAA AABAA"INA, WA UMMAHAATINA, WA AJDAADINA, WA JADDAATINA, WA MASYAAYIKHINAA
            </Text>


            <Text style={styles.arab}>
            وَمَشَايِخْ مَشَايِخِنَا وَلِمَنِ اجْتَمَعْنَاهَهُنَا بِسَبَبِهِ
            </Text>
            <Text style={styles.latin}>
            WA MASYAAYIKH MASYAAYIKHINAA, WA LIMANIJTAMA'NAA HAAHUNA BISABABIHI
            </Text>

            <Text style={styles.arab}>
            وَخُصُوْصًا شَيْخٌ اَلْمُرْشِدْ فَهْمِيْ اَلْمُحَمَّدِ
            </Text>
            <Text style={styles.latin}>
            WA KHUSUSHON SYAIKH AL-MURSYID FAHMI ALMUHAMMAD
            </Text>


            <Text style={styles.arab}>
            خَيْرُقُ اللّٰهِ وَاُصُوْلِهِ وَفُرُوْعِهِ اَنَّ اللّٰهَ  يُعْلِي
            </Text>
            <Text style={styles.latin}>
            KHOIRUQULLOH, WA USHUULIHI WA FURUU'IHI, ANNALLOHA YU'LII
            </Text>

            <Text style={styles.arab}>
                دَرَجَاتِهِ فِيْ الْجَنَّةِ وَاَنْ يُّعِدَ عَلَيْنَا مِنْ بَرَكَاْتِهِ
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
            وَاَسْرَارِهِ فِيْ الدُّنْيَا وَالْأَخِرَةِ شَيْءٌ لِلّٰهِ لَهُمُ..
            </Text>
            <Text style={styles.latin}>
            WA ASRORIHI FID-DUN'YA WAL AKHIROH SYAI"ULL-LILLAHI LAHUM
            </Text>

            <Text style={styles.arab}>
            اَلْفَاتِحَةْ ……
            </Text>
            <Text style={styles.latin}>ALFAATIHAH ( BACA SURAT ALFATIHAH 1 KALI )</Text>
            <Text style={styles.arab}>۞۞۞۞</Text>
            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞۞</Text>
            <Text style={styles.arab}>۞</Text>
         </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٥</Text>

            <Text style={styles.arab}>بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيْــــمِ</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ۞الرَّحْمٰنِ الرَّحِيمِ۞</Text>
            <Text style={styles.latin}>ALHAMDULILLAAHIROBBIL'AALAMIIN ۞ ARROHMAANIR-ROHIIM ۞</Text>

            <Text style={styles.arab}>ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ۞ </Text>
            <Text style={styles.latin}>MAALIKIYAUMIDDIIN ۞IYYAAKA NA'BUDU WA IYYA KANASTA'IIN ۞</Text>

            <Text style={styles.arab}>اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞صِرَاطَ الَّذِينَ اَنْعَمْتَ </Text>
            <Text style={styles.latin}>IHDINAS-SHIROOTOL MUSTAQIIM ۞ SHIROOTOL-LADZIINA AN 'AMTA </Text>

            <Text style={styles.arab}>
            عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ ۞
            </Text>
            <Text style={styles.latin}>ALAIHIM, GHOIRIL MAGHDHUUBI  'ALAIHIM  WA LAZDHOLLIIIN  ۞</Text>

            <Text style={styles.arab}>اٰمِينْ</Text>
            <Text style={styles.latin}>AAMIIN</Text>
            <Text style={styles.arab}>۞۞۞</Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٦</Text>
            <Text style={styles.arab}>بِسْــــمِ اللهِ الرَّحْمٰــنِ الرَّحِيـــمِ</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

            <Text style={styles.arab}>اللهُ لٓا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا</Text>
            <Text style={styles.latin}>ALLOHU LAA ILAAHA ILLA HUWAL-HAYYUL QOYYUM  LAA  TA"KHUDZUHU SINATUW- WA LAA
            </Text>
            <Text style={styles.arab}>
            نَوْمٌ , لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ, مَنْ ذَا
            </Text>
            <Text style={styles.latin}>
                NAUM, LAHUU MAA FIS-SAMAAWAATI WA MAA FIL ARDHI, MAN DZAL-
            </Text>

            <Text style={styles.arab}>
            الَّذِي يَشْفَعُ عِنْدَهُٓ إِلَّا بِإِذْنِهِ, يَعْلَمُ مَا بَيْنَ أَيْدِيْهِمْ وَمَا
            </Text>
            <Text style={styles.latin}>
            ' LADZII YASHFA'UU ' INDAHUU ILLAA BI IDZNIH,' 'YA'LAMU MAA BAINA AIDIIHIM  'WA MAA
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
            وَهُوَ الْعَلِيُّ الْعَظِيمُ
            </Text>
            <Text style={styles.latin}>
            WA HUWAL 'ALIYYUL 'ADZHIIM
            </Text>
            <Text style={styles.latin}>۞۞۞</Text>
        </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٧</Text>

            <Text style={styles.arab}>
            لٓاإِلَهَ إِلَّا اللهُ وَحْدَهُ لَاشَرِيكَ لَهُ،لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ
            </Text>
            <Text style={styles.latin}>
            LAA ILAHA ILLALLOHU WAHDAHU LAA SYARIIKALAH, LAHUL MULKU WA LAHUL HAMDU,
            </Text>

            <Text style={styles.arab}>
            يُحْيِ وَيُمِيْتُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ ٣ كالى
            </Text>
            <Text style={styles.latin}>
            YUHYI WA YUMIITU WA HUWA 'ALA KULLI SYAYI"IN QODIIR
            ( DIBACA 3 X)
            </Text>
            <Text style={styles.arab}>۞۞۞</Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ أَنْتَ رَبِّي, لٓا إِلٰهَ إِلاَّ أَنْتَ خَلَقْتَنِي, وَأَناَ عَبْدُكَ
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA ANTA ROBBI, LAA ILAAHA ILLA ANTA,KHOLAQTANI, WA ANAA 'ABDUKA,
            </Text>

            <Text style={styles.arab}>
            وَأَناَعَلٰى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ, أَعُوْذُ بِكَ
            </Text>
            <Text style={styles.latin}>
            WA ANAA 'ALA 'AHDIKA, WAWA'DIKA MASTATHO'TU, A'UDZUBIKA
            </Text>

            <Text style={styles.arab}>
            مِنْ شَرِّ مَا صَنَعْتُ, أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ
            </Text>
            <Text style={styles.latin}>
            MIN SYARRI MAA SHONA'TU ABUU"U LAKA BINI'MATIKA ALAYYA WA ABUU"U
            </Text>

            <Text style={styles.arab}>
            ' بِذَنْبِي فَاغْفِرْ لِيْ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّاأَنْت    ٣ كالى
            </Text>
            <Text style={styles.latin}>
            BI DZANBI, FAGHFIRLII FA INNAHU LAA YAGHFIRUZ-'DZUNUUBA ILLAA ANTA ( DIBACA 3 X)
            </Text>
            <Text style={styles.arab}>۞۞۞</Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>٢٨</Text>
            <Text style={styles.arab}>
            سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلٰهَ إِلاَّ اللهُ وَاللهُ أَكْبَرُ
            </Text>

            <Text style={styles.arab}>
            .۞٣كالى۞.
            </Text>

            <Text style={styles.latin}>
            SUBHAANALLOH WAL HAMDULILLAH WA LAA ILAAHA ILLALLOH, WALLOHU AKBAR ( DIBACA 3 KALI )
            </Text>
            <Text style={styles.arab}>۞۞۞</Text>

            <Text style={styles.arab}>
            تَـوَسَّلْنَا بِـبِسْمِ اللهِ وَبِالْـهَادِيْ رَسُـوْلِ اللهِ وَكُلِّ
            </Text>
            <Text style={styles.latin}>
            TAWASSALNA BI BISMILLAH WA BIL HAADI ROSUULILLAH WA KULLI
            </Text>


            <Text style={styles.arab}>
            مُـجَـاهِـدٍ لِلّٰهِ بِـاَهْــلِ الْـبَــدْرِ يَـا اَللّٰهْ
            </Text>
            <Text style={styles.latin}>
            MUJAAHIDIL LILLAH BI AHLIL BADRI YA ALLOH
            </Text>
            <Text style={styles.arab}>۞۞۞</Text>


            <Text style={styles.arab}>
            اللّٰهُمَّ صَلِّ عَلٰى نُورِاْلأَنْوَارِ وَسِرِّاْلأَسْرَارِ٬وَتِرْيَاقِ
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI 'ALAA NUURIL ANWAAR WA SIRRIL WA TIRYAQIL-
            </Text>

            <Text style={styles.arab}>
            اْلأَغْيَارِ وَمِفْتَاحِ بَابِ اْلأَسْيَارِ سَيِّدِنَا وَمَوْلاَنَا
            </Text>
            <Text style={styles.latin}>
            'AGHYAAR WA MIFTAAHI BAABIL ASYAAR, SAYYIDINA ' WA MAULAANAA
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٢٩
            </Text>

            <Text style={styles.arab}>
            مُحَمَّدِنِ الْمُخْتَارِ وَاٰلِهِ الأَطْهَارِ وَأَصْحَابِهِ اْلأَخْيَارِ
            </Text>
            <Text style={styles.latin}>
            ' MUHAMMADINIL MUKHTAR,  WA AALIHIL- ATH-HAAR, ' WA ASH-HAABIHIL-AKHYAAR
            </Text>

            <Text style={styles.arab}>
            عَدَدَ نِعَمِ اللهِ وَأِفْضَالِهِ
            </Text>
            <Text style={styles.arab}>
            ٣ كالى
            </Text>
            <Text style={styles.latin}>
            ' 'ADADA NI'AMILLAHI WA IFDHOOLIH   ( DIBACA 3 KALI )
            </Text>

            <Text style={styles.arab}>۞۞۞</Text>

            <Text style={styles.arab}>
            يَالَطِيْفًا لَمْ يَزَلْ، اُلْطُفْ بِنَا فِيْمَا نَزَلَ، إِنَّكَ لَطِيْفٌ
            </Text>
            <Text style={styles.latin}>
            ' YA LATHIIFAN LAM YAZAL, ULTHUF BINAA FI MAA NAZAL,' INNAKA LATHIIFUN
            </Text>


            <Text style={styles.arab}>
            لَمْ تَزَلْ اُلْطُفْ بِنَا وَالْمُسْلِمِيْنَ ٣کالى
            </Text>
            <Text style={styles.latin}>
            'LAM TAZAL ULTHUF BINAA WAL MUSLIMIIN …..' ( DIBACA 3 KALI )
            </Text>
            <Text style={styles.arab}>۞۞۞</Text>


            <Text style={styles.arab}>
            يَااللهُ بِهَـا يَااللهُ بِهَـا يَااللهُ بِحُسْنِ الْخَاتِمَةْ .. ٣ كالى
            </Text>
            <Text style={styles.latin}>
            ' YA ALLOH BIHAA YA ALLOH BIHA YA ALLOH ' YA ALLOH BIHUSNIL KHOOTIMAH  …..  ( DIBACA 3 KALI )
            </Text>

        </View>



        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٠
            </Text>


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
            QUL HUALLOHU AHAD  ۞ ALLOHUS-SHOMAD  ۞ LAM YALID WA LAM YUULAD
            </Text>

            <Text style={styles.arab}>
            وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ.. ٣ كالی
            </Text>
            <Text style={styles.latin}>
            WA LAM YAKUL-LAHUU KUFUAN AHAD,  ۞ ( DIBACA 3 KALI )
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
            وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۞ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۞
            </Text>
            <Text style={styles.latin}>
            WA MIN SYARRI GHOOSIQIN IDZA WAQOB  ۞
            WA MIN SYARRIN-NAFFATSAATIFIL 'UQOD  ۞
            </Text>

            <Text style={styles.arab}>
            وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ۞
            </Text>
            <Text style={styles.latin}>
            WA MIN SYARRI HAASIDIN IDZA HASAD
            </Text>

            <Text style={styles.arab}>
            ١كالی
            </Text>
            <Text style={styles.latin}>
            ( DIBACA 1 KALI )
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣١
            </Text>


            <Text style={styles.arab}>
            بِسْــــمِ  اللهِ الرَّحْمٰــــنِ الرَّحِيْـــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            قُلْ أَعُوذُ بِرَبِّ النَّاسِ, مَلِكِ النَّاسِ
            </Text>
            <Text style={styles.latin}>
            QUL A'UUDZU BI ROBBIN-NAASS  ۞ MALIKIN-NAASS  ۞
            </Text>


            <Text style={styles.arab}>
            إِلٰهِ النَّاسِ ۞ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۞
            </Text>
            <Text style={styles.latin}>
            ILAAHIN-NAASS ۞ MIN SYARRIL-WASWAASIL KHONNAASS
            </Text>

            <Text style={styles.arab}>
            الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۞
            </Text>
            <Text style={styles.latin}>
            ALLADZII YUWAS WISU FIISHUDUURIN-NAASS ۞
            </Text>

            <Text style={styles.arab}>
            مِنَ الْجِنَّةِ وَالنَّاسِ .. ١كالی
            </Text>
            <Text style={styles.latin}>
            MINAL JINNATI WAN-NASS ۞ ( DIBACA 1 KALI )
            </Text>
            <Text style={styles.arab}>۞۞</Text>
            <Text style={styles.arab}>۞</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٢
            </Text>

            <Text style={styles.arab}>
            دُعَاءْ رَاتِبُ الْمُحَمَّدُ
            </Text>
            <Text style={styles.latin}>
            DOA ROTIBUL MUHAMMAD
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ  اللهِ الرَّحْمٰـــنِ الرَّحِيــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>


            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ,اَللّٰــهُمَّ صَلِّ عَلٰى سَـيِّدِنَا
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAHI ROBBIL'AALAMIIN, ALLOHUMMA SHOLLI 'ALAA SAYYIDINA
            </Text>

            <Text style={styles.arab}>
            مُحَمَّدٍ وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰى
            </Text>
            <Text style={styles.latin}>
            MUHAMMAD WA 'ALA  AALI SAYYIDINA MUHAMMAD KAMAA SHOLLAYTA 'ALAA
            </Text>

            <Text style={styles.arab}>
            سَيِّدِنَا إِبْرَاهِيْمَ وَعَلٰى اٰلِ سَيِّدِنَا إِبْرَاهِيْمَ وَبَارِكْ
            </Text>
            <Text style={styles.latin}>
            SAYYIDINA IBROHIIM WA 'ALAA ALI SAYYIDINAA IBROOHIIM, WA BAARIK
            </Text>

            <Text style={styles.arab}>
            عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدٍ كَـمَا
            </Text>
            <Text style={styles.latin}>
            'ALAA SAYYIDINA MUHAMMAD WA 'ALAA AALI SAYYIDINA MUHAMMAD, KAMAA
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٣
            </Text>


            <Text style={styles.arab}>
            بَارَكْتَ عَلٰى سَيِّدِنَــــا إِبْرَاهِيْمَ وَعَلٰى اٰلِ سَيِّدِنَـــا
            </Text>
            <Text style={styles.latin}>
            BAAROKTA 'ALAA SAYYIDINA IBROOHIIM WA 'ALAA AALI SAYYIDINA
            </Text>

            <Text style={styles.arab}>
            إِبْرَاهِيْمَ, فِى الْعٰلَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ.
            </Text>
            <Text style={styles.latin}>
            IBROOHIIM, FIL 'ALAMIINA INNAKA HAMIIDUM-MAJIID.
            </Text>

            <Text style={styles.arab}>
            اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلٰى سَيِّدِنَا مُحَمَّدٍ صَلاَةً تُخْرِجُنِى
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA SHOLLI  WA SALLIM 'ALAA SAYYIDINA  MUHAMMADIN SHOLAATAN TUKHURIJUNII
            </Text>

            <Text style={styles.arab}>
            بِهَا مِنْ ظُلُمَاتِ الوَهْمِ وَ تُكْرِمُنِى بِنُوْرِ اْلفَهْمِ
            </Text>
            <Text style={styles.latin}>
            BIHAA MIN DZHULUMAATIL-WAHMI, WA TUKRIMUNII BI NUURIL-FAHMI,
            </Text>

            <Text style={styles.arab}>
            وَتُوَضِعُ لِىمَا اُشْكِلَ حَتَّى يَفْهَمَ اِنَّكَ تَعْلَمُ وَلَا اَعْلَمُ
            </Text>
            <Text style={styles.latin}>
            WATUWADHI'U LII MAA USYKILA  HATTA YAFHAMA, ' INNAKA TA'LAMU , WA LAA  A'LAMU ,
            </Text>

            <Text style={styles.arab}>
            وَاَنْتَ عَلاَّمُ اْلغُيُوْبِ, اَللّٰهُمَّ إِنِّي أَعُوْذُ بِكَ مِنْ شَرِّ
            </Text>
            <Text style={styles.latin}>
            '  WA ANTA 'ALLAMUL-GHUYUUB' ALLOHUMMA INNII A'UDZUBIKA MIN SYARRI
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٤
            </Text>

            <Text style={styles.arab}>
            سَمْعِي، وَمِنْ شَرِّ بَصَرِي، وَمِنْ شَرِّ لِسَانِي, وَمِنْ
            </Text>
            <Text style={styles.latin}>
            SYAM'I, WA MIN SYARRI BASHORII,' WA MIN SYARRI LISAANII, WA MIN
            </Text>

            <Text style={styles.arab}>
            شَرِّ قَلْبِي, وَمِنْ شَرِّ مَنِيِّي, اَللّٰهُمَّ اِنَّا نَسْأَلُكَ سَلاَمَةً
            </Text>
            <Text style={styles.latin}>
            SYARRI QOLBII, WA MIN SYARRI MANIYYI ' ALLOHUMMA  INNAA NAS"ALUKA SALAAMATAN
            </Text>

            <Text style={styles.arab}>
            فِى اْلدِّيْنِ وَعَافِيَةً فِى الْجَسَدِ وَزِيَادَةً فِى الْعِلْمِ
            </Text>
            <Text style={styles.latin}>
            FIDDIIN, WA 'AFIATAN FIL JASAD, WA ZIYADATAN FIL'ILMI
            </Text>

            <Text style={styles.arab}>
            وَبَرَكَةً فِى الرِّزْقِ وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَحْمَةً عِنْدَ
            </Text>
            <Text style={styles.latin}>
            ' WA BAROKATAN FIRRIZQI, WA TAUBATAN QOBLAL MAUT ' WA ROHMATAN 'INDAL-
            </Text>

            <Text style={styles.arab}>
            الْمَوْتِ وَمَغْفِرَةً بَعْدَ الْمَوْتِ اَللّٰـهُمَّ هَوِّنْ عَلَيْنَا فِى
            </Text>
            <Text style={styles.latin}>
            MAUT, WA MAGHFIROTAN BA'DAL MAUT ALLOHUMMA HAWWIN 'ALAINAA FII
            </Text>


            <Text style={styles.arab}>
            سَكَرَاتِ الْمَوْتِ وَالنَّجَاةَ مِنَ النَّارِ وَالْعَفْوَ عِنْدَ
            </Text>
            <Text style={styles.latin}>
            SAKAROOTIL MAUT, WANNAJATA MINAN-NAR ' WAL 'AFWA 'INDAL-
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٥
            </Text>


            <Text style={styles.arab}>
            الْحِسَابِ, رَبَّنَااغْفِرْلَنَا وَلِوَالِدِيْنَا وَلِجَمِيْعِ الْمُسْلِمِيْنَ
            </Text>
            <Text style={styles.latin}>
            ' - HISAAB,  ROBBANAGH-FIR LANA, WA LIWAALIDIINA '  WA LIJAMII'IL MUSLIMIINA
            </Text>

            <Text style={styles.arab}>
            وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ الْأَحْيَاءِ مِنْهُمْ
            </Text>
            <Text style={styles.latin}>
            '  WAL MUSLIMAAT, WAL MU"MINIINA, WAL MU"MINAAT, AL-AHYA"I  MINHUM
            </Text>

            <Text style={styles.arab}>
            وَالْأَمْوَاتِ اِنَّكَ عَلٰى كُلِّ شَىْءٍ قَدِيْرُ, رَبَّنَا هَبْ لَنَا
            </Text>
            <Text style={styles.latin}>
            '  WAL AMWAAT, INNAKA 'ALAA KULLI SYA"IN  QODIIR ROBBANAA HAB- LANA
            </Text>

            <Text style={styles.arab}>
            مِنْ أَزْوَاجِنَا وَذُرِّيَاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِيْنَ
            </Text>
            <Text style={styles.latin}>
            '  MIN AZWAAJINA WA DZURRIYAATINA QURROTA A"YUN, WAJ'AL NA LIL MUTTAQIINA
            </Text>


            <Text style={styles.arab}>
            إِمَامًا,رَبَّنَا اٰتِنَا فِي الدُّنْيَاحَسَنَةً وَفِي الْاٰخِرَةِ حَسَنَةً
            </Text>
            <Text style={styles.latin}>
             IMAAMA,  ROBBANAA AATINA FIDUN'YA HASANAH WA FIL AKHIROTI HASANAH
            </Text>

            <Text style={styles.arab}>
            وَقِنَا عَذَابَ النَّارِ, اَللّٰـهُمَّ اغْفِرْلَنَا ذُنُوبَنَا وَكَفِّرْعَنَّا
            </Text>
            <Text style={styles.latin}>
            WA QINAA ADZAABANNAR, ALLOHUMMAGH-FIRLANAA DZUNUUBANAWA KAFFIR 'ANNAA
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٦
            </Text>


            <Text style={styles.arab}>
            سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ اْلأَبْرَارِ رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ
            </Text>
            <Text style={styles.latin}>
            SAYYI"AATINAA, WA TAWAFFANAA MA'AL ABROOR ROBBI'AL NII MUQIIMAS- SHOLAATI
            </Text>


            <Text style={styles.arab}>
            وَمِن ذُرِّيَّتِي, رَبَّنَا وَتَقَبَّلْ دُعَاءِ وَأَدْخِلْنَا الْجَنَّةَ
            </Text>
            <Text style={styles.latin}>
            WA MIN DZURRIYYATI, ROBBANAA WA TAQOBBAL DU'AA, WA ADKHILNAA JANNATA
            </Text>

            <Text style={styles.arab}>
            مَعَ اْلأَبْرَارِ يَاعَزِيْزُ يَاغَفَّارُ يَارَبَّ الْعٰلَمِيْنَ سُبْحَانَ
            </Text>
            <Text style={styles.latin}>
            MA'AL ABROOR , YAA 'AZIIZ YAA GHOFFAR YA ROBBAL 'AALAMIIN, SUBHAANA
            </Text>

            <Text style={styles.arab}>
            رَبِّكَ رَبِّ الْعِزَّةِ عمَّايَصِفُوْنْ وَسَلاَمٌ عَلَی الْمُرْسَلِيْنَ
            </Text>
            <Text style={styles.latin}>
                ROBBIKA ROBBIL 'IZZATI 'AMMA YASHIFUUN WA SALAAMUN 'ALAL MURSALIIN
            </Text>

            <Text style={styles.arab}>
            وَالْحَمْدُلِلّٰهِ رَبِّ الْعَالَمِيْن
            </Text>
            <Text style={styles.latin}>
            WAL HAMDULILLAHI ROBBIL'AALAMIIN
            </Text>
            <Text style={styles.arab}>۞۞۞</Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٧
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANNIR-ROHIIM
            </Text>
            <Text style={styles.latin}>
            SOLAWAT ROOTIBUL MUHAMMADU
            </Text>

            <Text style={styles.arab}>
            اَللّٰهُمَّ اِنَّانَسْاَلُكَ بِكَ اَنْ تُصَلِّيَ وَتُسَلِّمْ عَلٰی سَيِّدِنَا
            </Text>

            <Text style={styles.latin}>
            ALLOHUMMA INNAA NAS"ALUKA BIKA AN TUSHOLLIYA WA TUSALLIM 'ALAA SAYYIDINA
            </Text>

            <Text style={styles.arab}>
            مُحَمَّدٍ وَعَلٰی سٓاءِرِاْلاَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَعلٰی اٰلِهِمْ
            </Text>

            <Text style={styles.latin}>
            MUHAMMAD WA 'ALAA SAA"IRIL AMBIYAA"I WAL MURSALIIN  WA 'ALAA AALIHIM
            </Text>

            <Text style={styles.arab}>
            وَصَحْبِهِمْ اَجْمَعِيْنَ وَاَنْ تُعَمِّرَ رَاتِبَ اْلمُحَمَّدِ وَسَبِيْلِ
            </Text>

            <Text style={styles.latin}>
            WA SOHBIHIM AJMA'IIN,  WA ANTU'AMMIRO ROOTIBAL   MUHAMMAD, WA SABIILIL-
            </Text>

            <Text style={styles.arab}>
            الْخَيْرَاتِ اِلٰی يَوْمِ الدِّيْنِ وَاَنْ تَنْصُرَنَا وَتَفْتَحَ عَلَيْنَا
            </Text>

            <Text style={styles.latin}>
            KHOIROOTI  ILAA YAUMIDDIN WA ANTANSHURONAA,  WA TAFTAHA 'ALAINA
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>
            <Text style={styles.arab}>
                ٣٨
            </Text>

            <Text style={styles.arab}>
            وَتَرْزُقَنَا وَتَحْفَظَنَا وَتَغْفِرَلَنَا وَلِجَمِيْعِ الْمُسْلِمِيْنَ
            </Text>

            <Text style={styles.latin}>
            WA TARZUQONA, WA TAHFADZHO NA,  WA TAGHFIROLANAA WA LIJAMII'IL MUSLIMIIN
            </Text>

            <Text style={styles.arab}>
            يَااللّٰه... (٣ كالى)
            </Text>

            <Text style={styles.latin}>
            YA ALLOH ( DIBACA 3 KALI )
            </Text>


            <Text style={styles.arab}>
            يَاحَيُّ يَاقَيُّمُ لَااِلَهَ اِلّا اَنْتَ سُبْحَانَكَ
            </Text>

            <Text style={styles.latin}>
            YA HAYYU YA QOYYUM LAA ILAAHA ILLA ANTA SUBHAANAKA
            </Text>

            <Text style={styles.arab}>
            اِنِّیْ كُنْتُ مِنَ الظَّالِمِيْنَ….(٧كالى)
            </Text>

            <Text style={styles.latin}>
            INNI KUNTU MINADZ-ZOOLIMIIN ..
            </Text>
            <Text style={styles.latin}>
            ( DIBACA 7X DARI AWAL SHOLAWAT SAMPE AKHIR )
            </Text>

            <Text style={styles.arab}>۞۞۞۞۞</Text>
            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞</Text>
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
        fontSize: heightPercentageToDP('1.7%'),
        fontWeight: 'bold',
        marginBottom: heightPercentageToDP('4%'),
        alignSelf: 'center',
        fontFamily: 'sans-serif-bold',
        textAlign:'center',
        letterSpacing: 1.5,
    },
});
