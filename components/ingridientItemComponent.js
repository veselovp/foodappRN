import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IngridientItemComponent = ({ name }) => {
  const [added, setAdded] = useState(false)

  const toggleAdded = () => {
    setAdded(!added)
  }

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EAEAEA',
        borderRadius: 50,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#D1D1D1',

      }}
      onPress={toggleAdded}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: added ? '#FFC107' : '#F5F5F5',
            borderRadius: 50,
            width: 30,
            height: 30,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {added ? (
            <Ionicons name="close" size={20} color="white" />
          ) : (
            <Ionicons name="checkmark" size={20} color="#333333" />
          )}
        </View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default IngridientItemComponent
