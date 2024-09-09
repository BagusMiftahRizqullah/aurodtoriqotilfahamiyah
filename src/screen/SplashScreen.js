import { StyleSheet, Text, View, StatusBar,Image } from 'react-native';
import React, {useEffect} from 'react';


const SplashScreen = (props) => {


  useEffect(() => {
    StatusBar.setHidden(true);
    setTimeout(() => {
      props.navigation.navigate('Home');
  }, 900);
  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Image
        source={require('../Assets/images/Logo.png')}
        style={{
          width: '100%',
          height: '80%',
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
