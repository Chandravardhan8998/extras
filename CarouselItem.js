import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {RFV} from '../../Constants/utility';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width,
    height: RFV(375),
    backgroundColor: 'white',
  },
  image: {
    width: width,
    height: RFV(375),
    // borderRadius: 10,
  },
});

export default CarouselItem;
