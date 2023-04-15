import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const Slider = ({ title, data, onPress, onRemove }) => {
  const renderItem = ({ item, onPress, onRemove }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <TouchableOpacity onPress={onRemove} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>more</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderTitle}>{title}</Text>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={170}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  sliderContainer: {
    backgroundColor: 'red',

  },
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    height: 90,
    width: '100%',
  },
  content: {

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 2,
  },
  button: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
