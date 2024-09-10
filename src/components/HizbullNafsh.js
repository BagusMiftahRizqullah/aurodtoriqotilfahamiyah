import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const HizbullNafsh = () => {
  return (
    <View style={{flex:1}}>
        <View style={{
            alignItems: 'center', justifyContent: 'center',
        }}>
            <Image
                source={require('../Assets/images/HisbulNafsh.png')}
                style={{
                width: widthPercentageToDP('90%'),
                height: heightPercentageToDP('80%'),
                }}
                resizeMode="contain"
            />
        </View>


        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

        <Text style={styles.arab}>٦</Text>

        <Text style={styles.arab}>بِسْــمِ اللهِ الرَّحْمٰــنِ الرَّحِيْـــمِ</Text>
        <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>

        <Text style={styles.arab}>حِزْبُ النّفس</Text>
        <Text style={styles.latin}>HIZBUN-NAFS</Text>

        <Text style={styles.arab}>توالصّول</Text>
        <Text style={styles.arab}>خُصُوْصًا إِلٰى كَنْجٓڠْ نَبِى مُحَمَّدْ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ</Text>
        <Text style={styles.latin}>KHUSUUSON ILAA KANJEUNG NABI MUHAMMAD SHOLLALLOHU  'ALAIHI WA SALLAM</Text>
        <Text style={styles.arab}>….. اَلفَاتِحَةْ..</Text>
        <Text style={styles.latin}>ALFAATIHAH…. BACA ALFAATIHAH 1X</Text>
        <Text style={styles.arab}>
        خُصُوْصًا إِلٰى نَبِيُّ اللّٰهْ حِضِيْرْ عَلَيْهِ الَّسلَام
        </Text>
        <Text style={styles.latin}>
            KHUSUUSON ILAA NABIYYULLOH HIDHIR ALAIHIS-SALAM
        </Text>
        <Text style={styles.arab}>
            ….. اَلفَاتِحَةْ..
        </Text>
        <Text style={styles.latin}>BACA ALFAATIHAH 1X</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٧</Text>
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
            خُصُوْصًا إِلٰى شَيْخْ اَلْمُرْشِدْ فَهْمِيْ اَلْمُحَمَّدْ خَيْرُقُ اللّٰهِ
            </Text>
            <Text style={styles.latin}>KHUSUUSHON ILAA SYAIKH AL-MURSYD FAHMI AL-MUHAMMAD  KHOIRUQULLOH</Text>

            <Text style={styles.arab}>
            ….. اَلفَاتِحَةْ..
            </Text>
            <Text style={styles.latin}>… ALFAATIHAH  BACA ALFAATIHAH 1X</Text>
            <Text style={styles.arab}>۞۞۞۞</Text>
        </View>

        <View style={{
            borderWidth:2, borderColor: '#000000', padding: 8, backgroundColor: '#FFFFFF',
            marginBottom: heightPercentageToDP('2%'),
        }}>

            <Text style={styles.arab}>٨</Text>
            <Text style={styles.arab}>بِسْمِ اللّٰه الرَّحْمٰنِ الرَّحيْم        ٣ كالى  (تنفا نفاس )</Text>
            <Text style={styles.latin}>BISMILLAHIR-ROHMANNIR-ROHIIM</Text>
            <Text style={styles.latin}>DI BACA 3 KALI TANFA NAFAS / 1 KALI NAFAS</Text>
            <Text style={styles.arab}>اللّٰهُمَّ صَلِّى عَلٰى مُحَمَّدْ وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدْ</Text>
            <Text style={styles.latin}>ALLOHUMMA SHOLI 'ALA MUHAMMAD WA 'ALA AALI SAYYIDINA MUHAMMAD</Text>
            <Text style={styles.arab}>بِعَدَدِ كُلِّ مَعْلُوْمٍ لَكَ  ٣ كالى</Text>
            <Text style={styles.latin}>BI 'ADADI KULLI MA'LUUMI LAK</Text>
            <Text style={styles.latin}>DI BACA 3 KALI</Text>
            <Text style={[styles.arab, {
                fontSize: 20,
            }]}>( دى أنجورْكان فواسا ٥ حار ىسأومُرْ حدوف سكالى)</Text>
            <Text style={styles.latin}>DI ANJURKAN PUASA 5 HARI , SEKALI SAJA SEUMUR HIDUP</Text>

            <Text style={styles.arab}>۞۞۞</Text>
            <Text style={styles.arab}>۞</Text>
        </View>

    </View>
  );
};

export default HizbullNafsh;

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
