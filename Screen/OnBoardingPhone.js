import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const {width, height} = Dimensions.get('window');

const OTPField = ({navigation}) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5); // Limit the inputRefs array to a maximum of 4 elements
  }, []);
  const [text, setText] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
  };
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
    navigation.navigate('OnBoarding');
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
          autoFocus={i === 0}
        />,
      );
    }

    return inputs;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/phoneVerify2.png')}
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
        <Text style={styles.title}>Enter Number</Text>
        <Text style={styles.subtitle}>Please enter your number, we will</Text>
        <Text style={styles.subtitle}>send you the verification code</Text>
      </View>
      {/* <View style={styles.otpContainer}>{renderInputs()}</View>
       */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        placeholderTextColor="#A1A8B0"
        value={text}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handelSubmit}>
        <Text style={styles.buttonText}>Verify</Text>
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
    // marginTop: 20,
    marginTop: responsiveHeight(2),
  },

  input: {
    // width: 335,
    width: responsiveWidth(82),
    // height: 64,
    height: responsiveHeight(7.5),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 10,
    marginTop: 25,
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
    fontSize: 16,
    color: '#A1A8B0',
  },

  // submitButton: {
  //   backgroundColor: '#373DCD',
  //   justifyContent: 'center',
  //   borderRadius: 100,
  //   width: 289,
  //   height: 57,
  //   marginTop: 20,
  //   marginBottom: 90,
  // },
  // buttonText: {
  //   color: '#fff',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
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
});

export default OTPField;
