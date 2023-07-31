// import React, {useRef} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import Swiper from 'react-native-swiper';

// const {width, height} = Dimensions.get('window');
// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';

// const SwiperScreen = ({navigation}) => {
//   const swiperRef = useRef(null);
//   // const navigation = useNavigation();

//   const handleSwiperIndexChanged = index => {
//     if (index === 3) {
//       // Last screen index is 2, change this condition if necessary
//       navigation.navigate('GetStarted'); // Navigate to another screen
//     }
//   };

//   const goToNextPage = () => {
//     if (swiperRef.current) {
//       const currentPage = swiperRef.current.state.index;
//       const nextPage = currentPage + 1;
//       swiperRef.current.scrollBy(nextPage - currentPage, true);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Swiper
//         ref={swiperRef}
//         loop={false}
//         dot={<View style={styles.paginationDot} />}
//         activeDot={
//           <View style={[styles.paginationDot, styles.activePaginationDot]} />
//         }
//         paginationStyle={styles.paginationContainer}
//         onIndexChanged={handleSwiperIndexChanged} // Handle swiper index change
//       >
//         {/* Screen 1 */}
//         <View style={styles.slideContainer}>
//           <Image
//             source={require('../assets/walkthrough1.png')}
//             style={styles.image}
//           />
//           <Text style={styles.title}>Practitioner</Text>
//           <Text style={styles.description}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna.
//           </Text>
//         </View>

//         {/* Screen 2 */}
//         <View style={styles.slideContainer}>
//           <Image
//             source={require('../assets/walkthrough2.png')}
//             style={styles.image}
//           />
//           <Text style={styles.title}>Student</Text>
//           <Text style={styles.description}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna.
//           </Text>
//         </View>

//         {/* Screen 3 */}
//         <View style={styles.slideContainer}>
//           <Image
//             source={require('../assets/walkthrough3.png')}
//             style={styles.image}
//           />
//           <Text style={styles.title}>Paradental</Text>
//           <Text style={styles.description}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna.
//           </Text>
//         </View>
//       </Swiper>

//       <TouchableOpacity onPress={goToNextPage} style={styles.iconContainer}>
//         <Image
//           source={require('../assets/rightarrow.png')}
//           style={styles.icon}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   slideContainer: {
//     flex: 1,
//     alignItems: 'center',
//     // marginTop: 30,
//     marginTop: responsiveHeight(3),
//   },
//   image: {
//     // width: 332,
//     width: responsiveWidth(80),
//     // height: 332,
//     height: responsiveHeight(40),
//     // marginTop: 70,
//     marginTop: responsiveHeight(8),
//     resizeMode: 'contain',
//     // marginBottom: 57,
//     marginBottom: responsiveHeight(7),
//   },
//   title: {
//     // fontSize: 24,
//     fontSize: responsiveFontSize(3),
//     fontWeight: '500',
//     // marginBottom: 40,
//     marginBottom: responsiveHeight(4),
//     textAlign: 'center',
//     color: '#000',
//   },
//   description: {
//     // fontSize: 18,
//     fontSize: responsiveFontSize(2.13),
//     maxWidth: responsiveWidth(90),
//     fontWeight: '400',
//     textAlign: 'center',
//     // marginBottom: 75,
//     // lineHeight: 28,
//     lineHeight: responsiveHeight(3),
//     color: '#000',
//     marginBottom: responsiveHeight(3),
//   },
//   paginationContainer: {
//     position: 'absolute',
//     // bottom: 90,
//     bottom: responsiveHeight(10),
//     // left: 40,
//     left: responsiveWidth(10),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 3,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//   },
//   activePaginationDot: {
//     backgroundColor: '#373DCD',
//     width: 35,
//   },
//   iconContainer: {
//     position: 'absolute',
//     // bottom: 70,
//     bottom: responsiveHeight(8),
//     // right: 40,
//     right: responsiveWidth(15),
//     // width: responsiveWidth(18),
//     // height: responsiveHeight(9),
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 50,
//     height: 50,
//     borderRadius: 32,
//     // borderRadius: responsiveWidth(100),
//     backgroundColor: '#373DCD',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
// });

// export default SwiperScreen;

import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const SwiperScreen = ({navigation}) => {
  const swiperRef = useRef(null);
  // const navigation = useNavigation();

  const handleSwiperIndexChanged = index => {
    if (index === 3) {
      // Last screen index is 2, change this condition if necessary
      navigation.navigate('GetStarted'); // Navigate to another screen
    }
  };

  const goToNextPage = () => {
    if (swiperRef.current) {
      const currentPage = swiperRef.current.state.index;
      const nextPage = currentPage + 1;
      swiperRef.current.scrollBy(nextPage - currentPage, true);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.paginationDot} />}
        activeDot={
          <View style={[styles.paginationDot, styles.activePaginationDot]} />
        }
        paginationStyle={styles.paginationContainer}
        onIndexChanged={handleSwiperIndexChanged} // Handle swiper index change
      >
        {/* Screen 1 */}
        <View style={styles.slideContainer}>
          <Image
            source={require('../assets/walkthrough1.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Practitioner</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Text>
        </View>

        {/* Screen 2 */}
        <View style={styles.slideContainer}>
          <Image
            source={require('../assets/walkthrough2.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Student</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Text>
        </View>

        {/* Screen 3 */}
        <View style={styles.slideContainer}>
          <Image
            source={require('../assets/walkthrough3.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Paradental</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Text>
        </View>
      </Swiper>

      <TouchableOpacity onPress={goToNextPage} style={styles.iconContainer}>
        <Image
          source={require('../assets/rightarrow.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    // marginTop: 30,
    marginTop: responsiveHeight(3),
  },
  image: {
    // width: 332,
    width: responsiveWidth(80),
    // height: 332,
    height: responsiveHeight(40),
    // marginTop: 70,
    marginTop: responsiveHeight(8),
    resizeMode: 'contain',
    // marginBottom: 57,
    marginBottom: responsiveHeight(7),
  },
  title: {
    // fontSize: 24,
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
    // marginBottom: 40,
    marginBottom: responsiveHeight(4),
    textAlign: 'center',
    color: '#000',
  },
  description: {
    // fontSize: 18,
    fontSize: responsiveFontSize(2.13),
    maxWidth: responsiveWidth(90),
    fontWeight: '400',
    textAlign: 'center',
    // marginBottom: 75,
    // lineHeight: 28,
    lineHeight: responsiveHeight(3),
    color: '#000',
    marginBottom: responsiveHeight(3),
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  activePaginationDot: {
    backgroundColor: '#373DCD',
    width: 35,
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginBottom: responsiveHeight(3), // Update the marginBottom value here
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 32,
    // marginTop: responsiveHeight(3), // Use marginTop instead of bottom and right
    backgroundColor: '#373DCD',
  },
});

export default SwiperScreen;
