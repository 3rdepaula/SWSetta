import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RoutesApp from './src/routes/app.routes'

export default function App (): JSX.Element {
  return (
    <NavigationContainer>
      <RoutesApp />
    </NavigationContainer>
  )
}
