import React, { useState } from 'react'
import { Alert, Modal, Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

function ModalPayment (): JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(true)

  const verifyPayment = async (value: string): Promise<void> => {
    await AsyncStorage.setItem('@keyValuePayment', value)
    setModalVisible(false)
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Atenção</Text>
            <Text style={styles.modalText}>Para você continuar tendo acesso ao lado negro da força, assine nosso Plus!</Text>
            <View style={styles.containerBtn}>
              <RectButton
                style={[styles.button, styles.buttonClose]}
                onPress={async () => await verifyPayment('Pagar')}
              >
                <Text style={styles.textStyle}>Pagar</Text>
              </RectButton>
              <RectButton
                style={[styles.button, styles.buttonClose]}
                onPress={async () => await verifyPayment('Mais tarde')}
              >
                <Text style={styles.textStyle}>Mais tarde</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalPayment
