import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts, images, perfectSize } from '../theme'

const ProductDetails = ({ route, navigation }: any) => {

  const { name, tags, size, image, price, reviews } = route.params.item
  const renderTags = (item: any, index: any) => {
    return (
      <View
        style={{
          height: perfectSize(100),
          width: perfectSize(100),
          backgroundColor: colors.whiteColor,
          borderRadius: perfectSize(32),
          marginLeft: index == 0 ? 0 : perfectSize(30),
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image 
          source={item.image}
          style={{
            height: perfectSize(70),
            width: perfectSize(70),
            resizeMode: 'contain',
          }}
        />
      </View>
    )
  }

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.arrowLeft}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Image 
          source={images.menu}
          style={styles.menu}
        />
      </View>
      <Image 
        source={image}
        style={styles.productImage}
      />
      <View 
        style={styles.listContainer}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tags}
          renderItem={({item, index}) => renderTags(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View
        style={styles.bottonContainer}
      >
        <View
          style={styles.productDetailContainer}
        >
          <View>
            <Text
            style={styles.productName}
          >
              {name}
            </Text>
            <Text
            style={styles.size}
          >
              {`Size: ${size}`}
            </Text>
          </View>
            <Text
            style={styles.reviews}
          >
              {`${reviews} Reviews`}
            </Text>
        </View>
        <View
          style={styles.priceContainer}
        >
          <Text
            style={styles.price}
          >
            {price}
          </Text>
          <TouchableOpacity
            style={styles.cartButton}
          >
            <Text
              style={styles.buttonText}
            >
              {"Cart"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.homeBackground
  },
  header: {
    width: '100%',
    paddingTop: '15%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  backArrow: {
    height: perfectSize(40),
    width: perfectSize(40),
  },
  menu: {
    height: perfectSize(30),
    width: perfectSize(30),
  },
  productImage: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain'
  },
  listContainer: {
    width: '100%',
    top: perfectSize(20),
    alignItems: 'center'
  },
  bottonContainer: {
    width: '100%',
    backgroundColor: colors.whiteColor,
    padding: perfectSize(30),
    flex: 1,
    marginTop: perfectSize(40),
    borderTopLeftRadius: perfectSize(40),
    borderTopRightRadius: perfectSize(40),
  },
  productDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productName: {
    fontSize: perfectSize(20),
    color: colors.blackColor,
    fontFamily: fonts.AvertaBold
  },
  size: {
    fontSize: perfectSize(15),
    color: colors.greyColor,
    fontFamily: fonts.HarmoniaSansProCyrRegular,
    top: perfectSize(10)
  },
  reviews:{
    fontSize: perfectSize(15),
    color: colors.blackColor,
    fontFamily: fonts.HarmoniaSansProCyrRegular,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: perfectSize(40),
    alignItems: 'center'
  },
  price: {
    fontFamily: fonts.AvertaBold,
    fontSize: perfectSize(27),
  },
  cartButton: {
    height: perfectSize(50),
    width: perfectSize(70),
    backgroundColor: colors.blackColor,
    borderRadius: perfectSize(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: perfectSize(15),
    color: colors.whiteColor,
    fontFamily: fonts.AvertaBold
  },
})

export default ProductDetails