import { View, Text } from 'react-native'

import { useDispatch } from 'react-redux'
import { UpdateTextAction } from '../store/actions/UpdateTextAction'

import { useSelector } from 'react-redux'

import IngridientItemComponent from './ingridientItemComponent'

const IngridientListComponent = (props) => {
  const dispatch = useDispatch()
  dispatch(UpdateTextAction(props.title))

  const text = useSelector(state => state.textReducer.text)
  console.log(text)
  
  return (
    <View>
      <IngridientItemComponent name={'egg'} />
      <IngridientItemComponent name={'Egg Jolk'} />
    </View>
  )
}

export default IngridientListComponent
