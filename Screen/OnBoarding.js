import React, {useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const OTPField = ({navigation}) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5); // Limit the inputRefs array to a maximum of 4 elements
  }, []);

  const goback = () => {
    navigation.goBack();
  };
  const handleInputChange = (index, value) => {
    if (value === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const handelSubmit = () => {
    navigation.navigate('SelectProfession');
  };

  const handleInputDelete = (index, value) => {
    if (value === '' && index > 0) {
      inputRefs.current[index - 1].clear();
      inputRefs.current[index - 1].focus();
    }
  };

  const renderInputs = () => {
    const inputs = [];

    for (let i = 0; i < 5; i++) {
      inputs.push(
        <TextInput
          key={i}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={value => handleInputChange(i, value)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              const value = inputRefs.current[i]?.props?.value || '';
              handleInputDelete(i, value);
            }
          }}
          ref={ref => (inputRefs.current[i] = ref)}
          // autoFocus={i === 0}
        />,
      );
    }

    return inputs;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Otp3.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        onPress={goback}
        style={{
          position: 'absolute',
          top: responsiveHeight(3),
          left: responsiveWidth(5),
        }}>
        <Image
          source={require('../assets/leftarrow.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Please check your number for</Text>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.phoneNumberLabel}>verification code </Text>
          <Text style={styles.phoneNumber}>+91-9987654321</Text>
        </View>
      </View>
      <View style={styles.otpContainer}>{renderInputs()}</View>
      <TouchableOpacity style={styles.submitButton} onPress={handelSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    // height: height * 0.5,
    height: responsiveHeight(50),
    width: '100%',
  },
  image: {
    // flex: 1,
    width: '100%',
    height: '100%',
  },

  textContainer: {
    alignItems: 'center',
    // marginTop: 30,
    marginTop: responsiveHeight(3.5),
  },
  title: {
    // fontSize: 24,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#000000',
    // marginBottom: 20,
    marginBottom: responsiveHeight(2),
  },
  subtitle: {
    // fontSize: 18,
    fontSize: responsiveFontSize(2.1),
    // marginTop: 5,
    marginTop: responsiveHeight(0.5),
    color: 'grey',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: 42,
    height: 42,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#f6f6f6',
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 20,
    borderColor: '#373DCD',
  },
  submitButton: {
    backgroundColor: '#373DCD',
    justifyContent: 'center',
    borderRadius: responsiveWidth(8),
    // width: 289,
    width: responsiveWidth(70),
    // height: 57,
    height: responsiveHeight(8),
    marginTop: responsiveHeight(3),
    // marginBottom: 90,
    marginBottom: responsiveHeight(12),
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    resizeMode: 'contain',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  phoneNumberLabel: {
    // fontSize: 18,
    fontSize: responsiveFontSize(2.1),
    color: 'grey',
  },
  phoneNumber: {
    // fontSize: 18,
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
    color: '#000000', // Set the color to black
  },
});

export default OTPField;
