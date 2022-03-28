import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../theme/colors'
import fonts from '../theme/fonts'
import images from '../theme/images'
import {perfectSize} from '../theme'
import { useFonts } from 'expo-font'

const Home = ({ navigation }: any) => {
  
  const [loaded] = useFonts({
    'Avenir-Bold': require('../assets/fonts/Avenir-Next-LT-Pro-Bold.otf'),
    'Averta-Bold': require('../assets/fonts/averta-bold.otf'),
    'AvenirLTStd-Roman': require('../assets/fonts/AvenirLTStd-Roman.otf'),
    'HarmoniaSansProCyr-Regular': require('../assets/fonts/HarmoniaSansProCyr-Regular.ttf'),
  })

  return (
      <View
        style={styles.container}>
          <Image 
            source={images.logo}
            style={styles.homeBanner}
          />

          <Text
            style={styles.textBanner}
          >
              {"Vamos Recompensar-\nTe, "}
              <Text
                style={styles.bannerBoldText}
              >{"Naturalmente!!"}</Text>
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('ProductList')}
            style={styles.buttonContainer}
          >
              <Image 
                source={images.arrow}
                style={styles.buttonArrow}
              />
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.homeBackground
    },
    homeBanner: {
        width: '100%',
        height: '50%',
        marginTop: '20%',
        resizeMode: 'contain'
    },
    textBanner: {
        textAlign: 'center',
        // fontFamily: 'AvenirLTStd-Roman',
        fontFamily: fonts.AvenirLTStdRoman,
        fontSize: perfectSize(34),
        lineHeight: perfectSize(50),
        letterSpacing: perfectSize(0.5),
        marginTop: '4%',
        fontWeight: 'bold'
    },
    bannerBoldText: {
        // fontFamily: 'Averta-Bold'
        fontFamily: fonts.AvertaBold
    },
    buttonContainer: {
        height: perfectSize(70),
        width: perfectSize(70),
        borderWidth: 1,
        borderRadius: perfectSize(23),
        borderColor: colors.blackColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: perfectSize(50)
    },
    buttonArrow: {
        height: perfectSize(35),
        width: perfectSize(35),
        resizeMode: 'contain'
    }
})

export default Home