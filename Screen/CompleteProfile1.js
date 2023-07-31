import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CompleteProfile1 = ({navigation, route}) => {
  const [text, setText] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
  };

  const {Option} = route.params;

  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const handelSubmit = () => {
    if (Option == 'Are you a student') {
      navigation.navigate('CompleteProfile2');
    } else if (Option == 'Are you a Practitioner?') {
      navigation.navigate('CompleteProfile3');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainImage}>
        <Image
          source={require('../assets/completeProfile.png')}
          style={styles.Image}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.mainText}>Complete Your Profile</Text>
        <Text style={styles.subText}>
          Please complete your profile with name & email and we’ll get started{' '}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type your name"
          placeholderTextColor="#A1A8B0"
          value={text}
          onChangeText={handleTextChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Type enter email address"
          placeholderTextColor="#A1A8B0"
          value={text}
          onChangeText={handleTextChange}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handelSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={handleCheckboxChange}>
            <View
              style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
              {isChecked && <Text style={styles.checkmark}></Text>}
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>
            I agree to the DENXGEN
            <Text style={styles.coloredText}> Terms of Service</Text> and{' '}
            <Text style={styles.coloredText}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CompleteProfile1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#373DCD',
  },
  mainImage: {
    width: responsiveWidth(60),
    height: responsiveHeight(30),
    marginTop: responsiveHeight(5),
  },
  Image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  container2: {
    backgroundColor: '#fff',
    width: responsiveWidth(100),
    height: responsiveHeight(80),
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10),
    flex: 1,
    alignItems: 'center',
  },
  mainText: {
    textAlign: 'center',
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2.85),
    // fontSize: 24,
    color: '#474646',
    fontWeight: 'bold',
  },
  subText: {
    textAlign: 'center',
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1),
    fontSize: responsiveFontSize(2.13),
    // fontSize: 18,
    color: '#617986',
    fontWeight: 'medium',
    width: responsiveWidth(80),
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  input: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: responsiveWidth(7),
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(3),
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
    // width: 289,
    width: responsiveWidth(70),
    // height: 57,
    height: responsiveHeight(8),
    marginTop: responsiveHeight(5),
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.85),
    // fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    fontSize: responsiveFontSize(1.2),
    width: responsiveWidth(66),
    marginRight: 'auto',
    marginLeft: 'auto',
    color: '#3B4453',
    marginTop: responsiveFontSize(2),
  },
  coloredText: {
    color: '#373DCD',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
    borderRadius: responsiveWidth(1.5),
    borderWidth: 1,
    borderColor: '#D3D6DA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#373DCD',
  },
  //   checkmark: {
  //     color: '#FFF',
  //     fontSize: 16,
  //   },
});
