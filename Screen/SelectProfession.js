import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const SelectProfession = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const goback = () => {
    navigation.goBack();
  };
  const handelNext = () => {
    const Option = selectedOption;
    navigation.navigate('CompleteProfile1', {Option});
  };

  const handleOptionPress = option => {
    setSelectedOption(option);
  };

  const renderOptionButton = option => {
    const circleColor = selectedOption === option ? '#373DCD' : '#EAE7EB';

    return (
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleOptionPress(option)}>
        <View style={[styles.bigCircle, {backgroundColor: '#EAE7EB'}]} />
        <Text style={styles.optionButtonText}>{option}</Text>
        <View
          style={[
            styles.circle,
            {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#EAE7EB',
              borderColor: circleColor,
              borderWidth: 1,
            },
          ]}>
          <View
            style={[
              styles.mediumCircle,
              {
                justifyContent: 'center',
                backgroundColor: circleColor,
                borderColor: circleColor,
                borderWidth: 1,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    );
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
        <Text style={styles.mainText}>Select your Profession Category</Text>
        {/* <Text style={styles.mainText}>Category</Text> */}
      </View>
      <View>
        <Text style={styles.subText}>
          Choose your career category and unlock endless possibilities.
        </Text>
      </View>
      <View style={styles.container2}>
        {renderOptionButton('Are you a student')}
        {renderOptionButton('Are you a Practitioner?')}
        {renderOptionButton('Are you a Paradental?')}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handelNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectProfession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container2: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textContainer: {
    // marginTop: 201,
    marginTop: 100,
  },
  mainText: {
    // fontSize: 24,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#474646',
    marginBottom: 21,
    width: 343,
  },
  subText: {
    // fontSize: 18,
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'medium',
    textAlign: 'center',
    color: '#617986',
    marginBottom: 21,
    width: 343,
    lineHeight: 28,
  },
  optionButton: {
    width: 318,
    height: 66,
    borderRadius: 20,
    backgroundColor: '#EAF2F3',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 26,
    paddingHorizontal: 15,
  },
  optionButtonText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'medium',
    color: '#000000',
    textAlign: 'center',
  },

  circle: {
    width: 24,
    height: 24,
    borderRadius: 11,
  },
  mediumCircle: {
    width: 18,
    height: 18,
    borderRadius: 16,
  },
  bigCircle: {
    width: 51,
    height: 51,
    borderRadius: 25,
  },
  icon: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    resizeMode: 'contain',
  },
  submitButton: {
    backgroundColor: '#373DCD',
    justifyContent: 'center',
    borderRadius: 100,
    width: 289,
    height: 57,
    marginTop: 30,
    // marginBottom: 60,
    marginBottom: responsiveHeight(12),
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import React, {useState} from 'react';
// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';

// const SelectProfession = ({navigation}) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const goback = () => {
//     navigation.goBack();
//   };

//   const handelNext = () => {
//     navigation.navigate('CompleteProfile1');
//   };

//   const handleOptionPress = option => {
//     setSelectedOption(option);
//   };

//   const renderOptionButton = option => {
//     const circleColor = selectedOption === option ? '#373DCD' : '#EAE7EB';
//     const innerCircleColor = selectedOption === option ? '#EAE7EB' : '#fff';

//     return (
//       <TouchableOpacity
//         style={styles.optionButton}
//         onPress={() => handleOptionPress(option)}>
//         <View style={[styles.bigCircle, {backgroundColor: '#EAE7EB'}]}>
//           {selectedOption === option && (
//             <View
//               style={[styles.innerCircle, {backgroundColor: innerCircleColor}]}
//             />
//           )}
//         </View>
//         <Text style={styles.optionButtonText}>{option}</Text>
//         <View
//           style={[
//             styles.circle,
//             {
//               backgroundColor: circleColor,
//               borderColor: circleColor,
//               borderWidth: 1,
//             },
//           ]}
//         />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={goback}
//         style={{
//           position: 'absolute',
//           top: responsiveHeight(3),
//           left: responsiveWidth(5),
//         }}>
//         <Image
//           source={require('../assets/leftarrow.png')}
//           style={styles.icon}
//         />
//       </TouchableOpacity>
//       <View style={styles.textContainer}>
//         <Text style={styles.mainText}>Select your Profession Category</Text>
//       </View>
//       <View>
//         <Text style={styles.subText}>
//           Choose your career category and unlock endless possibilities.
//         </Text>
//       </View>
//       <View style={styles.container2}>
//         {renderOptionButton('Are you a student')}
//         {renderOptionButton('Are you a Practitioner?')}
//         {renderOptionButton('Are you a Paradental?')}
//       </View>
//       <TouchableOpacity style={styles.submitButton} onPress={handelNext}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SelectProfession;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   container2: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   textContainer: {
//     marginTop: 100,
//   },
//   mainText: {
//     fontSize: responsiveFontSize(3),
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#474646',
//     marginBottom: 21,
//     width: 343,
//   },
//   subText: {
//     fontSize: responsiveFontSize(2.2),
//     fontWeight: 'medium',
//     textAlign: 'center',
//     color: '#617986',
//     marginBottom: 21,
//     width: 343,
//     lineHeight: 28,
//   },
//   optionButton: {
//     width: 318,
//     height: 66,
//     borderRadius: 20,
//     backgroundColor: '#EAF2F3',
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginBottom: 26,
//     paddingHorizontal: 15,
//   },
//   optionButtonText: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: 'medium',
//     color: '#000000',
//     textAlign: 'center',
//   },
//   circle: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//   },
//   bigCircle: {
//     width: 51,
//     height: 51,
//     borderRadius: 25,
//   },
//   innerCircle: {
//     position: 'absolute',
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//   },
//   icon: {
//     height: responsiveHeight(3),
//     width: responsiveWidth(6),
//     resizeMode: 'contain',
//   },
//   submitButton: {
//     backgroundColor: '#373DCD',
//     justifyContent: 'center',
//     borderRadius: 100,
//     width: 289,
//     height: 57,
//     marginTop: 30,
//     marginBottom: responsiveHeight(12),
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
