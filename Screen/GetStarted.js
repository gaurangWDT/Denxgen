import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const GetStarted = ({navigation}) => {
  const getstarted = () => {
    navigation.navigate('OnBoardingPhone');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/getstarted.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.mainText}>WELCOME TO DENXGEN</Text>
      <View>
        <Text style={styles.subText}>
          We provide an equally comfortable experience of relaxation for all our
          young and adult customers visiting a dentist !
        </Text>
      </View>
      <View>
        <Text
          style={{
            // marginLeft: 56.5,
            textAlign: 'center',
            color: '#373DCD',
            marginBottom: responsiveHeight(6),
            fontSize: responsiveFontSize(1.5),
          }}>
          2000+ users like our care systems
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={getstarted}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/rightarrow.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',

            fontSize: responsiveFontSize(1.6),
            textAlign: 'center',
          }}>
          Don't have an account? <Text style={{color: '#373DCD'}}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  image: {
    // width: 200,
    width: responsiveWidth(50),
    // height: 180,
    height: responsiveHeight(20),
    // marginTop: 66,
    marginTop: responsiveHeight(8),
    // marginBottom: 33,
    marginBottom: responsiveHeight(4),
    // marginLeft: 88,
  },
  mainText: {
    // fontSize: 30,
    fontSize: responsiveFontSize(3.6),
    fontWeight: 'bold',
    // maxWidth: 318,
    maxWidth: responsiveWidth(70),
    textAlign: 'center',
    color: 'black',
    lineHeight: 42,
    // marginBottom: 20,
    marginBottom: responsiveHeight(2),
  },
  subText: {
    // fontSize: 18,
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'medium',
    // maxWidth: 343,
    // marginHorizontal: 16,
    marginHorizontal: responsiveWidth(4),
    textAlign: 'center',
    color: '#979899',
    // lineHeight: 28,
    lineHeight: responsiveHeight(3.3),
    // marginBottom: 31,
    marginBottom: responsiveHeight(3.8),
  },
  button: {
    // width: 281,
    width: responsiveWidth(68),
    // height: 57,
    height: responsiveHeight(7),
    borderRadius: 100,
    backgroundColor: '#373DCD',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 16,
    marginBottom: responsiveHeight(2),
  },
  iconContainer: {
    // width: 48,
    width: responsiveWidth(12),
    // height: 48,
    height: responsiveHeight(6),
    // borderRadius: 24,
    borderRadius: responsiveHeight(50),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 6,
    margin: responsiveHeight(0.5),
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    // fontSize: 24,
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    // marginLeft: 20,
    marginLeft: responsiveWidth(6),
  },
});
