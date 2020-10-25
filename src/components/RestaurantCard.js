import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

// "id": 6644,
// "uid": "da9f4fa6-94ec-4258-b989-13c3661fdcb2",
// "name": "Blue Plate Spoon",
// "type": "Thai",
// "description": "Our mission is to be a leader in the distribution and merchandising of food, pharmacy, health and personal care items, seasonal merchandise, and related products and services. We place considerable importance on forging strong supplier partnerships. Our suppliers, large or small, local or global, are essential components in accomplishing our mission.",
// "review": "Great place to stop in from a chaotic Times Square adventure! The coffee is great, the drinks are creative and the staff is very nice and hospitable. Cant wait to stop in again. Without a doubt 5 stars from me!!",
// "logo": "https://loremflickr.com/500/500/restaurant",
// "phone_number": "685-634-1542 x53525",
// "address": "Apt. 492 20055 Lanita Tunnel, East Eliseoberg, VT 08718-0888",
const RestaurantCard = (props) => {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{props.item.name}</Text>
      </View>
      <Text style={[styles.header, {fontStyle:"italic"}]}>{props.item.type}</Text>
      <Image source={{uri: props.item.logo}} style={styles.image} />
      <Text style={styles.description}>{props.item.description}</Text>
      <Text style={styles.description}>{props.item.review}</Text>
      <Text style={[styles.description, {fontWeight:"bold"}]}>Adress: {props.item.address}</Text>
      <Text style={[styles.description, {fontWeight:"bold"}]}>Phone: {props.item.phone_number}</Text>

    </View>
  );
};

export {RestaurantCard};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 5,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    margin: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerContainer:{
      backgroundColor:"#c5cae9",
      margin:5,
      padding:5,
      borderRadius:10
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  description:{
      margin:5,
      padding:5
  }
});
