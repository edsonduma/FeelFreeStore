import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts, images, perfectSize } from '../theme'

const cat = [
  // {"label": "Body"},
  // {"label": "Hair"},
  // {"label": "Face"},
  // {"label": "Gifts"},
  {"label": "Roupa"},
  {"label": "Sapatos"},
  {"label": "Acessórios"},
]

const products = [
  {
    "image": images.productOne,
    "name": 'Red Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "46",
    "star": 4,
    "reviews": 34
  },
  {
    "image": images.productTwo,
    "name": 'Blue Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "46",
    "star": 4,
    "reviews": 34
  },
  {
    "image": images.productThree,
    "name": 'Pink Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "48",
    "star": 4,
    "reviews": 34
  },
  {
    "image": images.productFor,
    "name": 'Pink Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "48",
    "star": 4,
    "reviews": 34
  },
  {
    "image": images.productFive,
    "name": 'Pink Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "48",
    "star": 4,
    "reviews": 34
  },
  {
    "image": images.productSix,
    "name": 'Pink Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "48",
    "star": 4,
    "reviews": 34
  },
  {
    "image": images.productSeven,
    "name": 'Pink Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "48",
    "star": 4,
    "reviews": 34
  },
  {
    "image": images.productNine,
    "name": 'Pink Dress',
    "description": '...',
    "price": '$15.99',
    "tags": [
      {"image": images.logo},
      {"image": images.logo},
      {"image": images.logo},
    ],
    "size": "48",
    "star": 4,
    "reviews": 34
  },
]

const ProductList = ({ navigation }: any) => {

  const renderCat = (item: any, index: any) => {
    return (
      <View
        style={{
          marginLeft: index == 0 ? 0 : perfectSize(70),
          justifyContent: 'center',
          height: perfectSize(40)
        }}
      >
        <Text
          style={{
            fontFamily: fonts.AvenirLTStdRoman,
            fontSize: index == 0 ? perfectSize(22) : perfectSize(18),
            fontWeight: 'bold',
            color: index == 0 ? colors.textColor : colors.greyColor
          }}
        >
          {item.label}
        </Text>
        {index == 0 &&
          <View 
            style={{
              width: '100%',
              height: perfectSize(0.8),
              marginTop: perfectSize(8),
              backgroundColor: colors.blackColor
            }}
          />
        }
      </View>
    )
  }

  const renderProduct = (item: any, index: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {item: item})}
        style={{
          marginLeft: perfectSize(25),
          borderRadius: perfectSize(25),
          backgroundColor: colors.whiteColor
        }}
      >
        <Image
          source={item.image}
          style={{
            height: '65%',
            width: perfectSize(230),
            resizeMode: 'contain',
            marginTop: perfectSize(20),
          }}
        />
        <View
          style={{
            padding: perfectSize(20)
          }}
        >
          <Text
            style={{
              fontSize: perfectSize(22),
              fontFamily: fonts.AvertaBold,
              color: colors.blackColor
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: perfectSize(15),
              fontFamily: fonts.HarmoniaSansProCyrRegular,
              color: colors.greyColor,
              marginTop: perfectSize(10)
            }}
          >
            {item.description}
          </Text>
          <Text
            style={{
              fontSize: perfectSize(20),
              fontFamily: fonts.HarmoniaSansProCyrRegular,
              color: colors.blackColor,
              marginTop: perfectSize(10)
            }}
          >
            {item.price}
          </Text>
        </View>
        <View
          style={{
            height: perfectSize(45),
            width: perfectSize(45),
            backgroundColor: colors.blackColor,
            borderRadius: perfectSize(40),
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: perfectSize(18),
            right: perfectSize(18),
          }}
        >
          <Image
            source={images.bag}
            style={{
              height: perfectSize(25),
              width: perfectSize(25),
              tintColor: colors.whiteColor,
              resizeMode: 'contain'
            }}
          />
        </View>
      </TouchableOpacity>
    )
  }

  const renderPopular = (item: any, index: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {item:item})}
        style={{
          marginLeft: perfectSize(25),
          borderRadius: perfectSize(25),
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <Image
          source={item.image}
          style={{
            height: perfectSize(80),
            width: perfectSize(80),
            resizeMode: 'contain',
            marginTop: perfectSize(20),
            backgroundColor: colors.whiteColor,
            borderRadius: perfectSize(20)
          }}
        />
        <View
          style={{
            padding: perfectSize(20)
          }}
        >
          <Text
            style={{
              fontSize: perfectSize(18),
              fontFamily: fonts.AvertaBold,
              color: colors.blackColor
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: perfectSize(13),
              fontFamily: fonts.HarmoniaSansProCyrRegular,
              color: colors.greyColor,
              marginTop: perfectSize(10)
            }}
          >
            {item.description}
          </Text>
        </View>
        <Text
          style={{
            fontSize: perfectSize(15),
            fontFamily: fonts.HarmoniaSansProCyrRegular,
            color: colors.blackColor,
            marginTop: perfectSize(10),
            marginLeft: perfectSize(30)
          }}
        >
          {item.price}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <Image
          source={images.profilePicture}
          style={styles.profile}
        />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Image
            source={images.search}
            style={styles.search}
          />
          <Image
            source={images.menu}
            style={styles.menu}
          />
        </View>
      </View>
      <View
        style={styles.catContainer}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cat}
          renderItem={({item, index}) => renderCat(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View
        style={styles.productContainer}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item, index}) => renderProduct(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View
        style={styles.popularContainer}
      >
      <Text
        style={styles.popularHeader}
      >
        {"Popular"}
      </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({item, index}) => renderPopular(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
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
    paddingRight: '5%',
  },
  profile: {
    height: perfectSize(50),
    width: perfectSize(50),
    borderRadius: perfectSize(15)
  },
  search: {
    height: perfectSize(30),
    width: perfectSize(30)
  },
  menu: {
    height: perfectSize(30),
    width: perfectSize(30),
    marginLeft: perfectSize(25)
  },
  catContainer: {
    height: perfectSize(40),
    marginTop: perfectSize(40)
  },
  productContainer: {
    width: '100%',
    height: '50%',
    marginTop: perfectSize(30)
  },
  popularHeader: {
    marginTop: perfectSize(20),
    marginLeft: perfectSize(25),
    fontFamily: fonts.AvenirBold,
    fontSize: perfectSize(18)
  },
  popularContainer: {
    flex: 1,
    width: '100%'
  },
})

export default ProductList