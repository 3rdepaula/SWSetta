import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import PersonCardMain from '../../components/PersonCardMain'
import ModalPayment from '../../components/ModalPayment'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Home (): JSX.Element {
  const [time, setTime] = useState<boolean>(false)

  const verifyPayment = async (): Promise<void> => {
    await AsyncStorage.getItem('@keyValuePayment').then((response) => {
      if (response === 'Pagar') {
        setTime(false)
      } else {
        setTimeout(function () {
          setTime(true)
        }, 45000)
      }
    })
  }

  useEffect(() => {
    // Modal para efetuar pagamento
    verifyPayment()
  }, [])

  return (
    <SafeAreaView>
      <PersonCardMain />
      {time && <ModalPayment />}
    </SafeAreaView>
  )
}

export default Home
