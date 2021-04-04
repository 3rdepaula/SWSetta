import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import imgBackground from '../../../assets/backgroundDetails.jpeg'

import { Result } from '../../types/person.type'
import styles from './styles'

function PersonDetailsCardItem ({ name, height, mass }: Pick<Result, 'name' | 'height' | 'mass'>): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground source={imgBackground} style={styles.imgBackground}>
        <Text style={[styles.text, { fontSize: 30, textAlign: 'center', marginVertical: 20, fontWeight: 'bold' }]}> {name} </Text>
        <View style={styles.content}>
          <Text style={styles.text}> Altura: {height} </Text>
          <Text style={styles.text}> Peso: {mass} </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PersonDetailsCardItem
