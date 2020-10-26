import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';

import {Button, RestaurantCard} from './components';

// https://random-data-api.com/api/restaurant/random_restaurant
const Main = () => {
  const [isLoading, setLoading] = useState(true);
  const [restaurantData, setRestaurantdata] = useState([]);

  const fetchRestaurant = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://random-data-api.com/api/restaurant/random_restaurant',
    );
    setRestaurantdata(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {isLoading ? 
          <View
            style={{flex:1, justifyContent: 'center', alignItems:"center"}}>
            <ActivityIndicator size="large" color="blue"/>
          </View>
         : 
          <RestaurantCard item={restaurantData} />
        }
      </ScrollView>
      <Button title="Get New Restaurant" getData={() => fetchRestaurant()} />
    </View>
  );
};

export default Main;
