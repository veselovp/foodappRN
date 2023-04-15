import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator()

function MealQuiz({ handleQuizCompletion }) {
  return (
    <Stack.Navigator initialRouteName="LadyOrMan">
      <Stack.Screen name="LadyOrMan" component={LadyOrManComponent} />
      <Stack.Screen name="BodyGoal" component={BodyGoalComponent} />
      <Stack.Screen
        name="FoodPreferences"
        component={FoodPreferencesComponent}
      />
      <Stack.Screen name="Allergy" component={AllergyListComponent} />
      <Stack.Screen
        name="Calculate"
        component={() => (
          <CalorieCalculator handleQuizCompletion={handleQuizCompletion} />
        )}
      />
    </Stack.Navigator>
  )
}

export default MealQuiz
