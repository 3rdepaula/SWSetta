import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import PersonCardMain from '../../components/PersonCardMain'
import ModalPayment from '../../components/ModalPayment'

function Home (): JSX.Element {
  const [time, setTime] = useState<boolean>(false)

  useEffect(() => {
    // Modal para efetuar pagamento
    setTimeout(function () {
      setTime(true)
    }, 45000)
  }, [])

  return (
    <SafeAreaView>
      <PersonCardMain />
      {time && <ModalPayment />}
    </SafeAreaView>
  )
}

export default Home
