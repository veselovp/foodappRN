import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/store'

import TabBar from './components/TabBarComponent'

import WeekScreen from './screens/WeekScrean'
import RecipesScreen from './screens/RecipesScreen'
import ProfileScreen from './screens/ProfileScreen.js'
import ShoppingScreen from './screens/ShopingScreen'

import MealQuizNavigator from './quiz/Meal/MealQuizNavigator'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Provider store={store}>
      <Tab.Navigator
        initialRouteName="Day"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen
          name="Day"
          component={MealQuizNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Week" component={WeekScreen} />
        <Tab.Screen name="Recipes" component={RecipesScreen} />
        <Tab.Screen name="Shopping" component={ShoppingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </Provider>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
