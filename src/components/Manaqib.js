import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Manaqib = () => {
  return (
    <View style={{flex:1}}>
       <View style={{
           alignItems: 'center', justifyContent: 'center',
       }}>
           <Image
               source={require('../Assets/images/manaqib.png')}
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

            <Text style={styles.arab}>٧١</Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            مناقب
            </Text>
            <Text style={styles.latin}>
            MANAAQIB
            </Text>

            <Text style={styles.arab}>
            الشيخ المرشد فهمى المحمّد خيرق الله
            </Text>
            <Text style={styles.latin}>
            AS-SYEIKH AL-MURSYD FAHMI AL-MUHAMMAD KHOIRUQULLOH
            </Text>

            <Text style={styles.arab}>
            إِلٰى حَضْرَةِ النَّبِىِّ الْمُصْطَفٰى صَلَّى اللهُ عَلَيْهِ
            </Text>
            <Text style={styles.latin}>
            ILAA HADHROTIN-NABIYYIL-MUSHTOFAA SHOLLALLOH ALAIHI
            </Text>

            <Text style={styles.arab}>
            وَسَلَّمَ وَاٰلِهِ وَاَزْوَاجِهِ وَاَوْلاَدِهِ وَذُرِّيَّاتِهِ
            </Text>
            <Text style={styles.latin}>
            WA SALLAM WA AALIHI WA AZWAAJIHI WA AULAADIHI WA DZURRIYAATIHI
            </Text>

            <Text style={styles.arab}>
            اَلفَاتِحَةْ …
            </Text>
            <Text style={styles.latin}>
            ALFAATIHAH..  ( Baca Surat Alfaatihah 1x )
            </Text>


        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٢</Text>
            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANNIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ۞الرَّحْمٰنِ الرَّحِيمِ۞
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAAHIROBBIL'AALAMIIN  ۞   ARROHMAANIR-ROHIIM  ۞
            </Text>

            <Text style={styles.arab}>
            ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ۞
            </Text>
            <Text style={styles.latin}>
            MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA   KANASTA'IIN   ۞
            </Text>

            <Text style={styles.arab}>
            اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞صِرَاطَ الَّذِينَ اَنْعَمْتَ
            </Text>
            <Text style={styles.latin}>
            IHDINAS-SHIROOTOL MUSTAQIIM   ۞  SHIROOTOL-LADZIINA AN 'AMTA
            </Text>

            <Text style={styles.arab}>
            غَيْرِالْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ
            </Text>
            <Text style={styles.latin}>
            ALAIHIM, GHOIRIL MAGHDHUUBI  'ALAIHIM   WA LAZDHOLLIIIN  ۞
            </Text>


            <Text style={styles.arab}>
            اٰمِينْ
            </Text>
            <Text style={styles.latin}>
            AAMIIN
            </Text>

            <Text style={styles.arab}>
            ۞۞۞
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٣</Text>

            <Text style={styles.arab}>
            اَغِـثْـنَا  اَغِـثْـنَا  اَغِـثْـنَا  يَا الله..  ٢١كالى
            </Text>
            <Text style={styles.latin}>
            AGHIS-NAA AGHIS-NAA AGHIS-NAA YAA ALLOH   21X
            </Text>


            <Text style={styles.arab}>
            صَلَّى اللهُ عَلَى مُحَمَّدٍ    ١٠٠ كالى
            </Text>
            <Text style={styles.latin}>
            SHOLLALLOHU  'ALAA MUHAMMAD  100X
            </Text>


            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMAN-SHURNAA WA SYAFAA'ATIR-ROSHUULILLAHI
            </Text>


            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            SHOLLALLOHU  'ALAIHI WA SALLAM
            </Text>

            <Text style={styles.arab}>
            لَقَدْ جٓاءَ كُمْ رَسُولٌ مِّنْ أَنْفُسِكُمْ عَزِيْزٌ
            </Text>
            <Text style={styles.latin}>
            LAQOD JAA"AKUM ROSUULUM-MIN ANFUSIKUM 'AZIIZUN
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِ مَا عَنِتُّمْ حَرِيْصٌ عَلَيْكُمْ بِالْمُؤْمِنِيْنَ
            </Text>
            <Text style={styles.latin}>
            'ALAIHI MAA 'ANITTUM HARIISHUN 'ALAIKUM BIL MU"MINIIN NA
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٤</Text>

            <Text style={styles.arab}>
            رَءُوْفٌ رَّحِيْمٌ  ۖ
            </Text>
            <Text style={styles.latin}>
            'RO"UUFUR-ROHIIM
            </Text>


            <Text style={styles.arab}>
            فَإِنْ تَوَلَّوْا فَقُلْ حَسْبِيَ اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ ۖ
            </Text>
            <Text style={styles.latin}>
            'FA IN-TAWALLAU FA QULL HASBIYALLOHU  LAA 'ILAA HA ILLA HUWA
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِ تَوَكَّلْتُ ۖ
            </Text>
            <Text style={styles.latin}>
            'ALAIHI TAWAKKALTU
            </Text>

            <Text style={styles.arab}>
            وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ
            </Text>
            <Text style={styles.latin}>
            'WA HUWA ROBBUL 'ARSYL 'ADZIM
            </Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>


            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٥</Text>

            <Text style={styles.arab}>
            وَخُصُوْصًا إِلٰى نَبِيُّ اللهُ اٰدَمٌ  وَ اِدْرِيْس
            </Text>
            <Text style={styles.latin}>
            'WA KHUSUSHON ILAA NABIYYULLOH AADAM WA IDRISS
            </Text>

            <Text style={styles.arab}>
            وَاِبْرَاهِيْمٌ  وَاِسْمَاعِيْلٌ  شَيْءٌ ِلله لَهُمُ
            </Text>
            <Text style={styles.latin}>
            'WA IBROOHIM WA ISMAA'IL  SYAI"ULLILLAHI LAHUMUL-
            </Text>

            <Text style={styles.arab}>
            الفَاتِحَةْ
            </Text>
            <Text style={styles.latin}>
            'AL-FAATIHAH
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيْــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمٰنِ الرَّحِيمِ ۞
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAAHIROBBIL'AALAMIIN  ۞   ARROHMAANIR-ROHIIM  ۞
            </Text>

            <Text style={styles.arab}>
            ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ۞
            </Text>
            <Text style={styles.latin}>
            MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA   KANASTA'IIN   ۞
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٦</Text>

            <Text style={styles.arab}>
            اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞ صِرَاطَ الَّذِينَ اَنْعَمْتَ
            </Text>
            <Text style={styles.latin}>
            IHDINAS-SHIROOTOL MUSTAQIIM   ۞  SHIROOTOL-LADZIINA AN 'AMTA
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِمْ غَيْرِالْمَغْضُوبِ وَلاَالضَّآلِّينَ
            </Text>
            <Text style={styles.latin}>
            ALAIHIM, GHOIRIL MAGHDHUUBI  'ALAIHIM   WA LAZDHOLLIIIN  ۞
            </Text>

            <Text style={styles.arab}>
            اٰمِينْ
            </Text>
            <Text style={styles.latin}>
            AAMIIN
            </Text>

            <Text style={styles.arab}>
            ۞۞۞
            </Text>

            <Text style={styles.arab}>
            وَخُصُوْصًا إِلٰى نَبِيُّ اللهُ أُوْلُوْلْ الْعَزْمِ نَبِيُ اللهُ
            </Text>
            <Text style={styles.latin}>
            'WA KHUSUSHON ILAA NABIYYULLOHU ULUUL 'AZMI 'NABIYYULLOH
            </Text>

            <Text style={styles.arab}>
            مُحَمَّدٌ صلى الله عليه وسلم  وَاِبْرَاهِيْمُ  وَمُوْسٰى
            </Text>
            <Text style={styles.latin}>
            ' MUHAMMAD SHOLLALLOHU 'ALAIHI WA SALLAM 'WA IBROOHIM WA MUUSAA
            </Text>

            <Text style={styles.arab}>
            وَعِيْسٰى  ونُوْحٌ عَلَيْهِ سَلَّم
            </Text>
            <Text style={styles.latin}>
            'WA 'IISA WA NUUH 'ALAIH SALAM
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٧</Text>

            <Text style={styles.arab}>
            شَيْءٌ ِلله لَهُمُ  الفَاتِحَةْ
            </Text>
            <Text style={styles.latin}>
            'SYAI"UL-LILLAHI LAHUMUL-FAATIHAH
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيْــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHI-ROHMAANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمٰنِ الرَّحِيمِ ۞
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAAHIROBBIL'AALAMIIN  ۞   ARROHMAANIR-ROHIIM  ۞
            </Text>

            <Text style={styles.arab}>
            ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ۞
            </Text>
            <Text style={styles.latin}>
            MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA   KANASTA'IIN   ۞
            </Text>

            <Text style={styles.arab}>
            اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞ صِرَاطَ الَّذِينَ اَنْعَمْتَ
            </Text>
            <Text style={styles.latin}>
            IHDINAS-SHIROOTOL MUSTAQIIM   ۞  SHIROOTOL-LADZIINA AN 'AMTA
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ ۞
            </Text>
            <Text style={styles.latin}>
            ALAIHIM, GHOIRIL MAGHDHUUBI  'ALAIHIM WALADDHOOLLIIIIN
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٨</Text>
            <Text style={styles.arab}>
            اٰمِينْ
            </Text>
            <Text style={styles.latin}>
            AAMIIN
            </Text>
            <Text style={styles.arab}>
            ۞۞۞
            </Text>

            <Text style={styles.arab}>
            وَخُصُوْصًا إِلٰى الْمَلآىِٔكَةِ الْمُقَرَّبِينْ
            </Text>
            <Text style={styles.latin}>
            'WA KHUSUSHON ILAL-MALAA"IKATIL MUQORROBIIN
            </Text>

            <Text style={styles.arab}>
            وَجِبْرِيْل وَمِيْكَاىِٔل وَاِسْرَافِيْل وَعِزْرَاىِٔيْل
            </Text>
            <Text style={styles.latin}>
            'WA JIBRILL WA MIKAAIL WA ISROOFILL WA 'IZROO"IL
            </Text>

            <Text style={styles.arab}>
            شيْءٌ ِلله لَهُمُ    الفَاتِحَةْ
            </Text>
            <Text style={styles.latin}>
            'SYAI"ULLILLAHI LAHUMUL-FAATIHAH
            </Text>

            <Text style={styles.arab}>
            ۞۞۞
            </Text>


            <Text style={styles.arab}>
            بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيْــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمٰنِ الرَّحِيمِ ۞
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAAHIROBBIL'AALAMIIN  ۞   ARROHMAANIR-ROHIIM  ۞
            </Text>

            <Text style={styles.arab}>
            ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ۞
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧٩</Text>
            <Text style={styles.latin}>
            MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA   KANASTA'IIN   ۞
            </Text>
            <Text style={styles.arab}>
            اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞ صِرَاطَ الَّذِينَ اَنْعَمْتَ
            </Text>
            <Text style={styles.latin}>
            IHDINAS-SHIROOTOL MUSTAQIIM   ۞  SHIROOTOL-LADZIINA AN 'AMTA
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ ۞
            </Text>
            <Text style={styles.latin}>
            ALAIHIM, GHOIRIL MAGHDHUUBI  'ALAIHIM   WA LAZDHOLLIIIN  ۞
            </Text>

            <Text style={styles.arab}>
            اٰمِينْ
            </Text>
            <Text style={styles.latin}>
            AAMIIN
            </Text>
            <Text style={styles.arab}>
            ۞۞۞
            </Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>

            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٠</Text>

            <Text style={styles.arab}>
            وَخُصُوْصًا شَيْخٌ اَلْمُرْشِدْ فَهْمِيْ اَلْمُحَمَّدِ
            </Text>
            <Text style={styles.latin}>
            'WA KHUSUUSON SYEIKH AL-MURSYID FAHMI AL-MUHAMMAD
            </Text>

            <Text style={styles.arab}>
            خَيْرُقُ اللّٰهِ وَاُصُوْلِهِ وَفُرُوْعِهِ اَنَّ اللّٰهَ يُعْلِي
            </Text>
            <Text style={styles.latin}>
            'KHOIRUQULLOH WA USHUULIHI WA FURU'IHI ANNALLOHA YU'LII
            </Text>


            <Text style={styles.arab}>
            دَرَجَاتِهِ فِيْ الْجَنَّةِ وَاَنْ يُّعِدَ عَلَيْنَا مِنْ بَرَكَاْتِهِ
            </Text>
            <Text style={styles.latin}>
            'DAROJAATIHI FIL JANNAH WA AY-YU'IDA 'ALAINA ' MIN BAROKAATIHI
            </Text>

            <Text style={styles.arab}>
            وَاَسْرَارِهِ فِيْ الدُّنْيَا وَالْأَخِرَةِ شَيْءٌ لِلّٰهِ
            </Text>
            <Text style={styles.latin}>
            'WA ASROORIHI FIDDUNYA WAL "AAKHIROH 'SYAI"ULLILLAHI
            </Text>

            <Text style={styles.arab}>
            لَهُمُ..  الفَاتِحَة
            </Text>
            <Text style={styles.latin}>
            'LAHUMUL-FAATIHAH
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيْــــمِ
            </Text>
            <Text style={styles.latin}>
            ' BISMILLAHIR-ROHMANIR-ROHIIM
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨١</Text>

            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمٰنِ الرَّحِيمِ ۞
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAAHIROBBIL'AALAMIIN  ۞   ARROHMAANIR-ROHIIM  ۞
            </Text>


            <Text style={styles.arab}>
            ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ۞
            </Text>
            <Text style={styles.latin}>
            MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA   KANASTA'IIN   ۞
            </Text>

            <Text style={styles.arab}>
            اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞ صِرَاطَ الَّذِينَ اَنْعَمْتَ
            </Text>
            <Text style={styles.latin}>
            IHDINAS-SHIROOTOL MUSTAQIIM   ۞  SHIROOTOL-LADZIINA AN 'AMTA
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ ۞
            </Text>
            <Text style={styles.latin}>
            ALAIHIM, GHOIRIL MAGHDHUUBI  'ALAIHIM   WA LAZDHOLLIIIN  ۞
            </Text>


            <Text style={styles.arab}>
            اٰمِينْ
            </Text>
            <Text style={styles.latin}>
            AAMIIN
            </Text>

            <Text style={styles.arab}>
            ۞۞۞
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٢</Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>

            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>

            <Text style={styles.arab}>
            يَا اللهُ   يَا اللهُ   يَا اللهُ
            </Text>
            <Text style={styles.latin}>
            'YAA ALLOH   YAA ALLOH   YAA ALLOH
            </Text>

            <Text style={styles.arab}>
            يَا خَالِقُ الْمَخلُوْقِ ،
            </Text>
            <Text style={styles.latin}>
            'YAA KHOOLIQUL MAKHLUUQ
            </Text>

            <Text style={styles.arab}>
            يَا رَحْمَنُ  يَارَحْمَنُ  يَارَحْمَنُ
            </Text>
            <Text style={styles.latin}>
            'YAA ROHMAN YAA ROHMAN YAA ROHMAN
            </Text>
            <Text style={styles.arab}>
            يَاصَمِيْدُ الْمَخْلُوْقِ،
            </Text>
            <Text style={styles.latin}>
            'YAA SHOMIIDUL MAKHLUUQ
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٣</Text>

            <Text style={styles.arab}>
            يَاسَالِمُ, يَاسَالِمُ ،يَاسَالِمُ  يَااَحْسَنُ سَالِمًا،
            </Text>
            <Text style={styles.latin}>
            'YAA SAALIM, YAA SAALIM, YAA SAALIM YAA AHSANU SAALIMAN
            </Text>

            <Text style={styles.arab}>
            يَاصَبُوْرُ، يَاصَبُوْرُ، يَاصَبُوْرُ
            </Text>
            <Text style={styles.latin}>
            'YAA SHOBUUR, YAA SHOBUUR, YAA SHOBUUR
            </Text>

            <Text style={styles.arab}>
            يَاخَيْرُ المَصْبُوْرِ  يَامَالِكُ، يَاماَلِكُ يَامَالِكُ
            </Text>
            <Text style={styles.latin}>
            'YAA KHOIRUL MASHBUUR  YAA MAALIK  YAA MAALIK  YAA MAALIK
            </Text>

            <Text style={styles.arab}>
            يَامَالِكُ المُلْكُ ذُوْ الجَلَالِ واْلاِكْرَامِ
            </Text>
            <Text style={styles.latin}>
            'YAA MAALIKUL MULKU  DZUL JALAALI WAL IKROOM
            </Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>


            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٤</Text>

            <Text style={styles.arab}>
            وَقَالَ اللهُ تَعَالٰى بِيْهِ الْكَرِيْمِ عَنْ اَهْلِ الْبَيْتِ ،
            </Text>
            <Text style={styles.latin}>
            'WA QOOLAL-LOOHU TA'AALAA BIIHIL-KARIIM 'AN AHLIL BAIT
            </Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            وَأَطِعْنَ اللهَ وَرَسُولَهُ إِنَّمَا يُرِيْدُ اللَّهُ
            </Text>
            <Text style={styles.latin}>
            WA ATHI'NALLOOHA WA ROSUULAHU INNAMAA  YURIDULLOOHU
            </Text>

            <Text style={styles.arab}>
            لِيُذْهِبَ عَنْكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ
            </Text>
            <Text style={styles.latin}>
            LIYUDZHIBA 'ANGKUMUR-RIJSA "AHLAL BAIT
            </Text>

            <Text style={styles.arab}>
            وَيُطَهِّرَكُمْ تَطْهِيْرًا
            </Text>
            <Text style={styles.latin}>
            WA YUTHOHHIROKUM THAT'HIIRO
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٥</Text>

            <Text style={styles.arab}>
            وَقَالَ الرَّسُوْلُ اللهِ
            </Text>
            <Text style={styles.latin}>
            WA QOOLAR-ROSHUULULLOH
            </Text>

            <Text style={styles.arab}>
             أَمَّا بَعْدُ أَلاَ أَيُّهَا النَّاسُ فَإِنَّمَا أَنَا بَشَرٌ
            </Text>
            <Text style={styles.latin}>
            AMMA BA'DU  ALAA AYYUHANNAAS FA INNAMAA  ANAA BASYARUN
            </Text>

            <Text style={styles.arab}>
            يُوْشِكُ أَنْ يَأْتِيَ رَسُوْلَ رَبِّي فَأُجِيْبَ وَأَنَا
            </Text>
            <Text style={styles.latin}>
            YUUSIKU AY-YA"TIA ROSUULA ROBBI FA UJIIBA WA ANAA
            </Text>

            <Text style={styles.arab}>
            تَارِكٌ فِيكُمْ ثَقَلَيْنِ أَوَّلُهُمَا كِتَابُ اللَّهِ فِيْهِ
            </Text>
            <Text style={styles.latin}>
            TAARIKUN FIIKUM TSAQOLAIN AWWALUHUMAA KITAABULLOHI FIIHIL-
            </Text>


            <Text style={styles.arab}>
            الْهُدَى وَالنُّوْرُ فَخُذُوْا بِكِتَابِ اللَّهِ
            </Text>
            <Text style={styles.latin}>
            HUDAA WAN-NUUR  FAKHUDZUU BI KITTABILLAH
            </Text>

            <Text style={styles.arab}>
            وَاسْتَمْسِكُوْا بِهِ ‏‏ فَحَثَّ عَلَى كِتَابِ اللَّهِ
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٦</Text>

            <Text style={styles.latin}>
            WASTAMSIKUU BIHI FA HASTSA 'ALAA KITAABILLAH
            </Text>

            <Text style={styles.arab}>
            وَرَغِّبَ فِيهِ ثُمَّ قَالَ وَأَهْلُ بَيْتِي
            </Text>
            <Text style={styles.latin}>
            WAROGHIBA FIIHI TSUMMA QOOLA WA AHLU BAITI
            </Text>

            <Text style={styles.arab}>
            أَذَكِّرُكُمُ اللَّهَ فِيْ أَهْلِ بَيْتِي
            </Text>
            <Text style={styles.latin}>
            ADZAKKIRUKUMULLOHA FII AHLI BAITII
            </Text>

            <Text style={styles.arab}>
            أَذَكِّرُكُمُ اللَّهَ فِيْ أَهْلِ بَيْتِي
            </Text>
            <Text style={styles.latin}>
            ADZAKKIRUKUMULLOHA FII AHLI BAITII
            </Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>

            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            'BISMILLAHIRROHMAANIR-ROHIIM
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٧</Text>

            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ ثُمَّ الصَّلَاةُ عَلَى
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAHI ROBBIL'AALAMIIN  TSUMMAS-SHOLAATU 'ALAR-
            </Text>


            <Text style={styles.arab}>
            الرَّسُوْلِ الْمُصْطَفٰى وَاٰلهِ وَصَحْبِهِ اَجْمَعِيْنَ
            </Text>
            <Text style={styles.latin}>
            ROSUULIL-MUSHTOFAA WA AALIHI WA SOHBIHI AJMA'IIN
            </Text>

            <Text style={styles.arab}>
            اَمَّا بَعْدُ رَأَيْتُ نُوْرً مُحَمَّدً صَّلَّى اللهُ عَلَيْهِ
            </Text>
            <Text style={styles.latin}>
            AMMAA BA'DU ROAITU NUURON MUHAMMADAN  SOLLALLOOHU ALAIHI
            </Text>

            <Text style={styles.arab}>
            وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            WA SALLAM
            </Text>


            <Text style={styles.arab}>
            وُلِدَ فِىْ هٰذَا زَمَنِ الطّرِيْقَةِ الفَهَمِيَّةِ،
            </Text>
            <Text style={styles.latin}>
            WULIDA FII HAADZAZ-ZAMANIT-THORIQOTIL FAHAMIYYAH
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٨</Text>

            <Text style={styles.arab}>
            لاَاِلٰهَ اِلَّا اللهُ مُحَمَّدُ الرَّسُوْلُ اللهِ،
            </Text>
            <Text style={styles.latin}>
            LAAILAAHA ILLALLOH MUHAMMADUR-ROSUULULLOH
            </Text>

            <Text style={styles.arab}>
            لاَاِلٰهَ اِلَّا اللهُ مُحَمَّدُ الرَّسُوْلُ اللهِ،
            </Text>
            <Text style={styles.latin}>
            LAAILAAHA ILLALLOH MUHAMMADUR-ROSUULULLOH
            </Text>

            <Text style={styles.arab}>
            لاَاِلٰهَ اِلَّا اللهُ مُحَمَّدُ الرَّسُوْلُ اللهِ،
            </Text>
            <Text style={styles.latin}>
            LAAILAAHA ILLALLOH MUHAMMADUR-ROSUULULLOH
            </Text>

            <Text style={styles.arab}>
            شَيْخٌ فَهْمِيْ مُرْشِدُ الطَّرِيْقَةِ الفَهَمِيَّةِ،
            </Text>
            <Text style={styles.latin}>
            SYAIKH FAHMI MURSYIDUT-THORIQOTIL FAHAMIIYAH
            </Text>

            <Text style={styles.arab}>
            وَهَذَا حَقٌّ، حَقٌّ، حَقٌّ،
            </Text>
            <Text style={styles.latin}>
            WA HADZAA HAQ , HAQ , HAQ
            </Text>

            <Text style={styles.arab}>
            وَلَيْسَ كَتَبَ بِهِدَايَةِ اللّٰهِ وَرَحْمَةِ اللّٰهِ ،
            </Text>
            <Text style={styles.latin}>
            WA LAISA KATABA BIHIDAYATILLAHI WA ROHMATILLAH
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨٩</Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            قَدْ رَاَيْتُ الْمَلاَىِٔكَةَ مِنَ السَّمَاءِ نَزَلَ
            </Text>
            <Text style={styles.latin}>
            QOD ROAITUL-MALAAIKATA MINAS-SAMAAI NAZALAL-
            </Text>

            <Text style={styles.arab}>
            الْاَرْضَ، يَقُوْلُوْنَ الْمَلَاىِٔكَةَ قَدْ رَضِيْتُ
            </Text>
            <Text style={styles.latin}>
            ARDHO, YAQUULUUNAL-MALAAIKATA QOD RODHIITU
            </Text>

            <Text style={styles.arab}>
            شَيْخُ الْمُرْشِدُ فَهْمِى المُحَمَّدْ خَيْرُقُ اللهِ
            </Text>
            <Text style={styles.latin}>
            SYAIKHUL MURSYID FAHMI AL-MUHAMMAD KHOIRUQULLOH
            </Text>

            <Text style={styles.arab}>
            هُوَ مُرْشِدُ الطَّرِيْقَةِ الْفَهَمِيَّةِ
            </Text>
            <Text style={styles.latin}>
            HUWA MURSYIDUT-THORIIQOTIL-FAHAMIYYAH
            </Text>

            <Text style={styles.arab}>
            اَسْتَغْفِرُ اللهَ  وَاَتُوْبُ اِلَيْهِ،
            </Text>
            <Text style={styles.latin}>
            ASTAGHFIRULLOOHA WA ATUUBU ILAIIH
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٠</Text>

            <Text style={styles.arab}>
            اَسْتَغْفِرُ اللهَ  وَاَتُوْبُ اِلَيْهِ،
            </Text>
            <Text style={styles.latin}>
            ASTAGHFIRULLOOHA WA ATUUBU ILAIIH
            </Text>

            <Text style={styles.arab}>
            اَسْتَغْفِرُ اللهَ  وَاَتُوْبُ اِلَيْهِ،
            </Text>
            <Text style={styles.latin}>
            ASTAGHFIRULLOOHA WA ATUUBU ILAIIH
            </Text>

            <Text style={styles.arab}>
            كَانَ قَالَ اللهُ تَعَالٰى  اِلَى الْمَلَاىِٔكَةِ
            </Text>
            <Text style={styles.latin}>
            KAANA QOOLALLOOHU TA'AALAA ILAL-MALAAIKAH
            </Text>

            <Text style={styles.arab}>
            وَالنَّبِيِّنَ وَخُصُوْصَ النَّبِيْ مُحَمَّدْ صلى الله عليه وسلم
            </Text>
            <Text style={styles.latin}>
            WANNABIYYIINA WA KHUSUUSON-NABII MUHAMMAD SOLLALLOHU 'ALAIHI WA SALLAM
            </Text>

            <Text style={styles.arab}>
            رَضِيْتُ اللهَ اِلَيْهِ،
            </Text>
            <Text style={styles.latin}>
            RODHIITULLOHA ILAIIH
            </Text>

            <Text style={styles.arab}>
            اَستَغْفِرُ اللهَ  مِنَ الْخَطٰايَا
            </Text>
            <Text style={styles.latin}>
            ASTAGFIRULLOOH MINAL KHOTHOOYAA
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩١</Text>


            <Text style={styles.arab}>
            يَا اللهُ كَرِيْمَ نَزَلَ الْبَرَكَةَ
            </Text>
            <Text style={styles.latin}>
            YAA ALLOOHU KARIIMA NAZALAL-BAROKAH
            </Text>

            <Text style={styles.arab}>
            اِلَى الْمُرْشِدِ فَهْمِى المُحَمَّدُ خَيْرُقُ اللهِ ،
            </Text>
            <Text style={styles.latin}>
            ILAL-MURSYIDI FAHMI AL-MUHAMMAD KHOIRUQULLOH
            </Text>

            <Text style={styles.arab}>
            اَللهُ يَا اٰمِيْنَ، اَللهُ يَا اٰمِيْنَ،
            </Text>
            <Text style={styles.latin}>
            ALLOOHU YAA AAMIIN, ALLOOHU YAA AAMIIN
            </Text>

            <Text style={styles.arab}>
            اَللهُ يَا اٰمِيْنَ،  يَانَصِيْرًا، يَانَصِيْرًا،
            </Text>
            <Text style={styles.latin}>
            ALLOOHU YAA AAMIIN, YAA NASHIIRON, YAA NASHIIRON
            </Text>

            <Text style={styles.arab}>
            وَصَلَّى اللهُ  عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            WA SHOLLALLOHU 'ALAIHI WA SALLAM
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٢</Text>
            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            اِعْلَمْ وَهُوَ شَيْخُ الْمُرْشِدْ فَهْمِيْ المُحَمَّدْ
            </Text>
            <Text style={styles.latin}>
            I'LAM WAHUWA SYAIKH AL-MURSYD FAHMI AL-MUHAMMAD
            </Text>

            <Text style={styles.arab}>
            خَيْرُقُ اللهِ، يُؤْتِى الْحِكْمَةَ، وَفِىْ زَمَنِهِ،
            </Text>
            <Text style={styles.latin}>
            KHOIRUQULLOH, YU"TIL-HIKMAH, WA FII ZAMANIHI
            </Text>

            <Text style={styles.arab}>
            وَفِىْ اَمَنِهِ اِمَامُ الطَّرِيْقَةِ الْفَهَمِيَّةِ،
            </Text>
            <Text style={styles.latin}>
            WA FII AMANIHI IMAAMUT-THORIQOTIL-FAHAMIYYAH
            </Text>

            <Text style={styles.arab}>
            وَجَمِيْعُ الْمَلآىِٔكةِ وَالنَّبِيُّونَ وَالْاَوْلِيَاءِ
            </Text>
            <Text style={styles.latin}>
            WA JAMII'UL MALAAIKATI WAN-NABIYYUNA , WAL-AULIYAAI
            </Text>

            <Text style={styles.arab}>
            يُشْهِدُوْنَ اِنَّهُ شَيْخُ الْمُرْشِدْ فهْمِىْ
            </Text>
            <Text style={styles.latin}>
            YUSYHIDUUNA INNAHU SYAIKHUL-MURSYD FAHMI
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٣</Text>

            <Text style={styles.arab}>
            خَيْرُقُ اللهِ اِمَامُ الطَّرِيْقَةِ الفَهَمِيَّةِ،
            </Text>
            <Text style={styles.latin}>
            KHOIRUQULLOH IMAAMUT-THORIIQOTIL FAHAMIYYAH
            </Text>

            <Text style={styles.arab}>
            وَيُعَلِّمُ وَيَدْعُ اِلَى السُّنَّةِ الرَّسُوْلِ اللهِ
            </Text>
            <Text style={styles.latin}>
            WA YU'ALLIMU WA YAD'U ILAS-SUNNATIR-ROSUULILLAH
            </Text>

            <Text style={styles.arab}>
            صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            SOLLALLOHU 'ALAIHI WA SALLAM
            </Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>

            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>

            <Text style={styles.arab}>
            يَارَبِّ صَلِّ عَلٰى مُحَمَّدْ
            </Text>
            <Text style={styles.latin}>
            'YAA ROBBI SHOLLI 'ALAA MUHAMMA
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٤</Text>

            <Text style={styles.arab}>
            يَارَبِّ صَلِّ عَلَيْهِ وَسَلِّمْ
            </Text>
            <Text style={styles.latin}>
            'YAA ROBBI SHOLLI 'ALAIHI WA SALLIM
            </Text>

            <Text style={styles.arab}>
            يَارَبِّ خَرِجْنَا مِنَ الظُّلُمَاتِ
            </Text>
            <Text style={styles.latin}>
            'YAA ROBBI KHORIJNA MINADZHULUMAAT
            </Text>

            <Text style={styles.arab}>
            يَارَبِّ تُكْرِمْنَا بِنُوْرِ الْفَهْمِى،
            </Text>
            <Text style={styles.latin}>
            'YAA ROBBI TUKRIMNAA BINUURIL-FAHMI
            </Text>

            <Text style={styles.arab}>
            يَارَبِّ صَلِّ عَلٰى مُحَمَّدْ
            </Text>
            <Text style={styles.latin}>
            'YAA ROBBI SHOLLI 'ALAA MUHAMMAD
            </Text>

            <Text style={styles.arab}>
            يَارَبِّ صَلِّ عَلَيْهِ وَسَلِّمْ
            </Text>
            <Text style={styles.latin}>
            'YAA ROBBI SHOLLI 'ALAIHI WA SALLIM
            </Text>

            <Text style={styles.arab}>
            يَارَبِّ بِبَرْكَتِهِمْ  يَارَبِّ سَعَادَتِهِمْ،
            </Text>
            <Text style={styles.latin}>
            'YAA ROBBI BIBAROKATIHIM YAA ROBBI SA'AADATIHIM
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٥</Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>

            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>

            <Text style={styles.arab}>
            اَلحَمْدُلِلّٰهِ وَنُوْرِ مُحَمَّدٍ صَلَّى اللهُ
            </Text>
            <Text style={styles.latin}>
            'ALHAMDULILLAHI WA NUURI MUHAMMADIN SOLLALLOHU
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            'ALAIHI WA SALLAM
            </Text>

            <Text style={styles.arab}>
            بَرَكَتِهِ الطَّرِيْقَةِ الْفَهَمِيَّةِ بِمَوْجِدِ زَمَنِ
            </Text>
            <Text style={styles.latin}>
            'BAROKATIHI-THORIIQOTIL-FAHAMIYYAH BIMAUJIDI ZAMANI
            </Text>

            <Text style={styles.arab}>
            رَحْمَةٍ عَلَى الاِمَامِ الطَرِيْقَةِ الْفَهَمِيَّةِ
            </Text>
            <Text style={styles.latin}>
            'ROHMATIN 'ALAL-IMAAMIT-THORIIQOTIL FAHAMIYAH
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٦</Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>

            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            نَظِيْرٌ اَكْرَمَةٌ، فِىْ الطَّرِيْقَة الفَهَمِيَّةِ
            </Text>
            <Text style={styles.latin}>
            NADZHIIRUN AKROMATUN , FIT-THORIIQOTIL FAHAMIYYAH
            </Text>

            <Text style={styles.arab}>
            حَقِيْقَةُ الشَّرِيْعةِ،
            </Text>
            <Text style={styles.latin}>
            HAQIIQOTUS-SYARRII'ATI
            </Text>

            <Text style={styles.arab}>
            وَشَرِيْعَةُ الحَقِيْقَةِ،
            </Text>
            <Text style={styles.latin}>
            WA SYARI'ATUL HAQIIQOH
            </Text>
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٧</Text>

            <Text style={styles.arab}>
            نَسَبُ الطَّرِيْقَةِ الفَهَمِيَّةِ
            </Text>
            <Text style={styles.latin}>
            NASABUT-THORIIQOTIL FAHAMIYYAH
            </Text>

            <Text style={styles.arab}>
            نَبِيُّ مُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            NABIYYU MUHAMMADUN SHOLLALLOHU 'ALAIHI WA SALLAM
            </Text>

            <Text style={styles.arab}>
            وَاَسْبَبِهِ رِيَضَةٌ فِى كُلِّ لَيْلَةٍ،
            </Text>
            <Text style={styles.latin}>
            WA ASBABIHI RIYADHOTUN FII KULLI LAILATIN
            </Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ آمِيْنَ  اللّٰهُمَّ يَا آمِيْنَ  اللّٰهُمَّ يَا آمِيْنَ،
            </Text>
            <Text style={styles.latin}>
            ALLOHUMMA AAMIIN   ALLOOHUMMA YAA AAMIIN ALLOHUMMA YAA AAMIIN
            </Text>

            <Text style={styles.arab}>
            اَسْتَغْفِرُ اللهَ رَبَّ الْبَرَايَا،
            </Text>
            <Text style={styles.latin}>
            ASTAGFIRULLOOHA ROBBAL-BAROOYAA
            </Text>

            <Text style={styles.arab}>
            اَسْتَغْفِرُ اللهَ مِنَ الْخَطٰايَا
            </Text>
            <Text style={styles.latin}>
            ASTAGFIRULLOOHA MINAL-KHOTOOYAA
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٨</Text>

            <Text style={styles.arab}>
            اللّٰهُمَّ انْصُرْنَا وَشَفَاعَةِ الرَّسُوْلِ اللّٰهِ
            </Text>
            <Text style={styles.latin}>
            'ALLOHUMMMAN-SURNAA WA SYAFAA'ATIR-ROSUULILLAHI
            </Text>


            <Text style={styles.arab}>
            صَّلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </Text>
            <Text style={styles.latin}>
            'SHOLLALLOHU ALAIHI WA SALAM
            </Text>

            <Text style={styles.arab}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMAANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            اَشْهَدُ اَنْ لَا اِلٰهَ اِلَّا اللهُ،
            </Text>
            <Text style={styles.latin}>
            ASYHADU AL-LAA ILAAHA ILLALLOH
            </Text>

            <Text style={styles.arab}>
            وَاَشْهَدُ اَنَّ مُحَمَّدً عَبْدُهُ وَالرَّسُوْلُهُ،
            </Text>
            <Text style={styles.latin}>
            WA ASYHADU ANNA MUHAMMADAN 'ABDUHU WAR-ROSUULUH
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٩٩</Text>

            <Text style={styles.arab}>
            وَخُصُوْصًا اِلَى الْاِمَامِ مَالِكْ، شَافِعِى،
            </Text>
            <Text style={styles.latin}>
            WA KHUSUUSON ILAL-IMAAM MAALIK, SYAAFI'I,
            </Text>

            <Text style={styles.arab}>
            حَنَفِى، حَنْبَلِى
            </Text>
            <Text style={styles.latin}>
            HANAFI, HAMBALI
            </Text>

            <Text style={styles.arab}>
            شَيْءٌ للّٰهِ لَهُمُ الْفَاتِحَة
            </Text>
            <Text style={styles.latin}>
            SYAI"ULLILLAHI LAHUMUL-FAATIHAH
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيْــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANIR-ROHIIM
            </Text>

            <Text style={styles.arab}>
            الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمٰنِ الرَّحِيمِ ۞
            </Text>
            <Text style={styles.latin}>
            ALHAMDULILLAAHIROBBIL'AALAMIIN  ۞   ARROHMAANIR-ROHIIM  ۞
            </Text>


            <Text style={styles.arab}>
            ماٰلِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ۞
            </Text>
            <Text style={styles.latin}>
            MAALIKIYAUMIDDIIN  ۞IYYAAKA NA'BUDU WA IYYA   KANASTA'IIN   ۞
            </Text>

        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>١٠٠</Text>

            <Text style={styles.arab}>
            اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞ صِرَاطَ الَّذِينَ اَنْعَمْتَ
            </Text>
            <Text style={styles.latin}>
            IHDINAS-SHIROOTOL MUSTAQIIM   ۞  SHIROOTOL-LADZIINA AN 'AMTA
            </Text>

            <Text style={styles.arab}>
            عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ ۞
            </Text>
            <Text style={styles.latin}>
            ALAIHIM, GHOIRIL MAGHDHUUBI  'ALAIHIM   WA LAZDHOLLIIIN  ۞
            </Text>

            <Text style={styles.arab}>
            اٰمِينْ
            </Text>
            <Text style={styles.latin}>
            AAMIIN
            </Text>

            <Text style={styles.arab}>
            ۞۞۞
            </Text>


            <Text style={styles.arab}>
            خُصُوْصًا إِلٰی جَمِيْعِ أَهْلِ اْلقُبُوْرِ
            </Text>
            <Text style={styles.latin}>
            KHUSUUSON ILAA JAMII'I AHLIL QUBUR
            </Text>



            <Text style={styles.arab}>
            خُصُوْصًا إِلٰی جَمِيْعِ أَهْلِ اْلقُبُوْرِ
            </Text>
            <Text style={styles.latin}>
            KHUSUUSON ILAA JAMII'I AHLIL QUBUR
            </Text>

            <Text style={styles.arab}>
            مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ
            </Text>
            <Text style={styles.latin}>
            MINAL-MUSLIMIINA WAL MUSLIMAAT WAL MU'MINIINA
            </Text>


            <Text style={styles.arab}>
            وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ اْلأَرْضِ إِلٰی
            </Text>
            <Text style={styles.latin}>
            WAL-MU"MINAAT MIM MASYARIQIL-ARDHI ILAA
            </Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>١٠١</Text>

            <Text style={styles.arab}>
            مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلٰی
            </Text>
            <Text style={styles.latin}>
            MAGHOORIBIHA BARRIHA WA BAHRIHA KHUSUUSHON ILAA
            </Text>

            <Text style={styles.arab}>
            اَبآءِنَا وَأُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا
            </Text>
            <Text style={styles.latin}>
            ABAA"INAA WA UMMAHAATINAA WA AJDAADINAA  WA JADDAATINA
            </Text>

            <Text style={styles.arab}>
            وَمَشَايِخِنَا وَمَشَايِخْ مَشَايِخِنَا
            </Text>
            <Text style={styles.latin}>
            WA MASYAYIKHINAA WA MASYAYIKH MASYAYIKHINAA
            </Text>

            <Text style={styles.arab}>
            وَلِمَنِ اجْتَمَعْنَا شَيْءٌ لِلّٰهِ لَهُمُ
            </Text>
            <Text style={styles.latin}>
            WA LIMANIJ'TAMA'NAA SYAI"UL-LILLAHI LAHUMUL-
            </Text>

            <Text style={styles.arab}>
            الْفَاتِحَة
            </Text>
            <Text style={styles.latin}>
            AL-FAATIHAH
            </Text>

            <Text style={styles.arab}>
            بِسْــــمِ اللهِ الرَّحْمٰـــنِ الرَّحِيْــــمِ
            </Text>
            <Text style={styles.latin}>
            BISMILLAHIR-ROHMANIR-ROHIIM
            </Text>
        </View>
    </View>
  );
};

export default Manaqib;

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
