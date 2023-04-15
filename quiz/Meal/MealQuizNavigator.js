import { createStackNavigator } from '@react-navigation/stack'

import SearchIngridients from './SearchIngridients'
import SelectRecipes from './SelectRecipes'
import RecipteItem from './RecipteItem'
import DayScreen from '../../screens/DayScrean'

const Stack = createStackNavigator()

function MealQuizNavigator() {


  return (
    <Stack.Navigator initialRouteName="DayScr">
      <Stack.Screen name="DayScr" component={DayScreen} />
      <Stack.Screen name="SearchI" component={SearchIngridients} />
      <Stack.Screen name="SelectR" component={SelectRecipes} />
      <Stack.Screen name="RecipteI" component={RecipteItem} />
    </Stack.Navigator>
  )
}

export default MealQuizNavigator
