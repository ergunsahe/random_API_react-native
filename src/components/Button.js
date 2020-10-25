import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() =>props.getData()}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export {Button};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#5c6bc0',
    padding: 10,
    margin: 10,
    borderRadius:10
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    color:"white"
  },
});
