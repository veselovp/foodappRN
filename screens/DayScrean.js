import { Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonComponent from '../components/UI/ButtonComponent'

const DayScreen = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('SearchI') // Переход на экран квиза
  }

  return (
    <View>
      <ButtonComponent
        onPress={() => handlePress()} // вызов функции handlePress при нажатии на кнопку
        title={'Create Plan'}
        width={350}
      />
    </View>
  )
}

export default DayScreen

const styles = StyleSheet.create({})
