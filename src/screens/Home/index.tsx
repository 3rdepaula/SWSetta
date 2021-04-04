import React, { useEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import CardPerson from '../../components/CardPerson'
import ModalPayment from '../../components/ModalPayment'
import { AntDesign } from '@expo/vector-icons'

function Home ({ navigation }: any): JSX.Element {
  const [time, setTime] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(function () {
      setTime(true)
    }, 45000)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => navigation.openDrawer()}>
        <AntDesign name='menuunfold' size={24} color='black' />
      </TouchableOpacity>
      <CardPerson />
      {time && <ModalPayment />}
    </SafeAreaView>
  )
}

export default Home
