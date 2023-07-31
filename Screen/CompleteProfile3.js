import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CompleteProfile3 = ({navigation}) => {
  const [text, setText] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
  };
  const goback = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
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
        <Text style={styles.label}>Name</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.inputicon}
          />
          <TextInput
            style={styles.input}
            placeholder="Pratik Soni"
            placeholderTextColor={'#AAAAAA'}
          />
        </View>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/smartphone.png')}
            style={styles.inputicon}
          />
          <TextInput
            style={styles.input}
            placeholder="+91 9987654321"
            placeholderTextColor={'#AAAAAA'}
          />
        </View>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/sms.png')}
            style={styles.inputicon}
          />
          <TextInput
            style={styles.input}
            placeholder="pratik.w4wdt@gmail.com"
            placeholderTextColor={'#AAAAAA'}
          />
        </View>
      </View>

      <Text style={styles.MainText}>Provide your Practitioner No.</Text>
      <Text style={styles.subText}>
        Choose your career category and unlock endless possibilities.
      </Text>
      <TextInput
        style={styles.nameinput}
        placeholder="Practitioner Number"
        placeholderTextColor="#A1A8B0"
        value={text}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompleteProfile3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    marginTop: responsiveHeight(7),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#C1C7D0',
    padding: responsiveHeight(0.5),
    width: responsiveWidth(80),
  },
  label: {
    marginTop: responsiveHeight(4),
    color: '#474646',
  },
  inputicon: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.6),
    marginRight: 10,
    tintColor: '#000',
  },
  input: {
    flex: 1,
  },
  MainText: {
    fontSize: responsiveFontSize(2.85),
    fontWeight: 'bold',
    color: '#474646',
    textAlign: 'center',
    marginTop: responsiveHeight(5),
  },
  subText: {
    fontSize: responsiveFontSize(2.13),
    fontWeight: 'medium',
    color: '#617986',
    textAlign: 'center',
    width: responsiveWidth(80),
    lineHeight: responsiveHeight(2.5),
    marginTop: responsiveHeight(3),
  },
  nameinput: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: responsiveWidth(7),
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(4),
    // marginBottom: 15,
    textAlign: 'center',
    backgroundColor: '#F9FAFB',
    fontSize: responsiveFontSize(1.5),

    color: '#A1A8B0',
  },
  submitButton: {
    backgroundColor: '#373DCD',
    justifyContent: 'center',
    borderRadius: responsiveWidth(8),
    width: responsiveWidth(70),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(2),
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
