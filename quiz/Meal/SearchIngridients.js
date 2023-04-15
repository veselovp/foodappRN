import { View, Text, StyleSheet } from 'react-native'

import InputText from '../../components/UI/InputComponent'
import IngridientListComponent from '../../components/IngridientListComponent'

import { useNavigation } from '@react-navigation/native'
import ButtonComponent from '../../components/UI/ButtonComponent'

import { useState } from 'react'

const SearchIngridients = () => {
  const [text, setText] = useState('')

  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('SelectR') // Переход на экран квиза
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Search Ingridients</Text>
      </View>
      <View>
        <InputText
          placeholder={'yours ingridienrts'}
          onChangeText={setText}
          secureTextEntry={false}
        />
      </View>
      <View style={styles.listContainer}>
        <IngridientListComponent title={text} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent title="NEXT" onPress={handlePress} width={70} />
      </View>
    </View>
  )
}
export default SearchIngridients

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
