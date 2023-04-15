import { View, Text, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import ButtonComponent from '../../components/UI/ButtonComponent'
import Slider from '../../components/UI/SliderComponent'

const BREAKFAST_RECIPES = [
  { title: 'Eggs Benedict', image: require('../../assets/38.jpg') },
  { title: 'Pancakes', image: require('../../assets/38.jpg') },
  { title: 'Avocado Toast', image: require('../../assets/38.jpg') },
]

const LUNCH_RECIPES = [
  { title: 'Caesar Salad', image: require('../../assets/38.jpg') },
  { title: 'BLT Sandwich', image: require('../../assets/38.jpg') },
  {
    title: 'Chicken Noodle Soup',
    image: require('../../assets/38.jpg'),
  },
]

const DINNER_RECIPES = [
  { title: 'Steak', image: require('../../assets/38.jpg') },
  { title: 'Grilled Salmon', image: require('../../assets/38.jpg') },
  { title: 'Pasta Carbonara', image: require('../../assets/38.jpg') },
]

const SelectRecipes = () => {
  const navigation = useNavigation()

  const handler = () => {
    navigation.navigate('DayScr')
    navigation.setOptions({
      tabBarVisible: false,
    })
  }

  function handlePress(item) {
    console.log('Pressed item:', item)
  }

  function handleRemove(item) {
    console.log('Removed item:', item)
  }

  return (
    <View style={styles.container}>
      <View style={styles.kkalContainer}>
        <View>
          <Text>Select Receptes</Text>
        </View>
        <View>
          <Text>TOTAL DAY: 1290 Kkal</Text>
        </View>
        <View>
          <Text>PICTURE WITH CIRCLE</Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <View style={styles.breakFastContainer}>
          <Slider
            onPress={handlePress}
            onRemove={handleRemove}
            data={BREAKFAST_RECIPES}
          />
        </View>
        <View style={styles.lunchFastContainer}>
          <Slider
            onPress={handlePress}
            onRemove={handleRemove}
            data={LUNCH_RECIPES}
          />
        </View>
        <View style={styles.dinnerFastContainer}>
          <Slider
            onPress={handlePress}
            onRemove={handleRemove}
            data={DINNER_RECIPES}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <ButtonComponent title={'finish'} onPress={handler} width={70} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({})

export default SelectRecipes
