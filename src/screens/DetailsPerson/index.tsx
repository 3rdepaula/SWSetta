import React from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import PersonDetailsCardItem from '../../components/PersonDetailsCardItem'

function DetailsPerson (): JSX.Element {
  const route = useRoute()

  // Dados vindos do componente PersonCardMain
  const { details }: any = route.params

  return (
    <View>
      <PersonDetailsCardItem name={details.name} height={details.height} mass={details.mass} />
    </View>
  )
}

export default DetailsPerson
