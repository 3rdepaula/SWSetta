import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import DetailsPerson from '../screens/DetailsPerson'

const { Navigator, Screen } = createStackNavigator()

function RoutesApp (): JSX.Element {
  return (
    <Navigator
      initialRouteName='Home' screenOptions={{
        headerShown: true
      }}
    >
      <Screen name='Início' component={Home} />
      <Screen name='Detalhes' component={DetailsPerson} />
    </Navigator>
  )
}

export default RoutesApp
