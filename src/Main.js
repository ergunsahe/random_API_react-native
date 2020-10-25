import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {Button, RestaurantCard} from "./components"


// https://random-data-api.com/api/restaurant/random_restaurant
const Main = () => {
    const [restaurantData, setRestaurantdata]=useState([])

    const fetchRestaurant= async () =>{
        const response= await axios.get("https://random-data-api.com/api/restaurant/random_restaurant")
        setRestaurantdata(response.data)


    }
    useEffect(() =>{
        fetchRestaurant()
    }, [])

  return (
      <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
        
        <RestaurantCard item={restaurantData}/>
        </ScrollView>
        <Button title="Get New Restaurant" getData={() =>fetchRestaurant()}/>
      </View>
  );
};

export default Main;
