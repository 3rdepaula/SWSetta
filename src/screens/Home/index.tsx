import React from 'react'
import { SafeAreaView } from 'react-native'
import CardPerson from '../../components/CardPerson'

function Home (): JSX.Element {
  return (
    <SafeAreaView>
      <CardPerson />
    </SafeAreaView>
  )
}

export default Home
